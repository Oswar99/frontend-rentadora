import React from "react";
import {CacheStorage} from "../helpers/cache.storage"

const LoginEmpleados: React.FC = () =>{
  
    function btnAceptar(){
        const c: CacheStorage = new CacheStorage();
        c.saveCache({Usuario: "", Contraseña: ""}, "Credenciales")
    }

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <br />
                <form className="align-items-center">
                    <div className="card-header">
                        <h3 style={{textAlign: "center"}}><b>Iniciar Sesion</b></h3>
                    </div>
                    <br />
                    <div className="card-body" style={{justifyContent: "center",alignItems: "center"}}>
                        <div className="form-group">
                            <h5><label  htmlFor="formGroupExampleInput">Usuario:</label></h5>
                            <input 
                                style={{width: 250}}
                                type="text"
                                name="Usuario"
                                className="form-text"
                                id="formGroupExampleInput"
                            />
                        </div>
                        <div className="form-group">
                            <h5><label htmlFor="formGroupExampleInput2">Contraseña:</label></h5>
                            <input
                                style={{width: 250}}
                                type="text"
                                name="Contraseña"
                                className="form-text"
                                id="formGroupExampleInput2"
                            />
                        </div>
                    </div>
                    <div className="card-footer" >
                        <button className="btn btn-primary" onClick={btnAceptar}>Aceptar</button>
                    </div>
                </form>
        </div>
    );
}

export default LoginEmpleados;