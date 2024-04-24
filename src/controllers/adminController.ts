import { response } from "express";
import { IAdminInteractor } from "../interfaces/IAdminInteractor";

export class AdminController {
  private interactor: IAdminInteractor;

  constructor(interactor: IAdminInteractor) {
    this.interactor = interactor;
  } 

  onLogin: any = async (call: any, callback: any) => {
    try {
      console.log("admin controlllllll")
      const {email ,password} = call.request as {
        email : string,
        password: string
      }
      const response = await this.interactor.adminLogin(email,password)
      if (response.loginStatus) {
        callback(null, {
          msg : "login successful",
          loginStatus: true,
          activationToken: response.activationToken,
        });
      } else {
        callback(null, {
          msg: "Admin login failed",
          loginStatus: false,
        });
      }
    } catch (error) {
      callback(error);
    }
  };

  addCategory: any = async (call: any, callback: any) => {
    try {
      console.log("add categ controlllllll",call.request)
      const {categoryName} = call.request as {
        categoryName : string,
    
      }

      console.log(categoryName,"oooooooooiiiiiiiiiiiiii")
      const response = await this.interactor.addCategory(categoryName)
      if (response) {
        callback(null, {
        status : true
        });
      } else {
        callback(null, {
       status : false
        });
      }
    } catch (error) {
      callback(error);
    }
  }


}

