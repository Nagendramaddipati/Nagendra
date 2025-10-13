import { Page } from "@playwright/test";

export class loginPage
 {
    page: Page
    constructor(_page: Page)
     {
        this.page = _page
    }
    get username() 
    {
        return this.page.locator("[name='email']")
    }
    get password() 
    {
        return this.page.locator("[name='password']")
    }
    get login() 
    {
        return this.page.locator("[type='submit']")
    }
    async loginToAzkaSurvey()
    {
        await this.username.fill("nagendra@azkasurvey.com")
        await this.password.fill("dW9T7ViQ")
        await this.login.click()
    }
}
