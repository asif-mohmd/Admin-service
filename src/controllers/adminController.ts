import {  IAdminInteractor } from "../interfaces/IAdminInteractor";

export class AdminController  {

    private interactor: IAdminInteractor;

    constructor(interactor: IAdminInteractor){
        this.interactor = interactor
    }

    onLogin :any = async (call:any, callback:any) =>{
        try{

            const request = call.request as {
                email: string,
                password: string,
            }

            const response = await this.interactor.adminLogin(request.email,request.password)
            
        }catch(err){
            console.log(err,"admin login error")
        }


    }

}