import { Tarjetas } from '../components/Tarjetas'
import '../stylesheets/Careers.css'

export const Careers = () => {
  return (
    <>
      <div className="careers-page">

        <section className="d-flex flex-column justify-content-center gap-5">
          <div className="hero__content d-flex justify-content-center align-items-center flex-column">
            <p>Careers Page</p>
            <p className="title" ><strong> Healthy meals, zero fuss</strong></p>
            <p>
              Discover eight quick, whole-food recipes that you can cook
              tonight—no processed junk, no guesswork.
            </p>
            <a className="btn btn-primary btn-lg" data-bs-toggle="button" style={{ backgroundColor: "#163a34", borderBlockColor: "#b4d1cc" }} > Start exploring </a>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className="p-2 bg-white rounded-3 shadow">

              <img
                src="/1img.webp"
                className="img-fluid rounded-3"
              />

            </div>
          </div>
          <div className="text-center mb-5 p-0">
            <h1 className="title mb-5">What you’ll get</h1>
            <div className="row">
              <div className='col'>
                <Tarjetas imagen="/zanahoria.svg" titulo="Whole-food recipes" description="Each dish uses everyday, unprocessed ingredients." />
              </div>
              <div className='col'>
                <Tarjetas imagen="/rayo2.svg" titulo="Minimum fuss" description="All recipes are designed to make eating healthy quick and easy." />
              </div>
              <div className='col'>
                <Tarjetas imagen="/lupa3.svg" titulo="Search in seconds" description="Filter by name or ingredient and jump straight to the recipe you need." />
              </div>
            </div>
          </div>
          <div>
            <div className="row" >
              <div className="col-5 text-start">
                <h2 className="title mb-4">Built for real life</h2>
                <p className="mb-4">
                  Cooking shouldn’t be complicated. These recipes come in
                  under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.
                </p>
                <p>
                  Whether you’re new to the kitchen or just need fresh ideas,
                  we’ve got you covered.
                </p>
              </div>
              <div className="col-7 ps-5">
                <div>
                  <img
                    src="/2cocina.webp" className="img-fluid rounded-4 " />
                </div>
              </div>

            </div>
          </div>

          <div className="">
            <div className=''>
              <h2>Ready to cook smarter?</h2>
              <p>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
               <a className="btn btn-primary btn-lg" data-bs-toggle="button" style={{ backgroundColor: "#163a34", borderBlockColor: "#b4d1cc" }} > Start exploring </a>
            </div>
          </div>
        </section>

      </div>

    </>
  )
}
