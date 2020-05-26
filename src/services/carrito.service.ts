import axios from "axios";

const query: string = "http://localhost:3001"

export function postCarrito(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/carrito`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteCarrito(id:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/carrito/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}
export function getCarrito(id:string){
    return axios.get(`${query}/carrito/${id}`);
}

