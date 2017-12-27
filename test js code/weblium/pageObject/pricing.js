const { element, elements } = require('wd-interface');
 
class Pricing {
    constructor() {
        this.pageTitle = element('h2');
        this.textAlingLeft = elements('.text-align-left');
        this.textAlingCenter = elements('.text-align-center');
    }

    async getPageTitleText() {
        return this.pageTitle.getText();
    }

    async getUSDPrice() {
        const usdPrice = await this.textAlingLeft.get(2);
        return await usdPrice.getText();
    }

    async getMonthlyPrice() {
        const monthlyPrice = await this.textAlingCenter.get(3);
        return await monthlyPrice.getText();
    }
/********************************************/
    async getAnnualPrice() {
        const annualPrice = await this.textAlingCenter.get(6);
        return await annualPrice.getText();
    }

    async getBiennialPrice() {
        const biennialPrice = await this.textAlingCenter.get(10);
        return await biennialPrice.getText();
    }

/********************************************/    
};

module.exports = Pricing;