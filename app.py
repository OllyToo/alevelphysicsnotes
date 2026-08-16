"""
Mr Toogood's Physics — Flask migration.

Incremental migration approach:
  - Pages listed below are "migrated": served by Flask via templates/ that
    extend base.html (which replaces template.html + header.php/footer.php).
  - Pages NOT yet migrated should stay on the existing PHP/HTML site until
    their turn comes. Don't try to route everything through Flask at once —
    that turns a page-by-page migration into a big-bang rewrite by accident.

Run locally:
    pip install -r requirements.txt
    flask --app app run --debug

Then visit http://127.0.0.1:5000/
"""

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")

@app.route("/mechanics/vectors")
def vectors():
    return render_template("mechanics/vectors.html")

@app.route("/mechanics/statics")
def statics():
    return render_template("mechanics/statics.html")

@app.route("/mechanics/moments")
def moments():
    return render_template("mechanics/moments.html")

@app.route("/mechanics/motion")
def motion():
    return render_template("mechanics/motion.html")

@app.route("/mechanics/projectiles")
def projectiles():
    return render_template("mechanics/projectiles.html")

@app.route("/mechanics/newtonlaws")
def newtonlaws():
    return render_template("mechanics/newtonlaws.html")

@app.route("/mechanics/energy")
def energy():
    return render_template("mechanics/energy.html")

@app.route("/mechanics/momentum")
def momentum():
    return render_template("mechanics/momentum.html")

@app.route("/electricity/charge-and-current")
def charge_and_current():
    return render_template("electricity/charge_and_current.html")


@app.route("/electricity/resistors")
def resistors():
    return render_template("electricity/resistors.html")


@app.route("/electricity/resistivity")
def resistivity():
    return render_template("electricity/resistivity.html")


@app.route("/electricity/power-and-resistance")
def power_and_resistance():
    return render_template("electricity/power_and_resistance.html")


@app.route("/electricity/emf-and-internal-resistance")
def emf_and_internal_resistance():
    return render_template("electricity/emf_and_internal_resistance.html")


@app.route("/electricity/potential-dividers")
def potential_dividers():
    return render_template("electricity/potential_dividers.html")


@app.route("/periodic-motion/circular-motion")
def circular_motion():
    return render_template("periodic_motion/circular_motion.html")


@app.route("/periodic-motion/applying-circular-motion")
def applying_circular_motion():
    return render_template("periodic_motion/applying_circular_motion.html")


@app.route("/periodic-motion/shm")
def shm():
    return render_template("periodic_motion/shm.html")


@app.route("/periodic-motion/harmonic-systems")
def harmonic_systems():
    return render_template("periodic_motion/harmonic_systems.html")


@app.route("/periodic-motion/damping")
def damping():
    return render_template("periodic_motion/damping.html")


@app.route("/periodic-motion/resonance")
def resonance():
    return render_template("periodic_motion/resonance.html")


@app.route("/thermal-physics/specific-heat-capacity")
def specific_heat():
    return render_template("thermal_physics/specific_heat.html")


@app.route("/thermal-physics/latent-heat")
def latent_heat():
    return render_template("thermal_physics/latent_heat.html")


@app.route("/thermal-physics/gas-laws")
def gas_laws():
    return render_template("thermal_physics/gas_laws.html")


@app.route("/thermal-physics/kinetic-theory")
def kinetic_theory():
    return render_template("thermal_physics/kinetic_theory.html")


@app.route("/astrophysics/lenses")
def lenses():
    return render_template("astrophysics/lenses.html")


@app.route("/astrophysics/telescopes")
def telescopes():
    return render_template("astrophysics/telescopes.html")


@app.route("/astrophysics/non-optical-telescopes")
def non_optical_telescopes():
    return render_template("astrophysics/non_optical_telescopes.html")


@app.route("/astrophysics/classification")
def classification():
    return render_template("astrophysics/classification.html")


@app.route("/astrophysics/classification-by-temperature")
def classification_by_temperature():
    return render_template("astrophysics/black_body_rad.html")


@app.route("/astrophysics/hr-diagram")
def hr_diagram():
    return render_template("astrophysics/hr_diagrams.html")


@app.route("/astrophysics/life-and-death-of-stars")
def deadstars():
    return render_template("astrophysics/deadstars.html")


@app.route("/astrophysics/doppler-effect")
def doppler_effect():
    return render_template("astrophysics/doppler_effect.html")


@app.route("/astrophysics/big-bang-and-cosmology")
def big_bang():
    return render_template("astrophysics/big_bang.html")


@app.route("/astrophysics/extension/sun-fusion")
def sun_fusion():
    return render_template("extensions/sun_fusion.html")


@app.route("/astrophysics/extension/is-the-sun-hot-enough")
def is_the_sun_hot_enough():
    return render_template("extensions/is_the_sun_hot_enough.html")


@app.route("/astrophysics/extension/betelgeuse-supernova")
def betelgeuse_supernova():
    return render_template("extensions/betelgeuse_supernova.html")


@app.route("/maths-skills/isothermal-changes")
def isothermal_changes():
    return render_template("maths_skills/isothermal_changes.html")


@app.route("/maths-skills/what-is-a-radian")
def what_is_a_radian():
    return render_template("maths_skills/what_is_a_radian.html")


@app.route("/maths-skills/deriving-equations-of-motion")
def deriving_equations_of_motion():
    return render_template("maths_skills/deriving_equations_of_motion.html")


@app.route("/maths-skills/aqa-2016-momentum-energy")
def aqa_2016_momentum_energy_q():
    return render_template("maths_skills/AQA_2016_momentum_energy_Q.html")


@app.route("/mechanics/extension/elastic-collisions")
def elastic_collisions_extension():
    return render_template("extensions/elastic_collisions_extension.html")



if __name__ == "__main__":
    app.run(debug=True)
