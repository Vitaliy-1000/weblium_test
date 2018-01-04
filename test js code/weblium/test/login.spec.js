const { client, element, elements } = require('wd-interface');
const LoginPage = require('../loginObject/loginPage');
const { expect } = require('chai');
const Login = require('../loginObject/login');
const myProfile = require('../loginObject/myProfile');

describe('Login lincks', () => {
    const loginPage = new LoginPage();
    const login = new Login();
    const Myprofile = new myProfile();

    beforeEach(async() => {
        await loginPage.goToLogin();
    });

    afterEach(async() => {
        await loginPage.closeBrowser();
    });
/*
    it('linck login_page', async () => {
        expect(await loginPage.returnCurrenUrl()).to.contains('login');
        expect(await login.getTextPageLogin()).to.contains('Log in');
    });



    it('login form', async () => {
        expect(await element(login.email).isDisplayed()).to.eql(true);
        expect(await element(login.password).isDisplayed()).to.eql(true);
        expect(await element(login.submitLogin).isDisplayed()).to.eql(true);
    });


    it('go to my account', async () => {
        await login.goToMyAccount();
        await loginPage.browser.sleep(1500);
        expect(await loginPage.returnCurrenUrl()).to.contains('myaccount/websites');
        expect(await login.getElementMyAccount()).to.eql('My websites');
    });
*/

    it('go to my profiles', async () => {
        await login.goToMyAccount();
        await login.goToMyProfiles();
        //expect(await loginPage.returnCurrenUrl()).to.contains('profile');
        await loginPage.browser.sleep(1500);
        expect(await element(Myprofile.firstName).isDisplayed()).to.eql(true);
        expect(await element(Myprofile.lastName).isDisplayed()).to.eql(true);
        expect(await element(Myprofile.firstName).getAttribute("value")).to.eql('dereva');       
        //await Myprofile.clearValue();
        //await console.log(await element(Myprofile.firstName).getAttribute("value"));
    });

});
