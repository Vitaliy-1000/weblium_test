const { elements, element, client } = require('wd-interface');
const Login = require('./login');

class LoginPage {
    constructor() {
        this.browser = client().chrome();
    }

    async goToLogin() {
        await this.browser.goTo('https://weblium.com/login');
    }

    async closeBrowser() {
        await this.browser.closeBrowser();
    }
    
    async returnCurrenUrl() {
        return await this.browser.getUrl();
    }

};

module.exports = LoginPage;
