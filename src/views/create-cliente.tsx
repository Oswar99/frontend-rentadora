import React,{useState, useEffect} from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import SubHeader from "../components/subheader";
import ClienteForm from "../components/register";


const create_client: React.FC = ()=>{

    return(
        <div>
            <Header></Header>
            <br />
            <div className="container">
                <hr />
                <SubHeader title="Registrarse"/>
                <hr />
                <ClienteForm></ClienteForm>
            </div>
            <br />
            <Footer></Footer>
        </div>
    )
}

export default create_client;