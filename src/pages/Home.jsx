import '../stylesheets/Home.css'

export const Home = () => {
  return (
    <>
      <div className="container">
        {/* las columnas las puedes distrinuir teniendo en cuenta un margen de 0 a 12 calculados entre cada columna*/}
        <div className="row">

          <div className="col-6">
            <div className="d-flex flex-column justify-content-center h-100 gap-5" >
              <div >
                <h1>Make <br /> remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and FR watch productivity soar.</p>
                <a href="http://www.jango.com" class="btn btn-secondary btn-lg btn-dark">Learn more</a>
              </div>
              <div className="d-flex flex-row d-grid gap-5">
                <img src="../public/img1.svg" height="25" alt="" />
                <img src="../public/img2.svg" height="25" alt="" />
                <img src="../public/img3.svg" height="25" alt="" />
                <img src="../public/img4.svg" height="25" alt="" />
              </div>
            </div>
          </div>
          {/* Responsive */}
          <div className="col-6">
            <div>
              <img src="../public/img.png" className="img-cropped" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
