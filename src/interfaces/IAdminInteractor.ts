import { Admin } from "../model/admin.entities";

export interface IAdminInteractor {
 
    adminLogin(email: string, password: string): any;
}
