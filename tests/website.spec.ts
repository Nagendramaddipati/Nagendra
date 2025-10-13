import { test, expect } from '@playwright/test';
test ('logging into whatsapp', async({page}) =>
{
    await page.goto("https://www.whatsapp.com/");
    await expect (page).toHaveTitle(/whatsapp/i);
});
test ('logging into youtube', async({page})=>
{
    await page.goto("https://www.youtube.com/");
    await expect (page).toHaveTitle(/youtube/i);
});
test ('logging into calculator', async ({page}) =>
{
    await page.goto("https://www.calculator.net/");
    await expect(page).toHaveTitle(/calculator/i);
});

