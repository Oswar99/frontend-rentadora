import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

interface ICardCliente{
    id: string;
    Identificacion: string;
    Nombre: string;
    Edad: string;
    Sexo: string;
    VenLic: Date;
}

const CardCliente: React.FC<ICardCliente> = ({
    id,
    Identificacion,
    Nombre,
    Edad,
    Sexo,
    VenLic
})=>{

const[urlD,setUrlD] = useState("/clientes");

useEffect(()=>{
    setUrlD(`/clientes/update/${id}`);
})

    return(
        <div className="col-lg-4 col-md-3 mb-2">
            <Link to={urlD}>
                <div className="card h-100">
                    <div className="card-header bg-dark" style={{color: "lightgray"}}>
                        <h3 ><b>{Nombre}</b></h3>
                    </div>
                    <div className="card-body" style={{color: "Black"}}>
                        <h5>Identificacion: {Identificacion}</h5>
                        <h5>Edad: {Edad}</h5>
                        <h5>Sexo: {Sexo}</h5>
                        <h5>Licencia Hasta: {VenLic}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardCliente;