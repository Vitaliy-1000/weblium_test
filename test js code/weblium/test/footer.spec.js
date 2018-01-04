const BasePage = require('../pageObject/basePage');

const { expect } = require('chai');
describe('Landing lincks', () => {
    const basePage = new BasePage();
    
    // before(async () => {
    //     await basePage.browser.startSelenium();
    // });

    beforeEach(async () => { 
        await basePage.goToBase();
    });
   // перед кожним ітом визивається те що в тілі функції


    afterEach(async () => {
        await basePage.closeBrowser();
    });
 
    // after(async () => {
    //     await basePage.browser.stopSelenium();
    // });


//     it('linck Pricing', async () => {
// // клікаю на футеа лінку на прайсінг 
//         const pricing = await basePage.fromFooterToPricing();
// // перевіряю що вдреса відповідає дійсності
//         expect(await basePage.returnCurrenUrl()).to.contains('pricing');
//         expect(await pricing.getPageTitleText()).to.contains('Pricing');
//         expect(await pricing.getUSDPrice()).to.eql('$399');
//         expect(await pricing.getMonthlyPrice()).to.eql('$15');

//         /********************************************************/
        
//         expect(await pricing.getAnnualPrice()).to.eql('$10.5');
//         expect(await pricing.getBiennialPrice()).to.eql('$8.25');

//         /********************************************************/
//     });

//     it('link About', async () => {
//         await basePage.fromFooterToAbout();
//         expect(await basePage.returnCurrenUrl()).to.contains('about');
//     });


/****************************************************************************/

    it('linck Portfolio', async () => {
       const portfolio = await basePage.FromFooterToPortfolio();
       expect(await basePage.returnCurrenUrl()).to.contains('portfolio');
       expect(await portfolio.getPageTitleText()).to.contains('Portfolio');
       expect(await portfolio.getUSDForAnswer()).to.eql('Get your website for $399');
       expect(await portfolio.getAnswerForP()).to.eql('Still have doubts?');

    });
  
/****************************************************************************/

});
