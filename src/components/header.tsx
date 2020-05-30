import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { getCarrito } from "../services/carrito.service";

const Header: React.FC = () => {
    const [lnk, setLnk] = useState(true);
    const [perfil, setPerfil] = useState("/");
    const [carrito, setCarrito] = useState("/login");
    const [CarritoLista, setCarritoLista] = useState([]);

    
    useEffect(()=>{  
        const obj: any = localStorage.getItem("Cliente");
        const cli: any = JSON.parse(obj);
        
        
        if(localStorage.getItem("Cliente")){
            getCarrito(cli._id).then( r=>{
                if(r.data){
                    setCarritoLista(r.data);
                }
            });
            setLnk(false);
            setPerfil(`/clientes/update/${cli._id}`);
            setCarrito(`/carrito/${cli._id}`);
        }else{
            setLnk(true);
        }
    })
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <div className="navbar-nav ml-auto">
                <h1><b>   
                    <Link className="nav-link" to="/">Inicio
                        <span className="sr-only">(current)</span>
                    </Link>
                </b></h1>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <h6>
                        <Link className="nav-link" to={carrito}>Carrito({CarritoLista.length})
                            <span className="sr-only">(current)</span>
                        </Link>
                    </h6>
                    </li>
                    {(CarritoLista.length > 0) && (
                        <li className="nav-item active">
                        <h6>
                            <Link className="nav-link" to="/reservacion">Reservar
                                <span className="sr-only">(current)</span>
                            </Link>
                        </h6>
                        </li>
                    )}
                    <li className="nav-item active">
                        <h6>
                            <Link className="nav-link" to="/AboutUs" >Acerca de
                                <span className="sr-only">(current)</span>
                            </Link>
                        </h6>
                    </li>
                    <li className="nav-item active">
                        <hr color="gray" style={{width: 2, height: 12}}></hr>
                    </li>
                    <li className="nav-item active">
                        <h6>
                        {(lnk) && (
                            <Link className="nav-link" to="/login" >Iniciar Sesion
                                <span className="sr-only">(current)</span>
                            </Link>
                        )}
                        </h6>
                    </li>  
                    <li className="nav-item active">
                        <h6>
                        {(lnk) && (
                            <Link className="nav-link" to="/clientes/new" >Registrarse
                                <span className="sr-only">(current)</span>
                            </Link>    
                        )}
                        {(!lnk) && (
                            <Link className="nav-link" to={perfil} >Mi Perfil
                                <span className="sr-only">(current)</span>
                            </Link>    
                        )}
                        </h6>  
                    </li>
                    <li>
                        <h6>
                        {(!lnk) && (
                            <Link className="nav-link" to="/login" >Cerrar Sesion
                                <span className="sr-only">(current)</span>
                            </Link>    
                        )}
                        </h6>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
    )
}

export default Header;