import React,{useState, useEffect} from "react";
import Footer from "../components/footer"
import Header from "../components/header"
import SubHeader from "../components/subheader"


import CardVehiculo from "../components/card-vehiculo";
import { IVehiculo } from "../interfaces/vehiculo.interface";

import { getVehiculos } from "../services/vehiculo.service";

const Inicio: React.FC = () => {

    const [vehiculosLista, setVehiculosLista] = useState([]);
    const [update,setUpdate] = useState(true);
    const [Cliente, setCliente] = useState("");

    useEffect(()=>{
        const c: any = localStorage.getItem("Cliente");
        const cli: any = JSON.parse(c);
        if(cli){
            setCliente(cli._id);
        }
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
                            veh = {veh}
                            cliente={Cliente}
                            precio = {veh.Precio_Renta}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Inicio;