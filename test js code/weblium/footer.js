const { element, elements } = require('wd-interface');



class Footer {
    constructor() {
        this.footerSelector = '.row-wrapper';
    }

    async clickAbout() {
        const footer = await elements(this.footerSelector).get(21);
        const about = await footer.getElements('a').get(3);
        await about.click();

    }

       
    async clickPricing() {
        const footer = await elements(this.footerSelector).get(21);
        const pricing = await footer.getElements('a').get(1);
        await pricing.click();
    
    }


    async clickPortfolio() {
        const footer = await elements(this.footerSelector).get(21);
        const pricing = await footer.getElements('a').get(2);
        await pricing.click();
    }
   
};



module.exports = Footer;