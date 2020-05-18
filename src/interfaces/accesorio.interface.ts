import { IVehiculo } from "./vehiculo.interface";

export interface IAccesorio{
    No_Serie: string;
    Nombre: string;
    Descripcion: string;
    Costo: number;
    Vehiculos: IVehiculo[];
 }