const { element, elements, client } = require('wd-interface');

const Login = require('./login');

class myProfile {
    constructor() {
        this.firstName = '#sign-up-name',
        this.lastName = '#sign-up-l-name'
    } 
};

module.exports = myProfile;
