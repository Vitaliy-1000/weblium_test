const { element, elements } = require('wd-interface');

class Portfolio {
    constructor() {
        this.pageTitleForPortfolio = element('h2');
        this.getPForDiv = elements('div>p');
    }

    async getPageTitleText() {
        return this.pageTitleForPortfolio.getText();
    }

    async getUSDForAnswer() {
        const getElementP = await this.getPForDiv.get(1);
        return await getElementP.getText();
    }

    async getAnswerForP() {
        const getAnswer = await this.getPForDiv.get(2);
        return await getAnswer.getText();
    }

};


module.exports = Portfolio;