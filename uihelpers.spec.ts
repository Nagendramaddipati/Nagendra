import {test,expect}from '@playwright/test';

test('logging into azkasurvey', async ({page}) =>
{
    await page.goto('https://azkasurvey.com/login');
    await page.locator("[name='email']").fill('nagendra@azkasurvey.com');
    await page.locator("[name='password']").fill('asdf');
    await page.locator("[type='submit']").click;
    await expect(page).toHaveTitle(/azkasurvey/i);
    await page.waitForTimeout(3000);
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


   






    










