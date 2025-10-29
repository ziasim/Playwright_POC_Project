import { expect, test , chromium, firefox} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { AccountCreatedPage } from "../pages/AccountCreatedPage";
import { GlobalVariables } from "../Test_Data/globalVariables";

// @ts-check

// defining global page fixture and page objects
let customPage;
let homePage;
let loginPage;
let signupPage;
let globalVars;
let accountCreatedPage
//let page2

// to set the execution mode sequential
test.describe.configure({ mode: 'serial' });

// before all section to execute this code before all test cases
test.beforeAll(async () => {
 
    //launch chromium browser with UI mode
    const browser = await chromium.launch({headless: true});
    const context = await browser.newContext();
    //create three different pages for 
    customPage = await context.newPage();
    //page2 = await context.newPage();
    //page3 = await context.newPage();

    
    // Initialize Page Objects
    homePage = new HomePage(customPage);
    loginPage = new LoginPage(customPage);
    signupPage = new SignupPage(customPage);  
    accountCreatedPage = new AccountCreatedPage(customPage);  

    //Initialize global variable class
    globalVars = new GlobalVariables();

})

//after all section to execute this code after all test cases
test.afterAll(async() => {
    customPage.close();
})

// @ts-check // this is used to get automatic type checking
test("User can sign up for a new account", async () => {
    
    // 1. Navigate to the home page and click on 'Signup / Login'
    await homePage.goto();

    //await page2.goto("https://www.gmail.com");

    await homePage.clickOnSignUpLoginButton();

    //onst loginPageURL = await homePage
    //console.log(loginPageURL);


    // 2. Enter name and email to start the signup process
    await loginPage.verifyNewUserSignupVisible();
    await loginPage.enterSignupDetails(globalVars.userDetails.name, globalVars.userDetails.email);
    //await loginPage.enterSignupDetails(userDetails.name, userDetails.email);

    // 3. Fill in account details    
    await signupPage.fillAccountDetails(globalVars.userDetails);
    
    // 4. Create the account
    await signupPage.clickCreateAccount();

    // 5. Verify that the account was created successfully
    await accountCreatedPage.verifyAccountCreated();
    await accountCreatedPage.clickContinueButton();

})

/*test("User can login with valid credentials", async () => {

    await homePage.clickOnSignUpLoginButton();
    await loginPage.enterLoginDetails(globalVars.userDetails.email, globalVars.userDetails.password);    
})*/
