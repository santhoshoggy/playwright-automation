
import {test} from "../fixtures/fixtures"

test.describe('mytests',()=>{

    test.beforeEach(async({page,mainurl})=>{
        await page.goto(mainurl);
        
    });

test('tc-01',async({mPage,tabs})=>{
    // await mPage.entervalues();
    // await tabs.searchbox();
    // await tabs.alterfun();
    await tabs.getcountvalues();
    console.log('finished...!!');
   
   
});

});