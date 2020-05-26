import React,{useState, useEffect} from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import SubHeader from "../components/subheader";
import ContratoForm from "../components/contratos";

const create_Contrato: React.FC = ()=>{

    return(
        <div>
            <Header></Header>
            <br />
            <div className="container">
                <hr />
                <SubHeader title="Contrato"/>
                <hr />
                <ContratoForm></ContratoForm>
            </div>
            <br />
            <Footer></Footer>
        </div>
    )
}

export default create_Contrato;