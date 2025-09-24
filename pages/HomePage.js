import {test, expect} from '@playwright/test';

export class HomePage {

    constructor(page){
        this.page = page;
        this.signUp_Login_Button = page.locator("//a[normalize-space()='Signup / Login']");
        this.logo = page.locator("//img[@alt='Website for automation practice']");
        
    }

    async goto(){
        await this.page.goto("https://www.automationexercise.com/");

        await expect(this.page).toHaveTitle('Automation Exercise');

        await expect(this.page.getByAltText('Website for automation practice')).toBeVisible();

        await this.page.getByAltText('Website for automation practice').screenshot({path: "./screenshots/" + "siteLogo.png" })
    }

    async clickOnSignUpLoginButton(){
        await this.signUp_Login_Button.click();

        await expect (this.logo).toBeVisible();
    }

}