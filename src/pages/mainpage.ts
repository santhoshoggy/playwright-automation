import {test,Locator,Page,expect} from "@playwright/test"


export class mainpage {
   

    page:Page
    readonly Enternamelocator : Locator
    readonly Emaillocator : Locator
    readonly phonelocator : Locator
    readonly gendermale : Locator
    readonly genderfemale : Locator
    readonly checkbox : Locator
    readonly dropdown : Locator
    readonly singlefileupload : Locator

    readonly clicksingleuploadbtn : Locator
 
    



    constructor(page:Page){
        this.page = page
        this.Enternamelocator = page.locator('//*[@id="name"]');
        this.Emaillocator = page.locator('//*[@id="email"]');
        this.phonelocator = page.locator('//*[@id="phone"]');
        this.gendermale = page.locator('//*[@id="male"]');
        this.genderfemale = page.locator('//*[@id="female"]');
        this.checkbox = page.locator('//*[@id="sunday"]');
        this.dropdown = page.locator('//*[@id="country"]');
        this.singlefileupload = page.locator('//*[@id="singleFileInput"]');
        this.clicksingleuploadbtn = page.getByRole('button',{name:'Upload Single File'});
        
        
        

    }
    async mainpage(){
        await this.page.goto('/');
       
    }
    async entername(){
        await this.Enternamelocator.pressSequentially('sandeep');
        await expect(this.Enternamelocator).toHaveValue('sandeep');
    }
    async enteremail(){
        await this.Emaillocator.pressSequentially('EMAIL_ADDRESS');
        await expect(this.Emaillocator).toHaveValue('EMAIL_ADDRESS');
    }
    async enterphone(){
        await this.phonelocator.pressSequentially('9876543210');
        await expect(this.phonelocator).toHaveValue('9876543210');
    }
    async radiobtn(){
        await this.gendermale.click();
        await expect(this.gendermale).toBeChecked()
    }
    async dayscheckbox(){
      
        const checkboxes =  this.page.locator('.form-check-input[type="checkbox"]');
        const count = await checkboxes.count();
        console.log(count);
        for (let i=0 ;i<count;i++){
            await checkboxes.nth(i).check();
            await expect(checkboxes.nth(i)).toBeChecked();
        }
    }
    async selectdropdown(){
        
        await this.dropdown.selectOption({index:2})
        console.log('dropdown selected');
    }
    async uploadsinglefile(){
        await this.singlefileupload.setInputFiles('C:/PROJECTS/sample-site/src/test-data/sample.txt');
        console.log('file uploaded');
        await this.clicksingleuploadbtn.click();
    }
    async entervalues(){
        await this.entername();
        await this.enteremail();
        await this.enterphone();
        await this.radiobtn();
        await this.dayscheckbox();
        await this.selectdropdown();
        await this.uploadsinglefile();
     
        // const reloadpage = await this.page.reload();
        // await reloadpage;
    }



    
}