import { IAdminRepository } from "../interfaces/IAdminRepository";
import { Admin } from "../model/admin.entities";
import { IAdmin } from "../model/schemas/admin.schema";


export class AdminRepository implements IAdminRepository{
    
    adminLogin(email: string, password: string) {
        throw new Error("Method not implemented.");
    }


}