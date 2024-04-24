import { IAdminRepository } from "../interfaces/IAdminRepository";
import { Admin } from "../model/admin.entities";
import { IAdmin } from "../model/schemas/admin.schema";
import Category from "../model/schemas/category.schema"; // Import ICategory interface

export class AdminRepository implements IAdminRepository {
    async addCategory(categoryName: string): Promise<any> {
        try {
            const category = await Category.create({ categoryName });
            console.log('Category created:', category);
            if(category){
                return true
            }else{
                return false
            }
            return category;
        } catch (error) {
            console.error('Error adding category:', error);
            throw error;
        }
    }

    adminLogin(email: string, password: string) {
        throw new Error("Method not implemented.");
    }
}
