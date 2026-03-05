
export const Tarjetas = ({ titulo, description, imagen }) => {
    return (
        <>
            <section>
                <div >
                    <div className="text-start">

                        <div className="bg-white rounded-4 d-flex justify-content-center align-items-center mb-4" style={{ width: "55px", height: "55px" }}>
                            <img src= {imagen} />
                        </div>

                        <h4 className="fw-semibold mb-3">  {titulo} </h4>

                        <p className="textoContent" > {description}  </p>

                    </div>
                </div>
            </section>
        </>
    )
}
