export class CacheStorage{

    public saveCache(object: any, name: string): Promise<boolean>{
        return new Promise<boolean>((resolve)=>{
            try {
                localStorage.setItem(name, JSON.stringify(object));
                resolve(true);
            } catch (error) {
                console.log(error);
                resolve(false);
            }
        })
    }

    public getCache(name: string): Promise<any>{
        return new Promise<any>((resolve)=>{
            const item: any = localStorage.getItem(name);
            if(item){
                resolve(item);
            }
            console.log("No Encontrado en Cache");
        })
    }

}