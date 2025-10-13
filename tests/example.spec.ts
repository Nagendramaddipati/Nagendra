import { test, expect } from '@playwright/test';
test ('logging on google survey', async ({page}) =>
{
    await page.goto("https://about.google/products/");
    await expect(page).toHaveTitle(/google/i);
    
});
test ('loggging on amazon survey', async ({page})=>
{
    await page.goto("https://www.amazon.in/gp/bestsellers");
    await expect(page).toHaveTitle(/amazon/i);
});

test ('logging on facebooksurvey',async ({page})=>
{
    await page.goto("https://www.facebook.com/legal/meta-products");
    await expect(page).toHaveTitle(/facebook/i); 

});
test ('logging on twitter survey',async ({page}) =>
{
    await page.goto("https://developer.x.com/en/docs/x-ads-api/catalog-management/api-reference/products");
    await expect(page).toHaveTitle(/twitter/i);
});
test ('logging on snapchat survey', async({page})=>
{
    await page.goto("https://www.snapchat.com/");
    await expect(page).toHaveTitle(/snapchat/i);
});
test ('logging on redbussurvey',async({page})=>
{
    await page.goto("https://www.rezukah.com/");
    await expect(page).toHaveTitle(/rezukah/i);
});
test('take a screenshot', async ({page})=>
{
    await page.goto('https://www.whatsapp.com/');
    await page.screenshot({path : 'screenshot.png'});
    await page.waitForTimeout(4000);


});
test('take a youtubesurvey', async ({page})=>
{
    await page.goto('www.google.')
})    






















 















    




