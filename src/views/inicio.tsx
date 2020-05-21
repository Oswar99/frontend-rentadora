import React,{useState, useEffect} from "react";
import Footer from "../components/footer"
import Header from "../components/header"
import SubHeader from "../components/subheader"


import CardVehiculo from "../components/card-vehiculo";
import { IVehiculo } from "../interfaces/vehiculo.interface";

import { getVehiculos } from "../services/vehiculo.service";
import { useParams } from "react-router-dom";

const Inicio: React.FC = () => {

    const [vehiculosLista, setVehiculosLista] = useState([]);
    const [update,setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getVehiculos().then( r=>{
                if(r.data.successed){
                    setUpdate(false);
                    setVehiculosLista(r.data.Vehiculos);
                }
            });
        }
    },[update]);

    return(
        <div>
            <Header></Header>
            <div className="container">
                <SubHeader title= "Vehiculos"/>
                <div className="row text-center">
                    {vehiculosLista.map((veh: IVehiculo, index) => (
                        <CardVehiculo 
                            imagen = {veh.Imagen}
                            marca = {veh.Marca}
                            modelo = {veh.Modelo}
                            title_button = "Agregar"
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Inicio;