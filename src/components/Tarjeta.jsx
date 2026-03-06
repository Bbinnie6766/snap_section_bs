export const Tarjeta = (props) => {
  return (
    <div className="text-white p-4 h-100">

      <h5 className="fw-bold mb-1">{props.titulo}</h5>

      {props.precio && (
        <div className="d-flex align-items-end gap-2 mb-2">
          <h2 className="fw-bold m-0">{props.precio}</h2>
          <span className="precio-periodo">{props.periodo}</span>
        </div>
      )}

      {props.descripcion && (
        <p className="mb-4">{props.descripcion}</p>
      )}

      {props.lista && (
        <ul className="list-unstyled small">
          {props.lista.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      )}

      {props.boton && (
        <button className="btn-registrarse w-100 fw-bold mt-3">
          {props.boton}
        </button>
      )}

    </div>
  )
}