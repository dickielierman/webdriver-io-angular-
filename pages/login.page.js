class StarterPage {
  get usernameLabel() {
    const selector = 'label[for="username"]';
    return $(selector);
  }
  get usernameInput() {
    const selector = '#username';
    return $(selector);
  }
  get usernameMessage() {
    const selector = 'app-login > div > div > form > div:nth-child(1) > div > div > p';
    return $(selector);
  }
  get passwordLabel() {
    const selector = 'label[for="password"]';
    return $(selector);
  }
  get passwordInput() {
    const selector = '#password';
    return $(selector);
  }
  get passwordMessage() {
    const selector = 'app-login > div > div > form > div:nth-child(2) > div > div > p';
    return $(selector);
  }
  get loginButton() {
    const selector = '.btn.btn-success';
    return $(selector);
  }
  get loginMessage() {
    const selector = 'app-login > div > div > form > div:nth-child(3) > div > p';
    return $(selector);
  }
  /**
   *  Logs user in valid test credentials are username 'bob@bob.com' and password 'Test123'
   * @param {String} username
   * @param {String} password
   */
  async login(username = 'bob@bob.com', password = 'Test123') {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}
module.exports = new StarterPage();
