const { client, element, elements } = require('wd-interface');
const LoginPage = require('../loginObject/loginPage');
const { expect } = require('chai');
const Login = require('../loginObject/login');
const MyProfile = require('../loginObject/myProfile');

describe('Login lincks', () => {
    const loginPage = new LoginPage();
    const login = new Login();
    const myProfile = new MyProfile();

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

    it('go to my profiles', async () => {
        await login.goToMyAccount();
        await myProfile.goToMyProfiles();
        expect(await loginPage.returnCurrenUrl()).to.contains('profile');
    });
*/

    it('personal information', async () => {
        await login.goToMyAccount();
        await myProfile.goToMyProfiles();
        
        await myProfile.clearAndSendKeys(myProfile.firstName, 'asd');
        await console.log(await myProfile.firstName.getAttribute("value"));
        
        await myProfile.clearAndSendKeys(myProfile.lastName, 'DSA');
        await console.log(await myProfile.lastName.getAttribute("value"));
        
        await myProfile.clearAndSendKeys(myProfile.email, 'asd@DSA');
        await console.log(await myProfile.email.getAttribute("value"));
        
        await myProfile.clearAndSendKeys(myProfile.phoneNumber, '+23451678932');
        await console.log(await myProfile.phoneNumber.getAttribute("value"));
        
        await myProfile.clearAndSendKeys(myProfile.streetAddress1, 'asdDSAdsaASD');
        await console.log(await myProfile.streetAddress1.getAttribute("value"));
        /*
        await myProfile.clearAndSendKeys(myProfile.streetAddress2, 'asd123DSA');
        await console.log(await myProfile.streetAddress2.getAttribute("value"));
        
        await myProfile.clearAndSendKeys(myProfile.cityName, 'New York');
        await console.log(await myProfile.cityName.getAttribute("value"));
        
        await myProfile.clearAndSendKeys(myProfile.stateRegion, 'Bruclin');
        await console.log(await myProfile.stateRegion.getAttribute("value"));
        
        await myProfile.clearAndSendKeys(myProfile.postalCode, '89076');
        await console.log(await myProfile.postalCode.getAttribute("value"));
        
        await myProfile.clearAndSendKeys(myProfile.firstName, 'asd');
        await console.log(await myProfile.firstName.getAttribute("value"));
       */ 
    });

});
