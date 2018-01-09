const { client, element, elements } = require('wd-interface');

class MyProfile {
    constructor() {
        this.leftMenuProfile = element('a.left-nav__link[href="/myaccount/profile"]'),
        this.firstNameByPanel = element('.panel__header.ellipsis'),

        /**** personal information ****/ 
        this.firstName = element('#sign-up-name'),
        this.lastName = element('#sign-up-l-name'),
        this.email = element('#email'),
        this.phoneNumber = element('#phone-num'),
        this.streetAddress1 = element('#address-1'),
        this.streetAddress2 = element('#address-2'),
        this.cityName = element('#city'),
        this.stateRegion = element('#region'),
        this.postalCode = element('#zip'),
        this.selectCountry = element('#country'),
        /****************************************/

        this.buttomSaveInto = element('.button.btn.btn_lg.btn_blue.btn_width_xlg')
    } 
    
    async clearAndSendKeys(el, text) {
        // el = element(class.selector)
        // text = '';
        await el.waitForElement(2000);
        await el.clear();
        await el.sendKeys(text);
        return this;
    }
    
    async goToMyProfiles() {
        await this.leftMenuProfile.waitForElement(2000);
        await this.leftMenuProfile.click();
        return this;
    }
};

module.exports = MyProfile;
