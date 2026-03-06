import '../stylesheets/Login.css'

export const Login = () => {
  return (
    <div className="login-page min-vh-100">

      {/* NAVBAR */}
      <nav className="d-flex align-items-center gap-5 px-4 py-3">
        <div className="d-flex align-items-center gap-2">
          <div className="login-logo-circle"></div>
          <span className="text-white fw-bold">Anywhere app.</span>
        </div>
        <div className="d-flex gap-4">
          <a href="#" className="login-nav-link">Home</a>
          <a href="#" className="login-nav-link">Join</a>
        </div>
      </nav>

      {/* CONTENIDO */}
      <div className="px-4 mt-5" style={{ maxWidth: "500px" }}>

        <p className="login-subtitulo mb-1">START FOR FREE</p>
        <h1 className="text-white fw-bold mb-2">
          Create new account<span className="login-punto">.</span>
        </h1>
        <p className="login-miembro mb-4">
          Already A Member? <a href="#" className="login-link">Log In</a>
        </p>

        {/* Nombre y Apellido */}
        <div className="row g-3 mb-3">
          <div className="col-6">
            <div className="login-input-group">
              <label className="login-label">First name</label>
              <div className="d-flex align-items-center">
                <input type="text" className="login-input flex-grow-1" defaultValue="Michal" />
                <span className="login-icon">⊞</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="login-input-group">
              <label className="login-label">Last name</label>
              <div className="d-flex align-items-center">
                <input type="text" className="login-input flex-grow-1" defaultValue="Masiak" />
                <span className="login-icon">⊞</span>
              </div>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <div className="login-input-group">
            <label className="login-label">Email</label>
            <div className="d-flex align-items-center">
              <input type="email" className="login-input flex-grow-1" defaultValue="michal.masiak@anywhere.co" />
              <span className="login-icon">✉</span>
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="login-input-group login-input-group--active">
            <label className="login-label">Password</label>
            <div className="d-flex align-items-center">
              <input type="password" className="login-input flex-grow-1" defaultValue="12345678" />
              <span className="login-icon">👁</span>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="d-flex gap-3">
          <button className="btn login-btn-secondary px-4 py-2 fw-semibold">Change method</button>
          <button className="btn login-btn-primary px-4 py-2 fw-semibold text-white">Create account</button>
        </div>

      </div>

      {/* Logo AW abajo derecha */}
      <div className="login-aw-logo position-absolute bottom-0 end-0 p-4">
        <span className="text-white fw-bold fs-2">.W</span>
      </div>

    </div>
  )
}