const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter email {kraken-string}', async function (email) {

    let element = await this.driver.$('.email');

    return await element.setValue(email);

});


When('I enter password {kraken-string}', async function (password) {

    let element = await this.driver.$('.password');

    return await element.setValue(password);

});


When('I click next', async function() {

    let element = await this.driver.$('.login');

    return await element.click();

});

//#region  post

When('I click on new post', async function() {

    let element = await this.driver.$('a[href=\"#/editor/post/\"]');
    return await element.click();

});

When('I enter post title {kraken-string}', async function (postTitle) {

    let element = await this.driver.$('textarea[placeholder=\"Post title\"]');

    return await element.setValue(postTitle);

});

When('I enter post content {kraken-string}', async function (postContent) {

    let element = await this.driver.$('div[data-placeholder=\"Begin writing your post...\"]');

    return await element.setValue(postContent);

});

When('I publish post', async function () {

    let element = await this.driver.$('.gh-publishmenu');

    return await element.click();

});

When('I click publish button', async function () {

    let element = await this.driver.$('.gh-publishmenu-button');

    return await element.click();

});

When('I click confirm publish button', async function () {

    let element = await this.driver.$('.gh-btn-black');

    return await element.click();

});

When('I click the post item of list {kraken-string}', async function (postTitle) {

    let element = await this.driver.$('//h3[contains(., \''+postTitle+'\')]');

    return await element.click();

});

When('I click filter post list', async function () {

    let element = await this.driver.$('//span[text()=\'All posts\']');

    return await element.click();

});

When('I click filter published post', async function () {

    let element = await this.driver.$('//li[text()=\'Published posts\']');

    return await element.click();

});

When('I click the go back post list', async function () {

    let element = await this.driver.$('a[href=\"#/posts/\"]');
    return await element.click();

  });


Then('I review the item of list {kraken-string}', async function (postTitle) {
    let element = await this.driver.$$('h3[aria-label=\"'+postTitle+'\"]');
    expect(element.lenght).not.equal(0);
  });

When('I click on view site', async function() {

    let element = await this.driver.$('a[href=\"#/site//\"]');
    return await element.click();

});
 
Then('I review the post not published of list {kraken-string}', async function (postTitle) {
    let element = await this.driver.$$('//h3[contains(., \''+postTitle+'\')]');
    let draftelement = await this.driver.$$('//span[contains( .,\"Draft\")]');
    expect(element.lenght).to.not.equal(0);
    expect(draftelement.lenght).to.not.equal(0);
});

When('I review the post  published of viewsite {kraken-string}', async function (postTitle) {
    let element = await this.driver.$$('//h2[contains(., \''+postTitle+'\')]');    
});

When('I review the item of list posts {kraken-string}', async function (postTitle) {
    let element = await this.driver.$('//h3[contains(., \''+postTitle+'\')]');
    return await element.click();
});

When('I click on schedule button', async function () {
    let element = await this.driver.$('//div[contains(., \"Schedule it for later\")]');
    return await element.click();
});

//#endregion  post

//#region pages
When('I click on Pages', async function() {
    let element = await this.driver.$('a[href=\"#/pages/\"]');
    return await element.click();
});

When('I click on New page', async function() {
    let element = await this.driver.$('a[href=\"#/editor/page/\"]');
    return await element.click();
});

When('I enter page title {kraken-string}', async function (pageTitle) {
    let element = await this.driver.$('textarea[placeholder=\"Page title\"]');
    return await element.setValue(pageTitle);
});

When('I enter page content {kraken-string}', async function (pageContent) {
    let element = await this.driver.$('div[data-placeholder=\"Begin writing your page...\"]');
    return await element.setValue(pageContent);
});

When('I click the go back page list', async function () {
    let element = await this.driver.$('a[href=\"#/pages/\"]');
    return await element.click();
  });

  //settings-menu-toggle
When('I click the page item of list {kraken-string}', async function (pageTitle) {
     let element = await this.driver.$('//h3[contains(., \''+pageTitle+'\')]');
    return await element.click();
  });

When('I click the toggle button', async function () {
    let element = await this.driver.$('.settings-menu-toggle');
   return await element.click();
 });

 When('I click on delete button', async function () {
    let element = await this.driver.$('//span[contains(., \'Delete page\')]');
   return await element.click();
 });

 When('I click on delete confirmation', async function () {
    let element = await this.driver.$('//span[text()=\'Delete\']');
   return await element.click();
 });

 When('I click on delete post button', async function () {
    let element = await this.driver.$('//span[contains(., \'Delete post\')]');
   return await element.click();
 });

 When('I click on unpublish', async function () {
    let element = await this.driver.$('//div[text()=\'Unpublished\']');
   return await element.click();
 });

 When('I click filter page list', async function () {
    let element = await this.driver.$('//span[text()=\'All pages\']');
    return await element.click();
});

When('I click filter published pages', async function () {

    let element = await this.driver.$('//li[text()=\'Published pages\']');

    return await element.click();

});

When('I click filter draft pages', async function () {

    let element = await this.driver.$('//li[text()=\'Draft pages\']');

    return await element.click();

});

Then('I review the page item of list {kraken-string}', async function (pageTitle) {
    let element = await this.driver.$$('//h3[contains(., \''+pageTitle+'\')]');
    expect(element.lenght).to.not.equal(0);
  });

Then('I review the page not published of list {kraken-string}', async function (pageTitle) {
    let element = await this.driver.$$('//h3[contains(., \''+pageTitle+'\')]');
    let draftelement = await this.driver.$$('//span[contains(., \"Draft\")]');
    expect(element.lenght).to.not.equal(0);
    expect(draftelement.lenght).to.not.equal(0);
});

Then('I review the page were deleted of list {kraken-string}', async function (pageTitle) {
    let element = await this.driver.$$('//h3[text()=\''+pageTitle+'\']');
    expect(element.lenght).to.equal(undefined);
});


  
//#endregion pages

//#region Dashboard

When('I click on dashboard', async function() {
    let element = await this.driver.$('a[href=\"#/dashboard/\"]');
    return await element.click();
});

When('I click on see all activity', async function() {
    let element = await this.driver.$('//a[contains(., \"See all activity\")]');
    return await element.click();
});

Then('I review no member activity yet', async function () {
    let element = await this.driver.$$('//h3[contains(., \"No member activity yet\")]');
    expect(element.lenght).to.not.equal(0);
});

//#endregion Dashboard
