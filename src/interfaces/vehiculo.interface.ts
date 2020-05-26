import { ISucursal } from "./sucursal.interface";

export interface IVehiculo{
    _id: string;
    Placa: string;
    Tipo: string;
    Marca: string;
    Modelo: string;
    Color: string;
    No_Serie: string;
    Precio_Renta: Number;
    Sucursal: ISucursal;
    Imagen: string;
    Descripcion: string;
}