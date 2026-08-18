import {test as base} from '@playwright/test'
import { mainpage } from '../pages/mainpage'
import { tabs } from '../pages/Tabs'

type testFixture={
    mPage:mainpage
    mainurl : string
    tabs : tabs
    
}
const test = base.extend<testFixture>({
    mainurl: async ({ baseURL }, use) => {
        await use(baseURL || '');
    },
    mPage: async ({ page }, use) => {
        await use(new mainpage(page))
    },
    tabs:async({page},use )=>{
        await use(new tabs(page))
    }
})
export {test}