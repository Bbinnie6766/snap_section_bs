import '../stylesheets/Contacto.css'


export const Contacto = () => {
  return (
    <div className="contacto-page d-flex flex-column justify-content-center align-items-center min-vh-100">

      <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5" style={{ maxWidth: "620px", width: "100%" }}>

        <h2 className="fw-bold mb-4 contacto-titulo">Contact Us</h2>

        {/* Nombre y apellido */}
        <div className="row g-3 mb-3">
          <div className="col-6">
            <label className="form-label fw-semibold">First Name <span className="contacto-asterisco">*</span></label>
            <input type="text" className="form-control contacto-input" />
          </div>
          <div className="col-6">
            <label className="form-label fw-semibold">Last Name <span className="contacto-asterisco">*</span></label>
            <input type="text" className="form-control contacto-input" />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email Address <span className="contacto-asterisco">*</span></label>
          <input type="email" className="form-control contacto-input" />
        </div>

        {/* Query Type */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Query Type <span className="contacto-asterisco">*</span></label>
          <div className="row g-3">
            <div className="col-6">
              <div className="contacto-radio d-flex align-items-center gap-2 p-3">
                <input type="radio" name="queryType" id="generalEnquiry" />
                <label htmlFor="generalEnquiry" className="mb-0">General Enquiry</label>
              </div>
            </div>
            <div className="col-6">
              <div className="contacto-radio d-flex align-items-center gap-2 p-3">
                <input type="radio" name="queryType" id="supportRequest" />
                <label htmlFor="supportRequest" className="mb-0">Support Request</label>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Message <span className="contacto-asterisco">*</span></label>
          <textarea className="form-control contacto-input" rows="5"></textarea>
        </div>

        {/* Checkbox */}
        <div className="form-check mb-4">
          <input type="checkbox" className="form-check-input" id="consent" />
          <label className="form-check-label" htmlFor="consent">
            I consent to being contacted by the team. <span className="contacto-asterisco">*</span>
          </label>
        </div>

        {/* Botón */}
        <button className="btn contacto-btn w-100 fw-bold text-white">Submit</button>

      </div>

      {/* Footer */}
      <p className="mt-4 text-secondary small">
        Challenge by <a href="#" className="contacto-link">Frontend Mentor</a>. Coded by <a href="#" className="contacto-link">Kylan Duncan</a>.
      </p>

    </div>
  )
}