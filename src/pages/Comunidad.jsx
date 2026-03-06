import '../stylesheets/Comunidad.css'
import { Tarjeta } from '../components/Tarjeta'

export const Comunidad = () => {

  const beneficios = [
    "Tutorials by industry experts",
    "Peer & expert code review",
    "Coding exercises",
    "Access to our GitHub repos",
    "Community forum",
    "Flashcard decks",
    "New videos every week"
  ]

  return (
    <div className="comunidad-page d-flex justify-content-center align-items-center min-vh-100">

      <div className="card shadow border-0 overflow-hidden rounded-4" style={{ maxWidth: "570px", width: "100%" }}>

        {/* top */}
        <div className="p-4 bg-white">
          <h2 className="fw-bold mb-1 comunidad-titulo">Join our community</h2>
          <h5 className="fw-bold mb-3 comunidad-garantia">30-day, hassle-free money back guarantee</h5>
          <p className="text-secondary mb-0 text-primary --bs-text-"style={{opacity: ".5" }} >
            Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.
          </p>
        </div>

        {/* bottom */}
        <div className="row g-0">

          <div className="col-6 panel-izquierdo">
            <Tarjeta
              titulo="Monthly Subscription"
              precio="$29"
              periodo="per month"
              descripcion="Full access for less than $1 a day"
              boton="Sign Up"
            />
          </div>

          <div className="col-6 panel-derecho">
            <Tarjeta
              titulo="Why Us"
              lista={beneficios}
            />
          </div>

        </div>

      </div>

    </div>
  )
}