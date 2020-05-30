import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { postCarrito } from "../services/carrito.service";
import { getVehiculo } from "../services/vehiculo.service";
import {IVehiculo} from "../interfaces/vehiculo.interface"

interface ICardVehiculo{
    veh:IVehiculo;
    cliente: string;
    marca: string;
    modelo: string;
    imagen?: string;
    title_button?: string;
    precio: Number;
}

const CardVehiculo: React.FC<ICardVehiculo> = ({
    veh,
    cliente,
    imagen,
    marca,
    modelo,
    title_button,
    precio
})=>{
    const [carrito, setCarrito] = useState({});
    const [completed, setCompleted]= useState(false);

    function btn(){
        postCarrito(carrito);
    }

    useEffect(()=>{
        if(!completed){
            setCarrito({
                Cliente: cliente,
                Vehiculo: veh
            });
            setCompleted(true);
        }
    },[carrito]);


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
                    <h5 className="card-title">Precio(dia): {precio}</h5>
                </div>
                <div className="card-footer">
                    {(cliente !== "") &&(
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={btn} 
                            id={veh._id}
                            >{title_button}
                        </button>
                    )}
                    {(cliente === "") &&(
                        <Link className="btn btn-primary" to="/login">{title_button}</Link>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default CardVehiculo;