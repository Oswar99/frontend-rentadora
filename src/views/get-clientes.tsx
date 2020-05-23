import React,{useState, useEffect} from "react";
import Footer from "../components/footer"
import Header from "../components/header"
import SubHeader from "../components/subheader"

import { ICliente } from "../interfaces/cliente.interface"
import { getClientes } from "../services/cliente.service"
import { useParams } from "react-router-dom";
import CardCliente from "../components/card-cliente";

const ClientesView: React.FC = () => {

    const [clientesLista, setClientesLista] = useState([]);
    const [update,setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getClientes().then( r=>{
                if(r.data.successed){
                    setUpdate(false);
                    setClientesLista(r.data.Clientes);
                }
            });
        }
    },[update]);

    return(
        <div>
            <Header></Header>
            <div className="container">
                <SubHeader title= "Clientes"/>
                <div className="row text-center">
                    {clientesLista.map((cli: ICliente, index) => (
                        <CardCliente
                            id = {cli._id}
                            Identificacion = {cli.Identificacion}
                            Nombre = {cli.Nombre}
                            Edad = {cli.Edad}
                            Sexo = {cli.Sexo}
                            VenLic = {cli.VenLic}
                        />
                    ))}
                </div>
                <hr />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ClientesView;