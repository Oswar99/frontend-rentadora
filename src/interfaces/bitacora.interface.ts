import { IContrato } from "./contrato.interface";
import { IVehiculo } from "./vehiculo.interface";

export interface IBitacora{
    Contrato: IContrato;
    Inicio: Date;
    Final: Date;
    Estado: Number;
    Vehiculos: IVehiculo[];
}