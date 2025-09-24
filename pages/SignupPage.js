// @ts-check
import { expect } from "@playwright/test";

export class SignupPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.accountInfoHeader = page.locator("//b[normalize-space()='Enter Account Information']");
        this.titleMrRadio = page.locator("//input[@value='Mr']");
        this.nameInput = page.locator("//input[@id='name']");
        this.emailInput = page.locator("//input[@id='email']");
        this.passwordInput = page.locator("//input[@id='password']");
        this.daysDropdown = page.locator("//select[@id='days']");
        this.monthsDropdown = page.locator("//select[@id='months']");
        this.yearsDropdown = page.locator("//select[@id='years']");
        this.newsletterCheckbox = page.locator("//input[@id='newsletter']");
        this.optinCheckbox = page.locator("//input[@id='optin']");
        this.firstNameInput = page.locator("//input[@id='first_name']");
        this.lastNameInput = page.locator("//input[@id='last_name']");
        this.companyInput = page.locator("//input[@id='company']");
        this.address1Input = page.locator('//input[@name="address1"]');
        this.countryDropdown = page.locator("//select[@id='country']");
        this.stateInput = page.locator("//input[@id='state']");
        this.cityInput = page.locator("//input[@id='city']");
        this.zipcodeInput = page.locator("//input[@id='zipcode']");
        this.mobileNumberInput = page.locator("//input[@id='mobile_number']");
        this.createAccountButton = page.locator("//button[@data-qa='create-account']");
        
    }

    //fill account details for the signup user
    async fillAccountDetails(details) {        

        await expect(this.accountInfoHeader).toBeVisible();

        await this.titleMrRadio.check();
        await expect(this.titleMrRadio).toBeChecked();


        await expect(this.nameInput).toHaveValue(details.name);
        //await expect(this.nameInput).toBeDisabled();

        await expect(this.emailInput).toHaveValue(details.email);
        await expect(this.emailInput).toBeDisabled();

        /*await this.nameInput.fill(details.name);
        await this.emailInput.fill(details.email);
        await expect(this.emailInput).toHaveValue(details.email );
        await expect(this.emailInput).toBeDisabled();*/



        await this.passwordInput.fill(details.password);
        await this.daysDropdown.selectOption(details.dob.day);
        await this.monthsDropdown.selectOption({ value: details.dob.month });
        await this.yearsDropdown.selectOption({ label: details.dob.year });

        await this.newsletterCheckbox.check();
        await this.optinCheckbox.check();

        await this.firstNameInput.fill(details.firstName);
        await this.lastNameInput.fill(details.lastName);
        await this.companyInput.fill(details.company);
        await this.address1Input.fill(details.address);
        await this.countryDropdown.selectOption({ label: details.country });
        await this.stateInput.fill(details.state);
        await this.cityInput.fill(details.city);
        await this.zipcodeInput.fill(details.zipcode);
        await this.mobileNumberInput.fill(details.mobileNumber);
    }

    //click create account button
    async clickCreateAccount() {
        await this.createAccountButton.click();
    }

    
}
