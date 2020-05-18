import { ISucursal } from "./sucursal.interface";

export interface IEmpleado{
    Identidad: string;
    Nombre: string;
    Apellido: string;
    Cargo: string;
    Sucursal: ISucursal;
}