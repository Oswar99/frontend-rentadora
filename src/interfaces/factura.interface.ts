import { IContrato } from "./contrato.interface";

export interface IFactura{
    Factura: string;
    RTN: string;
    Subtotal: number;
    Imp15: number;
    Imp4: number;
    Total: number;
    Contrato: IContrato;
 }