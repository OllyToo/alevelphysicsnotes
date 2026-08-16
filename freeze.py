"""
freeze.py — bake the Flask app down to static HTML files.

Why this exists instead of Frozen-Flask:
  Frozen-Flask hasn't seen meaningful maintenance in years. Since every route
  in app.py is a plain `render_template()` call with no arguments, we don't
  need Frozen-Flask's URL-discovery machinery at all — we can just import the
  routes straight from app.py and hit each one with Flask's own test client
  (a standard part of Flask, actively maintained as long as Flask is).

What it does:
  1. Imports `app` from app.py (does NOT run the dev server).
  2. Walks app.url_map for every GET route.
  3. Requests each route via test_client() and writes the HTML response to
     OUTPUT_DIR, using Cloudflare Pages' preferred "clean URL" layout:
       /mechanics/vectors  ->  dist/mechanics/vectors/index.html
       /                   ->  dist/index.html
  4. Copies the static/ folder across unchanged (css, js, images, fonts).

Run:
    python freeze.py

Then check dist/ locally, e.g.:
    cd dist && python -m http.server 8000
"""

from __future__ import annotations

import shutil
from pathlib import Path

from app import app

OUTPUT_DIR = Path("dist")
STATIC_SRC = Path("static")


def clean_output_dir() -> None:
    if OUTPUT_DIR.exists():
        shutil.rmtree(OUTPUT_DIR)
    OUTPUT_DIR.mkdir(parents=True)


def route_to_output_path(rule_path: str) -> Path:
    """Map a Flask URL rule to a static output file, using clean URLs.

    '/'                    -> dist/index.html
    '/mechanics/vectors'   -> dist/mechanics/vectors/index.html
    """
    if rule_path == "/":
        return OUTPUT_DIR / "index.html"
    trimmed = rule_path.strip("/")
    return OUTPUT_DIR / trimmed / "index.html"


def iter_static_get_routes():
    """Yield every route that's a plain GET page (skip static file route,
    skip anything requiring URL parameters — this site has none, but the
    check is here so a future dynamic route fails loudly instead of being
    silently skipped or silently mis-frozen).
    """
    for rule in app.url_map.iter_rules():
        if rule.endpoint == "static":
            continue
        if "GET" not in rule.methods:
            continue
        if rule.arguments:
            raise ValueError(
                f"Route '{rule.rule}' (endpoint '{rule.endpoint}') takes "
                f"arguments {sorted(rule.arguments)} — this freeze script "
                f"only handles fixed, argument-free routes. Extend "
                f"iter_static_get_routes() before adding dynamic routes."
            )
        yield rule


def freeze_routes(client) -> list[str]:
    frozen = []
    for rule in iter_static_get_routes():
        url = rule.rule
        response = client.get(url)
        if response.status_code != 200:
            raise RuntimeError(
                f"Route '{url}' returned status {response.status_code} "
                f"instead of 200 — fix the page before freezing."
            )
        out_path = route_to_output_path(url)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_bytes(response.get_data())
        frozen.append(url)
    return frozen


def copy_static_assets() -> None:
    if not STATIC_SRC.exists():
        print(f"Warning: no '{STATIC_SRC}' folder found — skipping asset copy.")
        return
    shutil.copytree(STATIC_SRC, OUTPUT_DIR / "static")


def main() -> None:
    clean_output_dir()

    app.config["TESTING"] = True
    with app.test_client() as client:
        frozen = freeze_routes(client)

    copy_static_assets()

    print(f"Froze {len(frozen)} routes to '{OUTPUT_DIR}/':")
    for url in frozen:
        print(f"  {url}")
    print(f"\nStatic assets copied to '{OUTPUT_DIR}/static/'.")
    print(f"Preview with: cd {OUTPUT_DIR} && python -m http.server 8000")


if __name__ == "__main__":
    main()
