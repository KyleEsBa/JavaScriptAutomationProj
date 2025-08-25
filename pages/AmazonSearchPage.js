const {expect}=require('@playwright/test');

class AmazonSearchPage{
    constructor(page){
        this.page=page;
        this.searchTbx=page.locator("xpath=//*[@title='Search For']");
        this.searchedOptionLnk=page.locator("xpath=//span[contains(text(), 'results for')]//following-sibling::span[contains(text(),'Shoes')]");
    }
}


module.exports = { AmazonSearchPage };