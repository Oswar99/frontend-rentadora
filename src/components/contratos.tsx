import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

import Modal from "./modal";
import { postContrato, getContrato, putContrato } from "../services/contrato.service";
import useFormHelper from "../helpers/useFormHelper";

const ContratoForm: React.FC = ()=>{
    const [cleanUp,setCleanUp] = useState(true);
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Esta seguro que desea guardar?");
    const [completed,setCompleted] = useState(false);

    function hideModal(){
        setShowmodal(false);
      }
  
      function showModal(){
        setShowmodal(true);
      }     

      function saveLanguage(){

        if(!completed){
          setSubmitting(true);
          setMessage("Enviando...");
            
          if(id){
            putContrato(id,values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Guardado con Exito!");          
              }else{
                setMessage("Error!");
              }
            })
          }else{
            postContrato(values).then(value=>{
                setCompleted(true);
                setSubmitting(false);
                if(value.data.successed){
                    setMessage("Guardado con Exito!");          
                }else{
                    setMessage("Error!");
                }
            })
          }
        }else{
          setCompleted(false);
          setMessage("Esta seguro que desea guardar?");
          hideModal();
        }
        
      }

    const {id} = useParams();

      
    const states = useState({
        Contrato: "",
        Fecha: "",
        Estado: "1",
        AbonoPrevio: "",
        Empleado: "",
        Cliente: "",
    });

    const {
        values,      
        handleChange,
        updateValues      
    } = useFormHelper(states);

    useEffect(()=>{
        if(id && cleanUp){
          setCleanUp(false);
          getContrato(id).then(value=>{
            updateValues({
                Contrato: value.data.Contrato,
                Fecha: value.data.Fecha,
                Estado: value.data.Estado,
                AbonoPrevio: value.data.AbonoPrevio,
                Empleado: value.data.Empleado,
                Cliente: value.data.Cliente
            });          
          })
        }
      },[id,updateValues,cleanUp])

    return(
        <div>
            <Modal
                title="Confirmation"
                description={message}
                lbl_main_btn="Ok"
                lbl_snd_btn="No"
                show={showmodal}
                closeModal={hideModal}
                accept={saveLanguage}
                submitting={submitting}
                completed={completed}
            />
            <form className="align-items-center" >
                <div className="form-group">
                    <label htmlFor="ContratoGroup">Contrato: </label>
                    <input 
                        type= "text"
                        className="form-control" 
                        id="ContratoGroup"
                        onChange={handleChange}
                        name="Contrato"
                        defaultValue= {Math.floor(Math.random()*(999999-100000) + 100000)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="FechaGroup">Fecha: </label>
                    <input 
                        type= "date"
                        className="form-control" 
                        id="FechaGroup"
                        onChange={handleChange}
                        name="Fecha"
                        defaultValue={values.Fecha}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="AbonoPrevioGroup">AbonoPrevio: </label>
                    <input 
                        type= "text"
                        className="form-control" 
                        id="AbonoPrevioGroup"
                        onChange={handleChange}
                        name="AbonoPrevio"
                        defaultValue={values.AbonoPrevio}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="EmpleadoGroup">Empleado: </label>
                    <input 
                        type= "text"
                        className="form-control" 
                        id="EmpleadoGroup"
                        onChange={handleChange}
                        name="Empleado"
                        defaultValue={values.Empleado}
                    />
                </div>
                
            </form>
            <hr />
            <div className="navbar-nav ml-auto">
                <button className="btn btn-primary" onClick={showModal} >Aceptar</button>
            </div>
        </div>
    )
}

export default ContratoForm;