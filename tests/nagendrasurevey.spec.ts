import {test,expect}from '@playwright/test';
test('logging into azkasurvey', async ({page}) =>
{
   let  obj1= new uihelpers()
   obj1.navigatetourl(page);
    let obj2  = new mainui()
    obj2.enterlogin(page);
    let obj3 = new homepage()
    obj3.logoutbtn(page;
      
    )
});
  test('logging into uifunctionality',async ({page}) =>
{
    await page.locator("[name='name']").fill('Maddipati NagendraKumar');
    await page.locator("[name='address']").fill('East Godavari');
    await page.locator("[name='state']").selectOption('Andhra Pradesh');
    await page.waitForTimeout(3000);



}) ; 
test('logging into Dashboardfunctionality', async ({page})=>
{

    await page.locator('familydetails', async ({page}) =>
    {
        await page.locator("[name='familymember']").selectOption(4);
        await page.locator("[name='children']").selectOption(4);
        await page.waitForTimeout(3000);
    });

});  











  
    
      





















 


























