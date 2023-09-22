//  FORMA 1
// const App=()=>{
//     return <h1>hola mundo desde react</h1>
// }
// const App = () =><h1>hola mundo desde react</h1>
// export default App;
// FORMA 2
//  export const App=()=>{
//     return <h1>hola mundo desde react</h1>
// }

import { Formulario_tarea } from "./components/Formulario_tarea/Formulario_tarea"
import { Header } from "./components/Header/Header"
import { CardTarea } from "./components/CardTarea/CardTarea"
import { Footera } from "./components/Footer/Footera"
import { useEffect, useReducer, useState } from "react"
import { tareaReducer } from "./reducers/tareaReducer"
import Swal from "sweetalert2"
// FORMA 3 rafc
// import React from 'react'
export const App = () => {
  const init = () =>{
    return JSON.parse(localStorage.getItem("tareas")) || []
    // return[
    //   {
    //     id:1,
    //     descripcion:"estudiar",
    //     realizado:false
    //   },{
    //     id:2,
    //     descripcion:"tarea",
    //     realizado:false
    //   },{
    //     id:3,
    //     descripcion:"tarea3",
    //     realizado:false
    //   }
    // ]
  }
const[state, dispatch] = useReducer(tareaReducer,[],init)

const[descripcion,setDescripcion]= useState("")
useEffect(() => {
  localStorage.setItem("tareas",JSON.stringify(state))
}, [state])

const handleInputChange = (evento) => {
 setDescripcion(evento.target.value)/*estudiar*/
 console.log(descripcion)
}
const handleSubmit = (evento) =>{
 evento.preventDefault();
 if (descripcion == "") {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Falta llenar la descripcion',
  })
 }else{
    const TareaNueva ={
      id: new Date().getTime(),
      descripcion:descripcion,
      realizado: false
    }
    const action={
      type: "agregar",
      payload:TareaNueva
    }
    dispatch(action)
    //  console.log(evento)
    setDescripcion("")
    }
  }
 const handleCambiar = (id )=>{
  dispatch ({
    type:"cambiar",
    payload: id
  })
  console.log(state)
 }
 const handleEliminar =(id)=>{
  Swal.fire({
    title: 'Seguro que quieres eliminar?',
    text: "No podras volver a recuperar!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch({
        type:"borrar",
        payload:id
      })
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
 }
 let terminadas =0
 for (let i = 0; i < state.length; i++) {
    if (state[i].realizado===true) {
      terminadas++;
    } 
  }
  
  let porcentaje = terminadas/state.length
  return ( //fragmentacion
    <>
    <Header/>
    <div className="container" >
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <Formulario_tarea descripcion={descripcion} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
            </div>
            <div className="col-sm-7">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {
                // console.log(state)
                state.map((tarea,index)=>{
                  return <CardTarea key={index} handleEliminar={handleEliminar} handleCambiar={handleCambiar} tarea={tarea} id={index} index={tarea.id}/>
                })
              }
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <Footera porcentaje={porcentaje}/>
        </div>  
    </>
    
  )
}
