import { Admin } from "../model/admin.entities";

export interface IAdminService {
 
    adminLogin(email: string, password: string): any;
}