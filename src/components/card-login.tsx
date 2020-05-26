import React, { useEffect, useState } from "react";
import {storageL} from "../helpers/cache.storage"
import useFormHelper from "../helpers/useFormHelper";
import { verifyClient } from "../services/cliente.service";
import { useParams, Redirect, Link } from "react-router-dom";
import { ICliente } from "../interfaces/cliente.interface";
import Modal from "./modal";


const LoginEmpleados: React.FC = () =>{
    const [direccion, setDireccion]= useState("/login");
    const [completed, setCompleted] = useState(false);
    const [retorned, setRetorned] = useState(false);

    const states = useState({
        Correo: "",
        Contraseña: ""
    }); 
    
    const {
        values,      
        handleChange,
        updateValues      
    } = useFormHelper(states);
    
    const {correo, contra} = useParams();

    useEffect(()=>{
        if(contra && correo){
            verifyClient(correo,contra).then(val=>{
                if(val.data.Cliente){
                    const c: storageL = new storageL();
                    const cl: ICliente = val.data.Cliente;

                    c.saveCache(cl, "Cliente");
                    setCompleted(true);
                }
            });
        }
        if(values){
            setDireccion(`/login/${values.Correo}/${values.Contraseña}`);
        }
    })

    if(completed){
        return(
            <Redirect to="/"></Redirect>
        );
    }else{
        
    localStorage.removeItem("Cliente");
    return (
        
        <div>

        <Redirect to="/login"></Redirect>

        <div className="col-lg-4 col-md-6 mb-4">
            <br />
                <form className="align-items-center">
                    <div className="card-header">
                        <h3 style={{textAlign: "center"}}><b>Iniciar Sesion</b></h3>
                    </div>
                    <br />
                    <div className="card-body" style={{justifyContent: "center",alignItems: "center"}}>
                        <div className="form-group">
                            <h5><label  htmlFor="CorreoGroup">Usuario:</label></h5>
                            <input 
                                style={{width: 250}}
                                type="correo"
                                name="Correo"
                                onChange={handleChange}
                                className="form-text"
                                id="CorreoGroup"
                                />
                        </div>
                        <div className="form-group">
                            <h5><label htmlFor="ContraseñaGroup">Contraseña:</label></h5>
                            <input
                                style={{width: 250}}
                                type="password"
                                name="Contraseña"
                                onChange={handleChange}
                                className="form-text"
                                id="ContraseñaGroup"
                                />
                        </div>
                    </div>
                    <div className="card-footer" >
                        <Link className="btn btn-primary" to={direccion}>Aceptar</Link>
                    </div>
                </form>

        </div>
        </div>
    );
    }
}

export default LoginEmpleados;