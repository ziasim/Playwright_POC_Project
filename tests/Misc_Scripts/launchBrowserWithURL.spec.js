// @ts-check // this is used to get automatic type checking
import {test, expect} from '@playwright/test';      

test('launch browser, aync', async ({ page }) => {  
    
  // Launch the browser with a specific URL
  await page.goto('https://www.automationexercise.com/');

  //get the title of the page   
  const pageTitle = await page.title();
    
    console.log('Page Title is :'  + pageTitle);

  await expect(page).toHaveURL('https://www.automationexercise.com/');

  // Verify that the page has loaded correctly
  await expect(page).toHaveTitle('Automation Exercise')
  
  // Optionally, check for a specific element on the page
  await expect(page.getByAltText('Website for automation practice')).toBeVisible();

  //await page.screenshot({ path: './tests/screenshots/' + 'siteLogo.png', fullPage:true});

  await page.getByAltText('Website for automation practice').screenshot({path: "./tests/screenshots/" + "siteLogo.png" })

  await page.close();  
  
  //await expect(page.getByText('Example Domain')).toBeVisible();
})