const { client, element, elements } = require('wd-interface');

class myProfile {
    constructor() {
        this.firstName = 'input#sign-up-name',
        this.lastName = '#sign-up-l-name'
    } 

    async getValueName() {
        element(this.firstName).getText();
        return new myProfile();
    }

    async clearValue() {
            element(this.firstName).clear();
            return new myProfile();
    }
};

module.exports = myProfile;
