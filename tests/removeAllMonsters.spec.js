const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

describe('Remove All Monster Test Suite', () => {
  beforeEach(async () => {
    await browser.url('');
    await LoginPage.login();
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should remove all monsters', async () => {
    await ButtonsAreaPage.removeAllBtn.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert not found');
    await browser.acceptAlert();
    assert.equal(await MonsterListPage.numberOfMonsters.getText(), 'Number of monsters: 0', 'Number of monsters is not equal to 0');
    assert.equal((await MonsterListPage.monsterContainerList.length) == 0, true, 'Monsters are displayed');
  });
  it('should not remove all monsters', async () => {
    await ButtonsAreaPage.removeAllBtn.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert not found');
    await browser.dismissAlert();
    assert.equal(await MonsterListPage.numberOfMonsters.getText(), 'Number of monsters: 2', 'Number of monsters is not equal to 0');
    assert.equal((await MonsterListPage.monsterContainerList.length) == 2, true, 'Monsters are not displayed');
  });
});
