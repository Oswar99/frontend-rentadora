import { IEmpleado } from "./empleado.interface";
import { ICliente } from "./cliente.interface";
import { IAccesorio } from "./accesorio.interface";

export interface IContrato{
    Contrato: string;
    Fecha: string;
    Estado: number;
    AbonoPrevio: number;
    Empleado: IEmpleado;
    Cliente: ICliente;
    Extras: IAccesorio[];
}