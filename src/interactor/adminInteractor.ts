import { IAdminRepository } from "../interfaces/IAdminRepository";
import { Admin } from "../model/admin.entities";
import { IAdmin } from "../model/schemas/admin.schema";
import { loginToken } from "../utils/loginToken";

export class AdminInteractor implements IAdminRepository{
    private repository: IAdminRepository;
    constructor(repository:IAdminRepository){
        this.repository = repository
    }
   async addCategory(categoryName: string): Promise<boolean> {
    return await this.repository.addCategory(categoryName)
  }

    
    
    adminLogin(email: string, password: string) {
        try {

         if(email === "asifasifpsps@gmail.com" && password === "123"){
            const activationToken = loginToken(email,password);
            const loginStatus: boolean = true;
            console.log(activationToken,"]]]]]]]]]]]]]]]]]]]]]]")
            const response = { msg: "Login successful", status: 201, activationToken , loginStatus };
      
            return response;
         }else{
            const loginStatus: boolean = false;
          const response = { msg: "Login Failed", status: 201, loginStatus };
            return response;    
         }
             
        } catch (err: any) {
          const loginStatus: boolean = false;
          const response = { msg: "Login Failed", status: 201, loginStatus };
          return response;
        }
      }


    
}