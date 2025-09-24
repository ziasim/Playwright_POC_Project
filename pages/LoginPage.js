// @ts-check
import { expect } from "@playwright/test";

export class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.signupHeader = page.locator("//h2[normalize-space()='New User Signup!']");
        this.nameInput = page.getByRole('textbox', { name: 'Name' });
        this.signupEmailInput = page.locator("//input[@data-qa='signup-email']");
        this.signupButton = page.getByRole('button', { name: 'Signup' });
        this.loginHeader = page.getByText('Login to your account');
        this.logineEmailInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.loginPasswordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' });      

    }

    async verifyNewUserSignupVisible() {
        await expect(this.signupHeader).toBeVisible();
    }

    async enterSignupDetails(name, email) {
        await this.nameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click(); 
    }

    async enterLoginDetails(email, password) {
        await this.logineEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }
}