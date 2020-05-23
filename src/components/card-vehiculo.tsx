import React from "react";
import {Link} from "react-router-dom";
import { stringify } from "querystring";

interface ICardVehiculo{
    marca: string;
    modelo: string;
    imagen?: string;
    title_button?: string;
}

const CardVehiculo: React.FC<ICardVehiculo> = ({
    imagen,
    marca,
    modelo,
    title_button
})=>{
    return(
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <Link to="/AboutUs">
                    <img
                        src={imagen} 
                        width="250"
                        height="200"
                        
                    />
                </Link>
                <div className="card-body">
                    <h4 className="card-title">{marca} {modelo}</h4>
                </div>
                <div className="card-footer">
                    {title_button ? (
                        <Link to="/">{title_button}</Link>
                    ) : (
                        <Link to="/">Iniciar Sesion</Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardVehiculo;