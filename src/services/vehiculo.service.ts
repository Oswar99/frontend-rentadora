import axios from "axios";

const query: string = "http://localhost:3001"

export function getVehiculos(){
    return axios.get(`${query}/vehiculos`);
}

export function getVehiculo(id:string){
    return axios.get(`${query}/vehiculo/${id}`);
}