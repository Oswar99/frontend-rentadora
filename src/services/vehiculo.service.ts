import axios from "axios";

const query: string = "http://localhost:3001"

export function getVehiculos(){
    return axios.get(`${query}/vehiculos`);
}