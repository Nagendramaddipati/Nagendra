import {Page,test} from "@playwright/test";
let _page:Page
test('logging into mouseoveroperation', async ({page})=>
{
    
    await page.goto('http://testingdevnets.com/');
    await page.waitForTimeout(1000);
    await page.locator("(//a[contains(text(),'Courses')])[1]").hover();
    await page.waitForTimeout(1000);
    await page.locator("//a[contains(text(),'Development')])[1]").hover();
    await page.waitForTimeout(1000);
    let C_Language = page.locator("//a[contains(text(),'C Language')])[1]");
    await C_Language.hover();
    await C_Language.click();
});
 test ('logging into c_course register', async ({page})=>
{
    await page.locator("//label[contains(text(),'Your Name')][1]");
    await page.waitForTimeout(1000);
    await page.keyboard.type("maddipati nagendrakumar");
    await page.waitForTimeout(1000);
    await page.keyboard.type("ctr+A");
    await page.waitForTimeout(1000);
    await page.keyboard.type("Backspace");
    await page.waitForTimeout(1000);
});
test ('logging into  details',async ({page})=>
{
    await page.locator("//label[contains(text(),'Email address')]");
    await page.waitForTimeout(1000);
    await page.keyboard.type("nagendramaddipati9@gmail.com");
    await page.waitForTimeout(1000);
    await page.keyboard.type("ctr+A");
    await page.waitForTimeout(1000);
    await page.keyboard.type("Backspace");
    await page.waitForTimeout(1000);
}
);
test('logging on phone number data', async ({page})=>
{
    await page.locator("//label[contains(text(),'PhoneNumber')]");
    await page.waitForTimeout(1000);
    await page.keyboard.type("8179972296");
    await page.waitForTimeout(1000);
    await page.keyboard.type("ctr+A");
    await page.waitForTimeout(1000);
    await page.keyboard.type("Backspace");
    await page.waitForTimeout(1000);

});
test('comments',async ({page})=>
{
    await page.locator("//label[contains(text(),'Questions or Comments')]");
    await page.waitForTimeout(1000);
    await page.keyboard.type("8179972296");
    await page.waitForTimeout(1000);
    await page.keyboard.type("ctr+A");
    await page.waitForTimeout(1000);
    await page.keyboard.type("Backspace");
    await page.waitForTimeout(1000);

});
test.afterEach('clear data', async ({page})=>
{
    await page.waitForTimeout(1000);


});

 















