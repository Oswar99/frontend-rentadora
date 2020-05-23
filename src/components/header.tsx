import React from "react";
import {Link} from "react-router-dom";

const Header: React.FC = () => (
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
                        <Link className="nav-link" to="/">Carrito
                            <span className="sr-only">(current)</span>
                        </Link>
                    </h6>
                    </li>
                    <li className="nav-item">
                        <h6>
                            <Link className="nav-link" to="/AboutUs" >Acerca de
                                <span className="sr-only">(current)</span>
                            </Link>
                        </h6>
                    </li>
                    <li className="nav-item">
                        <hr color="gray" style={{width: 2, height: 12}}></hr>
                    </li>
                    <li className="nav-item">
                        <h6>
                            <Link className="nav-link" to="/Login/Cliente" >Iniciar Sesion
                                <span className="sr-only">(current)</span>
                            </Link>
                        </h6>
                    </li>  
                    <li className="nav-item">
                        <h6>
                            <Link className="nav-link" to="/clientes/new" >Registrarse
                                <span className="sr-only">(current)</span>
                            </Link>
                        </h6> 
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
)

export default Header;