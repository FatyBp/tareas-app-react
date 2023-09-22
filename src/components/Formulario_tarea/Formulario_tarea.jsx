import { useState } from "react"
export const Formulario_tarea = ({handleInputChange,handleSubmit, descripcion})=>{

return (
<>
    <div className="container">
        <div className="row">
            <div className="col-16">
                    <div className="card-body">
                        <p className="card-text">
                            <h3>Agregar tarea</h3>
                            <hr />
                            <form onSubmit={(e) =>handleSubmit(e)}>
                            <div className="mb-2">
                                <label htmlFor="tareaInput" className="form-label">Descripcion</label>
                                <input onChange={(e)=> handleInputChange(e)} value={descripcion} type="text" className="form-control"></input>
                                <div id="descripcionText" className="form-text">Agregar desccripcion de la tarea</div>
                                <div></div>
                                    <br></br>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-outline-primary">Agregar</button>
                            </div>
                            </form>
                        </p>
                    </div>
                
            </div>
        </div>
    </div>

</>
)
}