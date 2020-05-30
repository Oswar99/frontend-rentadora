import { IContrato } from "./contrato.interface";
import { IVehiculo } from "./vehiculo.interface";

export interface IBitacora{
    _id: string;
    Contrato: IContrato;
    Inicio: Date;
    Final: Date;
    Estado: Number;
    Vehiculos: IVehiculo[];
}