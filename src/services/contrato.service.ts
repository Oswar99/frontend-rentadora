import axios from "axios";


const query: string = "http://localhost:3001"

export function getContratos(){       
    return axios.get(`${query}/contratos`);    
};

export function postContrato(data:any): Promise<any>{
    return axios.post(`${query}/contrato`,data);
}

export function putContrato(id:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/contrato/${id}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteContrato(id:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/contrato/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getContrato(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/contrato/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}