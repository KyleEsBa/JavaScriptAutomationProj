const {expect}=require('@playwright/test');

class GoogleSearchPage{
    constructor(page){
        this.page=page;
        this.searchTbx=page.locator("xpath=//*[@name='q']");
        this.searchedOptionLnk=page.locator("xpath=//*[text()='Downloads | ChromeDriver - Chrome for Developers']");
    }
}

module.exports = { GoogleSearchPage };