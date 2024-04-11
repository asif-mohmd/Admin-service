import { IAdminRepository } from "../interfaces/IAdminRepository";
import { Admin } from "../model/admin.entities";
import { IAdmin } from "../model/schemas/admin.schema";

export class AdminInteractor implements IAdminRepository{
    private repository: IAdminRepository;
    constructor(repository:IAdminRepository){
        this.repository = repository
    }
    adminLogin(email: string, password: string) {
        try{
            if(email === "admin@gmail.com" && password=== "123"){
                
            }

        }catch(err){

        }
    }


    
}