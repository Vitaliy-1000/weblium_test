const { client, element, elements } = require('wd-interface');

class myProfile {
    constructor() {
        this.firstName = '#sign-up-name',
        this.lastName = '#sign-up-l-name'
    } 

    async clearValue() {
            element(this.firstName).clear();
            // return new myProfile();
    }
};

module.exports = myProfile;
