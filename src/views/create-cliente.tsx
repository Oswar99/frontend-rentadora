import React,{useState, useEffect} from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import SubHeader from "../components/subheader";
import ClienteForm from "../components/register";
import {useParams} from "react-router-dom";


const createClient: React.FC = ()=>{

    return(
        <div>
            <Header></Header>
            <br />
            <div className="container">       
                <ClienteForm></ClienteForm>
            </div>
            <br />
            <Footer></Footer>
        </div>
    )
}

export default createClient;