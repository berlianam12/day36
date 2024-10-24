const puppeteer = require("puppeteer");
const BASE_URL = "https://discord.com";
const discord = {
  browser: null,
  page: null,
  initialize: async () => {
    discord.browser = await puppeteer.launch({ headless: false });
    discord.page = await discord.browser.newPage();
    await discord.page.goto(BASE_URL);
  },
  login: async () => {
    let loginButton = await discord.page.$x(
      '//a[contains(text(), "Login")]'
    );
    await loginButton[0].click();
    await discord.page.waitForNavigation();
    await discord.page.waitForTimeout(1000);

    await discord.page.type('input[name="username"]', 'berliana.works@gmail.com', {delay:200});
    await discord.page.type('input[name="password"]', '#coklat3n4k', {delay:100});

    loginButton = await discord.page.$x(
      '//div[contains(text(), "Log in")]'
    );
    await loginButton[0].click();
    await discord.page.waitForNavigation();
  },
  moveTo:async(serverID, channelID) => {
    await discord.page.goto('https://discord.com/channels/'+ serverID +'/' + channelID);
    // await discord.page.waitForNavigation();
    await discord.page.waitForTimeout(5000)
  },
  text:async(txt)=>{
    await discord.page.type('div[data-slate-node="element"]', txt, {delay:100});
    await discord.page.waitForTimeout(5000)
    await discord.page.keyboard.press('Enter');
    await discord.page.waitForTimeout(5000)
    await discord.page.keyboard.press('Enter');
  
  }
}

module.exports = discord;
