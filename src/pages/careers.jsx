import { Tarjetas } from '../components/Tarjetas'
import '../stylesheets/Careers.css'

export const Careers = () => {
  return (

    <div className="careers-page">

      {/* cabecera */}
      <section className="py-5 text-center">
        <div className="container">

          <div className="hero__content d-flex flex-column align-items-center gap-3">

            <h1 className="hero__heading">
              <span>Healthy</span> meals, zero fuss
            </h1>

            <p className="textoContent col-lg-6">
              Discover eight quick, whole-food recipes that you can cook
              tonight—no processed junk, no guesswork.
            </p>

            <a className="btn btn-lg"
              style={{ backgroundColor: "#163a34", color: "white" }}>
              Start exploring
            </a>

          </div>

          <div className="p-2 bg-white rounded-4 shadow mt-5">
            <img
              src="/1img.webp"
              className="img-fluid rounded-4"
            />
          </div>

        </div>
      </section>


      {/* contenedores */}
      <section className="mb-5 p-0">
        <div className="container text-center">

          <h2 className="title mb-5">What you’ll get</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <Tarjetas
                imagen="/zanahoria.svg"
                titulo="Whole-food recipes"
                description="Each dish uses everyday, unprocessed ingredients."
              />
            </div>

            <div className="col-md-4">
              <Tarjetas
                imagen="/rayo2.svg"
                titulo="Minimum fuss"
                description="All recipes are designed to make eating healthy quick and easy."
              />
            </div>

            <div className="col-md-4">
              <Tarjetas
                imagen="/lupa3.svg"
                titulo="Search in seconds"
                description="Filter by name or ingredient and jump straight to the recipe you need."
              />
            </div>
          </div>

        </div>
      </section>


      {/* imagenb derecha */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <h2 className="title mb-4">Built for real life</h2>
              <p className="textoContent mb-3">
                Cooking shouldn’t be complicated. These recipes come in
                under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.
              </p>
              <p className="textoContent">
                Whether you’re new to the kitchen or just need fresh ideas,
                we’ve got you covered.
              </p>
            </div>

            <div className="col-lg-7">
              <img
                src="/2cocina.webp"
                className="img-fluid rounded-4 shadow"
                alt="Cooking"
              />
            </div>

          </div>
        </div>
      </section>


      {/* footer */}
      <section className="py-5">
        <div className="container">

          <div style={{ width: "100%", backgroundColor: "#e0e6e3" }} className=" text-center rounded-4 p-0 overflow-hidden">
            <div className="py-5 my-5 position-relative">
              <h2 className="title mb-2">Ready to cook smarter?</h2>
              <p className="textoContent mb-5">
                Hit the button, pick a recipe, and get dinner on the table—fast.
              </p>
              <a className="btn btn-lg" style={{ backgroundColor: "#163a34", color: "white" }} > Browse recipes </a>
              <img src="../public/tenedor4.svg" style={{
                position: "absolute",
                left: "-65px",
                top: "-10px"
              }} />
              <img src="../public/cuchillo5.svg" style={{
                position: "absolute",
                right: "-54px",
                top: "-10px"
              }} />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}