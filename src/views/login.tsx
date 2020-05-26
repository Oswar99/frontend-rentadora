import React,{useState, useEffect} from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SubHeader from "../components/subheader";

import CardLogin from "../components/card-login";

const loginView: React.FC = () =>{
    return(
        <div>
        <Header></Header>
        <div className="container">
            <SubHeader title=""></SubHeader>
            <CardLogin></CardLogin>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default loginView;