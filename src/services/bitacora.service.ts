import axios from "axios";

const query: string = "http://localhost:3001"

export function getBitacoras(){       
    return axios.get(`${query}/bitacoras`);    
};

export function postBitacora(data:any): Promise<any>{
    return axios.post(`${query}/bitacora`,data);
}

export function putBitacora(id:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/bitacora/${id}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteBitacora(id:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/bitacora/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getBitacora(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/bitacora/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}