// @ts-check
import { expect } from "@playwright/test";

export class AccountCreatedPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.accountCreatedHeader = page.locator("//b[normalize-space()='Account Created!']");
        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async verifyAccountCreated() {
        await expect(this.accountCreatedHeader).toBeVisible();

        await expect(this.continueButton).toBeVisible();
        }

    async clickContinueButton() {       
        await this.continueButton.click();
    
    }

}