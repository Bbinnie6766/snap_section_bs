import '../stylesheets/Careers.css'

export const Careers = () => {
  return (
    <>
      <div className="careers-page">

        <section className="d-flex justify-content-center">
          <div className="hero__content d-flex justify-content-center align-items-center flex-column">
            <p>Careers Page</p>
            <p className="title" ><strong> Healthy meals, zero fuss</strong></p>
            <p>
              Discover eight quick, whole-food recipes that you can cook
              tonight—no processed junk, no guesswork.
            </p>
            <a className="btn btn-primary btn-lg" data-bs-toggle="button" style={{ backgroundColor: "#163a34", borderBlockColor: "#b4d1cc" }} > Start exploring </a>

            <div className="d-flex justify-content-center mt-4">
              <div className="p-2 bg-white rounded-3 shadow" style={{ maxWidth: "" }}>

                <img
                  src="/1img.webp"
                  alt="Imagen principal"
                  className="img-fluid rounded-3"
                />

              </div>
            </div>

          </div>
        </section>

      </div>

      {/*      <div className='tarjetas'>

        <section className="d-flex justify-content-center">
          <div className='hero__content d-flex justify-content-center align-items-center flex-column'>
            <h1 className='title'>What you’ll get</h1>

            <div className="container text-center">
              <div className="row">
                <div className="col -4">
                  Column
                </div>
                <div className="col">
                  Column
                </div>
                <div className="col">
                  Column
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
 */}

      <div className="tarjetas py-5">

        <section className="container text-center">

          <h1 className="title mb-5">What you’ll get</h1>

          <div className="row g-5">

            {/* Tarjeta 1 */}
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column align-items-center">

                <div className="p-3 bg-white rounded-4 shadow-sm mb-3">
                  <img src="/zanahoria.svg" alt="Whole food icon" width="40" />
                </div>

                <h4 className="fw-semibold mb-3">Whole-food recipes</h4>

                <p className="text-muted">
                  Each dish uses everyday, unprocessed ingredients.
                </p>

              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column align-items-center">

                <div className="p-3 bg-white rounded-4 shadow-sm mb-3">
                  <img src="/rayo2.svg" alt="Minimum fuss icon" width="40" />
                </div>

                <h4 className="fw-semibold mb-3">Minimum fuss</h4>

                <p className="text-muted">
                  All recipes are designed to make eating healthy quick and easy.
                </p>

              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column align-items-center">

                <div className="p-3 bg-white rounded-4 shadow-sm mb-3">
                  <img src="/lupa3.svg" alt="Search icon" width="40" />
                </div>

                <h4 className="fw-semibold mb-3">Search in seconds</h4>

                <p className="text-muted">
                  Filter by name or ingredient and jump straight to the recipe you need.
                </p>

              </div>
            </div>

          </div>


          <div className="real-life-section py-5">

            <section className="container">
              <div className="row align-items-center g-5">

                {/* Texto izquierda */}
                <div className="col-12 col-lg-6">
                  <h2 className="title mb-4">Built for real life</h2>

                  <p className="mb-4">
                    Cooking shouldn’t be complicated. These recipes come in
                    under <span className="fw-semibold text-decoration-underline">30 minutes</span>
                    of active time, fit busy schedules, and taste good enough to repeat.
                  </p>

                  <p>
                    Whether you’re new to the kitchen or just need fresh ideas,
                    we’ve got you covered.
                  </p>
                </div>

                {/* Imagen derecha */}
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                  <div className="rounded-4 overflow-hidden shadow">
                    <img
                      src="/2cocina.webp"
                      alt="Cooking"
                      className="img-fluid"
                    />
                  </div>
                </div>

              </div>
            </section>

          </div>

        </section>


      </div>
    </>
  )
}
