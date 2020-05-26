export class storageL{

    public saveCache(object: any, name: string){
        localStorage.setItem(name, JSON.stringify(object));
    }

    public async getCache(name: string){
        const obj: any = localStorage.getItem(name);
        return obj;
    }

}