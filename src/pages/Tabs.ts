import{test,expect,Locator,Page} from '@playwright/test';
import { mainpage } from './mainpage';

export class tabs extends mainpage{
    

    readonly searchtextbox :Locator;
    readonly searchicon : Locator;
    readonly clickdynamicbtn :Locator;
    readonly simplealertbtn : Locator;
    readonly confirmbtn : Locator;
    readonly Promptalertbtn : Locator;
    readonly newtab :Locator;
    readonly popupwind :Locator;
    readonly doubleclickbtn : Locator;
    readonly dragfrom : Locator;
    readonly dragto : Locator;
    readonly countproducts :Locator;


    constructor(page:Page){
        super(page);
        this.searchtextbox = page.locator('//*[@id="Wikipedia1_wikipedia-search-input"]');
        this.searchicon = page.locator('//*[@id="Wikipedia1_wikipedia-search-form"]/div/span[2]/span[2]/input');
        this.clickdynamicbtn= page.getByRole('button',{name:'START'});
        this.simplealertbtn = page.getByRole('button',{name:'Simple Alert'});
        this.confirmbtn = page.getByRole('button',{name:'Confirmation Alert'});
        this.Promptalertbtn = page.getByRole('button',{name:'Prompt Alert'});
        this.newtab = page.getByRole('button',{name:'New Tab'});
        this.popupwind = page.getByRole('button',{name:'Popup Window'});
        this.doubleclickbtn = page.getByRole('button',{name:'Copy Text'});
        this.dragfrom = page.locator('#draggable');
        this.dragto = page.locator('#droppable');
        this.countproducts= page.locator('//*[@id="PageList2"]/div');

    }
    async simplealert(){
     
       await  this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            if (dialog.type() === 'prompt') {
                await dialog.accept('oggy');
            } else {
                await dialog.accept();
            }
        });
        await this.simplealertbtn.click();
        await this.confirmbtn.click();
        await this.Promptalertbtn.click();
        
        const text = await this.page.locator('#demo').textContent();
        console.log(text);
    }
    async opennewtab(){
        const context = this.page.context();
        const [newTabPage] = await Promise.all([
            context.waitForEvent('page'),
            this.newtab.click()
        ]);
        await newTabPage.waitForLoadState();
        console.log('New tab title:', await newTabPage.title());
        await newTabPage.close();
    }
    async openpopupwindow(){
        const context = this.page.context();
        const [newTabPage] = await Promise.all([
            context.waitForEvent('page'),
            this.popupwind.click()
        ]);
        await newTabPage.waitForLoadState();
        console.log('New tab title:', await newTabPage.title());
        await newTabPage.close();
    }
    async doubleclick(){
        await this.doubleclickbtn.dblclick();
        console.log('double click done');
    }

    async searchbox(){
        
        await this.searchtextbox.fill('moon');
        await this.searchicon.click();
        await this.page.waitForTimeout(3000);
        await this.clickdynamicbtn.click();
    }
    async dragdrop(){
        await this.dragfrom.dragTo(this.dragto);
        console.log('dragdrop done');
    }
    async scrolldown(){
        // Scroll the window down by 1000 pixels
        await this.page.mouse.wheel(0, 1000);
        await this.page.waitForTimeout(3000);
        console.log('scroll down done');
    }
    async alterfun(){
        await this.simplealert();
        await this.opennewtab();
        await this.openpopupwindow();
        await this.page.waitForTimeout(3000);
        await this.doubleclick();
        await this.dragdrop();
        await this.scrolldown();
      
    }
    async getcountvalues(){
        const count = await this.countproducts.count();
        for(let i=0;i<count;i++){
            console.log(await this.countproducts.nth(i).innerText());
        }
        
        
    }
}