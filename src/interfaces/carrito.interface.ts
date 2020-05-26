import { ICliente } from "./cliente.interface";
import { IVehiculo } from "./vehiculo.interface";

export interface ICarrito{
    _id: string;
    Cliente: string;
    Vehiculo: string
}