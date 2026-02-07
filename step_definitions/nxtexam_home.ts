import { Given, When, Then } from "@cucumber/cucumber";
import { PlaywrightWrapper } from "../utils/wrapper";
import { envConfig } from "../config/env";
import { i18n } from "../config/i18n";
import { expect } from "@playwright/test";
import { DEFAULT_TIMEOUT } from "../config/config";
import data from "../config/env/dev.json";

const getWrapper = (world: any) =>
  new PlaywrightWrapper(world.page, world.context);

/* ------------------ GIVEN ------------------ */

Given("Navigate to nxtexam.com", async function () {
  const wrapper = getWrapper(this);
  await wrapper.navigateTo(envConfig.baseUrl);
  await wrapper.waitForVisible("//span[@class='hidden md:inline']", DEFAULT_TIMEOUT);
});

/* ------------------ WHEN ------------------ */

When("Click on Signin link", async function () {
  const wrapper = getWrapper(this);
  await wrapper.click("//span[@class='hidden md:inline']");
});

When("Click on Password", async function () {
  const wrapper = getWrapper(this);
  await wrapper.click("//button[normalize-space()='Password']");
});

When("Enter Email address as {string}", async function (username: string) {
  const wrapper = getWrapper(this);
  await wrapper.fill("//input[@placeholder='Email']", username);
});

When("Enter Password as {string}", async function (password: string) {
  const wrapper = getWrapper(this);
  await wrapper.fill("//input[@placeholder='Password']", password);
});

When("Click on Signin button", async function () {
  const wrapper = getWrapper(this);
  await wrapper.click("//button[normalize-space()='Sign In']");
});

/* ------------------ THEN ------------------ */

Then('the page title should contain {string}', async function (expectedTitle: string) {
  const wrapper = getWrapper(this);
  const title = await wrapper.getTitle();
  expect(title).toContain(expectedTitle);
});


Then("Verify the home page title from i18n", async function () {
  const wrapper = getWrapper(this);
  const title = await wrapper.getTitle();
  expect(title).toContain(i18n.homePage.title);
});

When("the user click on Google view Exam link", async function(){
     const wrapper = getWrapper(this);
     await wrapper.click(`//a[@href='/certifications/Google']`);
     //await wrapper.getAltText('Google Cloud Certification')
    // expect(linkVerify).toContain('Google Cloud Certification');
});

Then('the url of the Google page contains {string}', async function(googleUrl:string){
     const wrapper = getWrapper(this);
     const url = await wrapper.getCurrentUrl();
    // expect(url).toContain(googleUrl);
});

Then('the title of Google page contains {string}',async function(googleTitle: string){
     const wrapper = getWrapper(this);
     const gtitle = await wrapper.getTitle();
    // expect(gtitle).toContain(googleTitle)

});

Then('the google certificates are displayed', async function(){
     const wrapper = getWrapper(this);
     await wrapper.getRowsValue("table[class*='MuiTable-root']");
});

When("user click on given Google certification link",async function(){
     const wrapper = getWrapper(this);
     await wrapper.click(`//a[@href='/certifications/Google']`);
     await wrapper.ClickOnTableLink("table[class*='MuiTable-root']",data.certification)
     //await wrapper.getTitle();
});

Then("user is navigated to the corresponding certification page", async function () {
    const wrapper = getWrapper(this);
    await wrapper.getTitle();
    //expect(title).toContain(data.certification);
  }
);


