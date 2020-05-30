import React, { useState, useEffect } from "react";
import useFormHelper from "../helpers/useFormHelper";
import {getPrecio} from "../services/carrito.service"
import { postContrato } from "../services/contrato.service";
import { postBitacora } from "../services/bitacora.service";

const Bitacora: React.FC = () => {
    const [total, setTotal] = useState(0);
    const [cargado, setCargado] = useState(false);
    const [completo, setCompleto] = useState(false);
    const [contratoCreado, setContratoCreado] = useState(false);
    const [contrato, setContrato]= useState({
        Fecha: new Date("05/29/2020"),
        Estado: 1,
        AbonoPrevio: 0,
        Cliente: ""
    });

    const states = useState({
        Contrato: "",
        Inicio: "",
        Final: "",
        Estado: "1"
    }); 
    
    const {
        values,      
        handleChange,
        updateValues
    } = useFormHelper(states);

    async function btn(){
        if (values.Inicio && values.Final && total > 0){
            postBitacora(values).then(bit=>{
                if(bit.data.successed){
                    document.write("Terminado con Exito");
                };
            });
        }
    }

    useEffect(()=>{
        if(!cargado){
            const obj: any = localStorage.getItem("Cliente");
            const cli: any = JSON.parse(obj);
                 
            if(cli && !contratoCreado){
                getPrecio(cli._id).then(r=>{
                    setTotal(r.data.Precio);
                    setContrato({
                        Fecha: new Date("05/29/2020"),
                        Estado: 1,
                        AbonoPrevio: r.data.Precio,
                        Cliente: cli._id
                    });
                    setContratoCreado(true);
                });
            }else{
                if(contratoCreado){
                    postContrato(contrato).then(cont=>{
                        localStorage.setItem("Contrato", JSON.stringify(cont.data.Contrato));
                        updateValues({
                            Contrato: cont.data.Contrato._id,
                            Inicio: "",
                            Final: "",
                            Estado: 1
                        })
                        setContratoCreado(false);
                        setCargado(true);
                        setCompleto(true);
                    });
                }
            }
        }    
    },[cargado,contratoCreado,completo]);
        

    return(
        <div>
            <table style={{width: "100%"}}>
                <tr>
                    <td style={{width: "100%"}}>
                        <form className="align-items-center" >
                        <div className="form-group" style={{width: "40%"}}>
                                <label htmlFor="ContratoGroup">Contrato: </label>
                                <input 
                                    type= "text"
                                    className="form-control" 
                                    id="ContratoGroup"
                                    name="Contrato"
                                    value = {values.Contrato}
                                />
                            </div> 
                            <div className="form-group" style={{width: "40%"}}>
                                <label htmlFor="InicioGroup">Fecha de Inicio: </label>
                                <input 
                                    type= "date"
                                    className="form-control" 
                                    id="InicioGroup"
                                    name="Inicio"
                                    onChange={handleChange}
                                    defaultValue = {values.Inicio}
                                />
                            </div> 
                            <div className="form-group" style={{width: "40%"}}>
                                <label htmlFor="FinalGroup">Fecha de Finalizacion: </label>
                                <input
                                    type= "date"
                                    className="form-control" 
                                    id="FinalGroup"
                                    name="Final"
                                    onChange={handleChange}
                                    defaultValue = {values.Final}
                                />
                            </div>
                            <div className="form-group" style={{width: "40%"}}>
                            <label htmlFor="EstadoGroup">Estado: </label>
                                    <input
                                        type= "number"
                                        className="form-control" 
                                        id="EstadoGroup"
                                        name="Estado"
                                        value={values.Estado}
                                    />
                            </div>
                            <br />
                            <br />
                            <h5>Nota: Al realizar la reserva se hara un cobro equivalente al 10% del valor de la 'Renta' total</h5>
                            <table style={{width: "100%"}}>
                                <tr>
                                    <td style={{width: "90%"}}>
                                    <div className="form-group" style={{width: "40%"}}>
                                    <label htmlFor="AbonoPrevioGroup">Anticipo: </label>
                                            <input 
                                                type= "number"
                                                className="form-control" 
                                                id="AbonoPrevioGroup"
                                                name="AbonoPrevio"
                                                value = {total}
                                            />
                                    </div>
                                    
                                    </td>
                                    <td style={{width: "10%"}}>
                                        <button className="btn btn-primary" onClick={btn} >Terminar</button>
                                    </td>
                                </tr>
                            </table>  
                        </form>
                    </td>
                   
                </tr>
            </table>
            
        </div>
    )

}

export default Bitacora;