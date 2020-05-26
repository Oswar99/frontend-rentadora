import React,{useState, useEffect} from "react";
import Footer from "../components/footer"
import Header from "../components/header"
import SubHeader from "../components/subheader"

import CardVehiculo from "../components/card-vehiculo";
import { ICarrito } from "../interfaces/carrito.interface";

import { getCarrito } from "../services/carrito.service";
import { useParams, Redirect } from "react-router-dom";
import CardCarrito from "../components/card-carrito";

const CarritoView: React.FC = () => {

    const [CarritoLista, setCarritoLista] = useState([]);
    const [completed, setCompleted]= useState(false);

    const {id} = useParams();

    useEffect(()=>{
        if(!completed){
            getCarrito(id).then( r=>{
                if(r.data){
                    setCarritoLista(r.data);
                    setCompleted(true);
                }
            });
        }
    },[completed]);
    
    return(
        <div>
            <Header></Header>
            <div className="container">
                <SubHeader title= "Carrito"/>
                <div className="row text-center">
                    {CarritoLista.map((veh: ICarrito, index) => (
                        <CardCarrito 
                            idCar= {veh._id}
                            veh = {veh.Vehiculo}
                            cliente = {veh.Cliente}
                        />
                    ))}
                </div>
                {CarritoLista.length === 0 &&(
                    <div>
                        <h4>Su Carrito personal se encuentra vacio.</h4>
                        <SubHeader title= ""/>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
    
}

export default CarritoView;