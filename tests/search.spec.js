const {expect} = require ('@playwright/test');
import {test} from './Fixtures';
//import { base } from '../utilities/fixtures';
//import {test, expect} from '@playwright/test';
const {GoogleSearchPage}=require('../pages/GoogleSearchPage');

test('Google search', async({page})=>{
    const pageTitle=page.title();
    await expect(page).toHaveTitle('Google');
    console.log('Page title is: ', pageTitle);
    await expect(page).toHaveURL('https://www.google.com/');  

    const googleSearchPage = new GoogleSearchPage(page);
    await googleSearchPage.searchTbx.fill('ChromeDriver');
    await page.press('body','Enter');
    await googleSearchPage.searchedOptionLnk.click();
});