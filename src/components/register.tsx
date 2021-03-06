import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

import Modal from "./modal";
import { postCliente, getCliente, putCliente } from "../services/cliente.service";
import useFormHelper from "../helpers/useFormHelper";
import SubHeader from "./subheader";

const ClienteForm: React.FC = ()=>{
    const [cleanUp,setCleanUp] = useState(true);
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Esta seguro que desea guardar?");
    const [completed,setCompleted] = useState(false);  
    const [titleHead, setTitleHead] = useState("Registrarse");

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
            putCliente(id,values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Guardado con Exito!");          
              }else{
                setMessage("Error!");
              }
            })
          }else{
            postCliente(values).then(value=>{
                setCompleted(true);
                setSubmitting(false);
                if(value.data.successed){
                    setMessage("Guardado con Exito!");          
                }else{
                    setMessage("Cliente ya existe!");
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
        Identificacion: "",
        Nombre: "",
        Edad: "",
        Sexo: "",
        VenLic: ""
    });

    const {
        values,      
        handleChange,
        updateValues      
    } = useFormHelper(states);

    useEffect(()=>{
        if(id && cleanUp){
          setCleanUp(false);
          setTitleHead("Modificar Cliente")
          getCliente(id).then(value=>{
            updateValues({
                Identificacion: value.data.Identificacion,
                Nombre: value.data.Nombre,
                Edad: value.data.Edad,
                Sexo: value.data.Sexo,
                VenLic: value.data.VenLic,
                Correo: value.data.Correo,
                Contraseña: value.data.Contraseña,
                Telefono: value.data.Telefono
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
            <hr />
                <SubHeader title={titleHead} />
              <hr />
            <form className="align-items-center" >
                <div className="form-group">
                    <label htmlFor="IdentificacionGroup">Identificacion: </label>
                    <input 
                        type= "text"
                        className="form-control" 
                        id="IdentificacionGroup"
                        onChange={handleChange}
                        name="Identificacion"
                        defaultValue={values.Identificacion}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="NombreGroup">Nombre: </label>
                    <input 
                        type= "text"
                        className="form-control" 
                        id="NombreGroup"
                        onChange={handleChange}
                        name="Nombre"
                        defaultValue={values.Nombre}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="EdadGroup">Edad: </label>
                    <input 
                        type= "number"
                        className="form-control" 
                        id="EdadGroup"
                        onChange={handleChange}
                        name="Edad"
                        defaultValue={values.Edad}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="SexoGroup">Sexo: </label>
                    <input 
                        type= "text"
                        className="form-control" 
                        id="SexoGroup"
                        onChange={handleChange}
                        name="Sexo"
                        defaultValue={values.Sexo}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="VenLicGroup">Licencia: </label>
                    <input 
                        type= "date"
                        className="form-control" 
                        id="VenLicGroup"
                        onChange={handleChange}
                        name="VenLic"
                        defaultValue={values.VenLic}
                    />
                </div>
                <SubHeader title="Datos de contacto."></SubHeader>
                <div className="form-group">
                    <label htmlFor="CorreoGroup">Correo: </label>
                    <input 
                        type= "text"
                        className="form-control" 
                        id="CorreoGroup"
                        onChange={handleChange}
                        name="Correo"
                        defaultValue={values.Correo}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ContraseñaGroup">Contraseña: </label>
                    <input 
                        type= "text"
                        className="form-control" 
                        id="ContraseñaGroup"
                        onChange={handleChange}
                        name="Contraseña"
                        defaultValue={values.Contraseña}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="TelefonoGroup">Telefono: </label>
                    <input 
                        type= "number"
                        className="form-control" 
                        id="TelefonoGroup"
                        onChange={handleChange}
                        name="Telefono"
                        defaultValue={values.Telefono}
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

export default ClienteForm;