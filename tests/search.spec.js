import {test, expect} from '@playwright/test';
//import { base } from '../utilities/fixtures';
//import {test, expect} from '@playwright/test';
const {GoogleSearchPage}=require('../pages/GoogleSearchPage');
import {setTimeout} from "timers/promises";

test('Google search', async({page})=>{
    //await page.goto('https://www.google.com/');
    await page.goto('');    //Automatically calls the baseURL from the playwrigth.config.js
    const pageTitle=page.title();
    await expect(page).toHaveTitle('Google');
    console.log('Page title is: ', pageTitle);
    await expect(page).toHaveURL('https://www.google.com/');  

    const googleSearchPage = new GoogleSearchPage(page);
    await googleSearchPage.searchTbx.fill('ChromeDriver');
    await page.press('body','Enter');
    await googleSearchPage.searchedOptionLnk.click();
    await setTimeout(5000);

    await page.close();
});