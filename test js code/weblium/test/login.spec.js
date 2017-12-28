const { client, element, elements } = require('wd-interface');
const LoginPage = require('../loginObject/loginPage');
const { expect } = require('chai');
const Login = require('../loginObject/login');

describe('Login lincks', () => {
    const loginPage = new LoginPage();
    const LogiN = new Login();

    beforeEach(async() => {
        await loginPage.goToLogin();
    });

    afterEach(async() => {
        await loginPage.closeBrowser();
    });
/*
    it('linck login_page', async () => {
        expect(await loginPage.returnCurrenUrl()).to.contains('login');
        expect(await LogiN.getTextPageLogin()).to.contains('Log in');
    });
*/

/*
    it('login form', async () => {
        expect(await element(LogiN.email).isDisplayed()).to.eql(true);
        expect(await element(LogiN.password).isDisplayed()).to.eql(true);
        expect(await element(LogiN.submitLogin).isDisplayed()).to.eql(true);
    });
*/
/*
    it('go to my account', async () => {
        await LogiN.goToMyAccount();
        await loginPage.browser.sleep(1500);
        expect(await loginPage.returnCurrenUrl()).to.contains('myaccount/websites');
        expect(await LogiN.getElementMyAccount()).to.eql('My websites');
    });
*/
    it('go to my profiles', async () => {
        await LogiN.goToMyAccount();
        await LogiN.goToMyProfiles();
        //expect(await loginPage.returnCurrenUrl()).to.contains('profile');
        await loginPage.browser.sleep(1500);
        expect(await element(LogiN.firstName).isDisplayed()).to.eql(true);
    });
});
