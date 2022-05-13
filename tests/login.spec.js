const LoginPage = require('../pages/login.page');

describe('Login test suite', () => {
  beforeEach(async () => {
    await browser.url('');
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should display error messages when fields are blank', async () => {
    await LoginPage.usernameInput.click();
    await LoginPage.passwordInput.click();
    assert.equal(await LoginPage.usernameMessage.isDisplayed(), true, 'Username error message not displayed');
    assert.equal(await LoginPage.usernameMessage.getText(), 'Username is required', 'Username error message is incorrect');

    await LoginPage.passwordInput.click();
    await LoginPage.usernameInput.click();
    assert.equal(await LoginPage.passwordMessage.isDisplayed(), true, 'Password error message not displayed');
    assert.equal(await LoginPage.passwordMessage.getText(), 'Password is required', 'Password error message is incorrect');
  });
  it('should display error message for invalid email', async () => {
    const invalidEmails = ['bob', 'bob@', 'bob@bob'];
    for (let i = 0; i < invalidEmails.length; i++) {
      await LoginPage.usernameInput.click();
      await browser.keys(['Control', 'a']);
      await browser.keys(['Control', 'x']);
      await browser.keys(invalidEmails[i]);
      await LoginPage.passwordInput.click();
      if (i !== 2) {
        assert.equal(await LoginPage.usernameMessage.isDisplayed(), true, 'Username error message not displayed');
        assert.equal(
          await LoginPage.usernameMessage.getText(),
          'Username needs to be a valid email',
          'Username error message is incorrect'
        );
      } else {
        assert.equal(await LoginPage.usernameMessage.isDisplayed(), false, 'Username error message displayed');
      }
    }
  });
  it('should display error message when login credientials are incorrect', async () => {
    const logins = [
      { username: 'bob@bob.com', password: 'wrongPassword' },
      { username: 'sam@sam.com', password: 'Test123' },
    ];
    for (let i = 0; i < logins.length; i++) {
      const user = logins[i];
      await browser.url('');
      await LoginPage.usernameInput.click();
      await browser.keys(user.username);
      await LoginPage.passwordInput.click();
      await browser.keys(user.password);
      await LoginPage.loginButton.click();
      assert.equal(await LoginPage.loginMessage.isDisplayed(), true, 'Username error message not displayed');
      assert.equal(await LoginPage.loginMessage.getText(), 'Invalid username or password', 'Login error message is incorrect');
    }
  });
  it('should log in successfully', async () => {
    await LoginPage.usernameInput.click();
    await browser.keys('bob@bob.com');
    await LoginPage.passwordInput.click();
    await browser.keys('Test123');
    await LoginPage.loginButton.click();
    assert.equal(await browser.getUrl(), `${configBaseUrl}mine`, `Didn't land on the mine page`);
  });
  it('should not route to mine when not logged in', async () => {
    await browser.url('/mine');
    assert.equal(await browser.getUrl(), `${configBaseUrl}`, `App routed to mine`);
  });
});
