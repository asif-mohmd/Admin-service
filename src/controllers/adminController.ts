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


}

