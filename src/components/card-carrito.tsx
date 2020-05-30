import React, { useState, useEffect } from "react";
import {Link, useParams, Redirect} from "react-router-dom";
import { deleteCarrito } from "../services/carrito.service";
import { getVehiculo } from "../services/vehiculo.service";
import {IVehiculo} from "../interfaces/vehiculo.interface"

interface ICardCarrito{
    idCar:string
    veh:string;
    cliente: string;
}

const CardCarrito: React.FC<ICardCarrito> = ({
    idCar,
    veh,
    cliente,
})=>{
    const [completed, setCompleted]= useState(false);
    const [btnClick, setbtnClick]= useState(false);
    const [red, setRed] = useState("/");
    const [vehiculo, setVehiculo] = useState({
        _id: "",
        Placa: "",
        Tipo: "",
        Marca: "",
        Modelo: "",
        Color: "",
        No_Serie: "",
        Precio_Renta: "",
        Sucursal: "",
        Imagen: "",
        Descripcion: "",
    })

    const {id} = useParams();

    function btn(){
        deleteCarrito(idCar);
        setRed(`/carrito/${id}`);
        setbtnClick(true);
    }

    useEffect(()=>{
        if(!completed){
            getVehiculo(veh).then(v=>{
                if(v.data.successed){
                    setVehiculo(v.data.Vehiculo[0]);
                    setCompleted(true);
                }
            });
        }
        
    }, [completed]);

    if(btnClick){
        return(
            <Redirect to={red}>
                
            </Redirect>
        )
    }else{
    return(
        
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <Link to="/AboutUs">
                    <img
                        src={vehiculo.Imagen} 
                        width="250"
                        height="200"
                        
                    />
                </Link>
                <div className="card-body">
                    <h4 className="card-title">{vehiculo.Marca} {vehiculo.Modelo}</h4>
                    <h5 className="card-title">Precio(dia): {vehiculo.Precio_Renta}</h5>
                </div>
                <div className="card-footer">
                    {(cliente !== "") &&(
                        <button 
                            type="button" 
                            id={vehiculo._id}
                            className="btn btn-primary" 
                            onClick={btn} 
                        >Eliminar
                        </button>
                    )}
                    {(cliente === "") &&(
                        <Link className="btn btn-primary" to="/login">ELiminar</Link>
                    )}
                    
                </div>
            </div>
        </div>
    )
    }
}

export default CardCarrito;