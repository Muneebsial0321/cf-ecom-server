export interface Auth{
    login?(email:string,password:string):Promise<{authtoken:string}>,
    signup?(name:string,email:string,password:string):Promise<{authtoken:string}>,
    logout?(_id:string):Promise<any>

}