const { element, elements } = require('wd-interface');

class Portfolio {
    constructor() {
        this.pageTitleForPortfolio = element('h2');
    
    }

    async getPageTitleText() {
        return this.pageTitleForPortfolio.getText();
    }


};


module.exports = Portfolio;