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

When('I click the go back post list', async function () {

    let element = await this.driver.$('a[href=\"#/posts/\"]');
    return await element.click();

  });

Then('I review the item of list {kraken-string}', async function (postTitle) {
    let element = await this.driver.$$('h3[aria-label=\"'+postTitle+'\"]');
    expect(element.lenght).not.equal(0);
  });