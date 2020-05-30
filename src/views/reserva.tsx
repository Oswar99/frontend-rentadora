import React,{useState, useEffect} from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import SubHeader from "../components/subheader";
import Bitacora from "../components/card-bitacora";
import ContratoForm from "../components/contratos";

const ReservacionClient: React.FC = ()=>{

    return(
        <div>
            <Header></Header>
            <br />
            <div className="container">
                <SubHeader title="Reservacion"/>
                <Bitacora></Bitacora>
            </div>
            <br />
            <Footer></Footer>
        </div>
    )
}

export default ReservacionClient;