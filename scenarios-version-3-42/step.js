const { Given, When, Then , Before} = require('@cucumber/cucumber');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
let screenshotCount = 1;
let featureName = '';
let dir = '';

Before((scenario)=>{
    featureName = scenario.gherkinDocument.feature.name.replace(/ /g,"_");
    dir = './capturas/'+featureName;
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir, {recursive:true});
    }
    else{
        fs.readdir(dir, (err, files)=>{
            if(err) throw err;
            for(const file of files){
                fs.unlink(path.join(dir,file), err => {
                    if(err) throw err;
                });
            }
        })
    }
});

When('I take a screenshot', async function () {
    await this.driver.saveScreenshot(dir+'/screenshot'+screenshotCount+'.png');
    screenshotCount++;
});


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

    let element = await this.driver.$('textarea[placeholder=\"Post Title\"]');

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
    let element = await this.driver.$('//span[contains(., \'Publish\')]');

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
    let element = await this.driver.$('a[href=\"#/site/\"]');
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

When('I click on schedule radio button', async function () {
    let element = await this.driver.$('//div[text()=\'Schedule it for later\']');
    return await element.click();
});

When('I set time on schedule button confirm', async function () {
    let element = await this.driver.$('//span[text()=\'Schedule\']');
    return await element.click();
});

When('I click Update button', async function () {
    let element = await this.driver.$('//span[text()=\'Update\']');
    return await element.click();
});

Then('I review the post is published {kraken-string}', async function (postTitle) {
    let element = await this.driver.$$('//h2[text()=\''+postTitle+'\']');
    expect(element.lenght).to.not.equal(0);
});

Then('I review the post not published of list, be schedule {kraken-string}', async function (postTitle) {
    let element = await this.driver.$$('//h3[contains(., \''+postTitle+'\')]');
    let draftelement = await this.driver.$$('//span[contains( .,\"Scheduled\")]');
    expect(element.lenght).to.not.equal(0);
    expect(draftelement.lenght).to.not.equal(0);
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
    let element = await this.driver.$('textarea[placeholder=\"Page Title\"]');
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
    let element = await this.driver.$('.post-settings');
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

When('I click filter draft posts', async function () {
    let element = await this.driver.$('//li[text()=\'Draft posts\']');
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


//#region Memeber

When('I click the go Members', async function () {
    let element = await this.driver.$('a[href=\"#/members/\"]');
    return await element.click();
});


When('I click button New member', async function () {
    let element = await this.driver.$('//span[text()=\'New member\']');
    return await element.click();
});


When('I enter name member {kraken-string}', async function (nameMember) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(nameMember);
});

When('I enter email member {kraken-string}', async function (nameMember) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(nameMember);
});

When('I click button Save member', async function () {
    let element = await this.driver.$('//span[text()=\'Save\']');
    return await element.click();
});

When('I click button Retry member', async function () {
    let element = await this.driver.$('//span[text()=\'Retry\']');
    return await element.click();
});

When('I see error email', async function () {
    let element = await this.driver.$('//p[text()=\'Invalid Email.\']');
});

When('I click the name member of list {kraken-string}', async function (nameMember) {
    let element = await this.driver.$('//h3[contains(., \''+nameMember+'\')]');
    return await element.click();
});

When('I click button tools', async function () {
    let element = await this.driver.$('.dropdown');
    return await element.click();
});

When('I click button delete', async function () {
    let element = await this.driver.$('//span[text()=\'Delete\']');
    return await element.click();
});

When('I click button delete confirm', async function () {
    let element = await this.driver.$('//span[text()=\'Delete member\']');
    return await element.click();
});

When('I enter note for member {kraken-string}', async function (testNote) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(testNote);
});

Then('I check error email', async function () {
    let element = await this.driver.$('//p[text()=\'Invalid Email.\']');
    expect(element.lenght).to.not.equal(0);
});


Then('I check the name member of list {kraken-string}', async function (nameMember) {
    let element = await this.driver.$('//h3[contains(., \''+nameMember+'\')]');
    expect(element.lenght).to.not.equal(0);

});

Then('I check the name member of list doesnt appears {kraken-string}', async function (nameMember) {
    let element = await this.driver.$('//h3[contains(., \''+nameMember+'\')]');
    expect(element.lenght).to.equal(undefined);
});


//#endregion
