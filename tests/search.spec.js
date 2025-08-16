const {expect} = require ('@playwright/test');
import {test} from './Fixtures';
//import { base } from '../utilities/fixtures';
//import {test, expect} from '@playwright/test';
const {AmazonSearchPage}=require('../pages/AmazonSearchPage');
//Adding a test comment
test('Amazon search', async({page})=>{
    const pageTitle=page.title();
    await expect(page).toHaveTitle('Amazon.com. Spend less. Smile more.');
    console.log('Page title is: ', pageTitle);
    //await expect(page).toHaveURL('https://www.amazon.com/');

    const amazonSearchPage = new AmazonSearchPage(page);
    await amazonSearchPage.searchTbx.fill('Shoes');
    await page.press('body','Enter');
    await amazonSearchPage.searchedOptionLnk.click();
});