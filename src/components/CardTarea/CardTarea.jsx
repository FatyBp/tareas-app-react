export const CardTarea = ({ tarea, index, handleCambiar,handleEliminar,id}) =>{
// export const CardTarea = ({ tarea, index, handleCambiar }) => {
    return (
        <>
            <div className="col">
                <div
                    className={tarea.realizado ? "card bg-success" : "card bg-light"}
                    style={{ width: "20rem" }}
                >
                    <div className="card-body">
                        <h5 className="card-title">Tarea: {id+1}</h5>
                        <p className="card-text">{tarea.descripcion}</p>
                        <hr />
                        <div className="d-grid gap-2">
                            <button className="btn btn-danger" onClick={()=>handleEliminar(index)}>Eliminar</button>

                            <button className="btn btn-info" onClick={() => handleCambiar(index)}>
                                {tarea.realizado ? "marcar como inconclusa" : 
                                "marcar como terminada"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};