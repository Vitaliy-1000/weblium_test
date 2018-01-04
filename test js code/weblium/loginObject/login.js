const { element, elements, client } = require('wd-interface');

class Login {
    constructor() {
        this.pageLoginText = element('.title__inner'),
        this.loginUrl = 'https://weblium.com/login',
        this.email = '#id5',
        this.password = '#id9',
        this.submitLogin = '[title="Login"]',
        this.leftMenuProfile = 'a.left-nav__link[href="/myaccount/profile"]'    
    }

    async getTextPageLogin() {
        return await this.pageLoginText.getText(); 
    }

    async goToMyAccount() {
        await element(this.email).sendKeys('dereva@dereva');
        await element(this.password).sendKeys('123123');
        await element(this.submitLogin).click();
        return new Login();
    }

    async getElementMyAccount() {
        const myWebsites = element('a.left-nav__link[href="/myaccount/websites"]');
        return await myWebsites.getText();
        return new Login();
    }

    async goToMyProfiles() {
        const profiles = element('a.left-nav__link[href="/myaccount/profile"]');
        await profiles.click();
        return new Login();
    }

};
module.exports = Login;


