import React,{useState, useEffect} from "react";
import Footer from "../components/footer"
import Header from "../components/header"
import InfoModal from "../components/infoModal";

const AboutUs: React.FC = () => {
    return(
        <div>
            <Header></Header>
            <div className="container">
            <table>
                    <tr>
                        <td style={{width: "50%"}}>
                            <InfoModal 
                                title = "Misión"
                                body = "Proporcionar servicios de excelente calidad en todo lo relacionado con el alquiler de vehículos, satisfaciendo, solucionando y superando las expectativas de nuestros clientes con la más moderna flota de vehículos y un equipo humano competente y comprometido."
                            />
                            <InfoModal
                                title = "Acerca de nosotros:"
                                body = "Somos una compañía que ofrece automóviles de  alquiler para cortos o largos períodos de tiempo. Nuestros establecimientos están situados, sobre todo, en las inmediaciones de aeropuertos y autobuses. Se complementan con este sitio web permitiendo hacer reservas a través de Internet. "
                            />
                        </td>
                        <td style={{width: "50%"}}>
                            <InfoModal 
                                title = "Visión:"
                                body = "Dirigiremos nuestra industria al defender la excelencia del servicio y forjando una lealtad incomparable de parte de los clientes. Permaneciendo a la vanguardia en el suministro de calidad enfocados siempre a satisfaces las necesidades de nuestros clientes."
                            />
                        </td>
                    </tr>
                </table>
                <table style={{textAlign: "center", width: "100%"}}>
                    <tr>
                        <td>
                            <div>
                                <InfoModal 
                                    title = "Informacion de Contacto"
                                    body = "Nos comprometemos a suministrar a nuestros clientes el mejor nivel de servicio posible."
                                    />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AboutUs;