const LoginPage = require('../pages/login.page');
const NavbarPage = require('../pages/nav.page');

describe('Navigation test suite', () => {
  beforeEach(async () => {
    await browser.url('');
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should open support page', async () => {
    // temp
    await LoginPage.login();
    await NavbarPage.hamburgerLink.click();
    await NavbarPage.supportLink.click();
    await browser.switchWindow('https://glitchitsystem.com/');

    assert.equal(
      await browser.getUrl(),
      'https://glitchitsystem.com/',
      `Navigated to ${await browser.getUrl()} instead of https://glitchitsystem.com/`
    );
  });
  it('should log out', async () => {
    // temp
    await LoginPage.login();
    await NavbarPage.hamburgerLink.click();
    await NavbarPage.logoutLink.click();
    assert.equal(await NavbarPage.hamburgerLink.isDisplayed(), false, `NavbarPage.hamburgerLink Label is displayed`);
    assert.equal(await LoginPage.usernameLabel.isDisplayed(), true, `LoginPage.usernameLabel is not displayed`);
    assert.equal(await LoginPage.usernameInput.isDisplayed(), true, `LoginPage.usernameInput is not displayed`);
    assert.equal(await LoginPage.usernameMessage.isDisplayed(), false, `LoginPage.usernameMessage is displayed`);
    assert.equal(await LoginPage.passwordLabel.isDisplayed(), true, `LoginPage.passwordLabel is not displayed`);
    assert.equal(await LoginPage.passwordInput.isDisplayed(), true, `LoginPage.passwordInput is not displayed`);
    assert.equal(await LoginPage.passwordMessage.isDisplayed(), false, `LoginPage.passwordMessage is displayed`);
    assert.equal(await LoginPage.loginButton.isDisplayed(), true, `LoginPage.loginButton is not displayed`);
  });
});
