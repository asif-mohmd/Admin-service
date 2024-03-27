import { IAdminInteractor } from "../interfaces/IAdminInteractor";

export class AdminController {

    private interactor: IAdminInteractor;

    constructor(interactor: IAdminInteractor){
        this.interactor = interactor
    }

}