import React from "react";
import {Link} from "react-router-dom";

interface IInfoModal{
    title : string;
    body: string;
}

const InfoModal: React.FC<IInfoModal> = ({title,body}) => (
<div>
    <br />
    <br />
    <form className="align-items-center">
        <div id="info-modal">
            <div id="head-info">
                <h2><b>{title}</b></h2>
            </div>
            <hr color="Blue"/>
            <div id="body">
                <h6>{body}</h6>
            </div>
        </div>
    </form>
    <br />
</div>
)

export default InfoModal;