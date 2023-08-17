import { Page } from "@playwright/test"

export default class LoginPage{

    constructor(public page:Page){ }

    async login(username:string,password:string){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.loginButton();

        }

    async enterUsername(username: string){

        await this.page.locator("//input[@data-placeholder='Username']")
        .type(username);
        
    }

    async enterPassword(password: string){

        await this.page.locator("//input[@data-placeholder='Password']")
        .type(password);
        
    }

    async loginButton(){

        await Promise.all([

            await this.page.click("//button[@class='mat-focus-indicator mat-button mat-button-base ng-star-inserted link-active']//following::span[text()='Login']")
        ])

       
    
    }

}