const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

describe('Random Monster Test Suite', () => {
  beforeEach(async () => {
    await browser.url('');
    await LoginPage.login();
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should create a random monster', async () => {
    await ButtonsAreaPage.randomBtn.click();
    assert.equal(await MonsterListPage.monsterContainerList.length, 3, 'The number of monsters is not correct');
    await MonsterListPage.monsterName('3').then(async (monsterName) => {
      let namelen = await monsterName.getText();
      namelen = namelen.length;
      assert.equal(await monsterName.isDisplayed(), true, 'New Monster Name is not displayed');
      assert.equal(namelen > 0, true, 'New Monster Name is not greater than 0');
    });

    await MonsterListPage.monsterDescr('3').then(async (monsterDescr) => {
      let namelen = await monsterDescr.getText();
      namelen = namelen.length;
      assert.equal(await monsterDescr.isDisplayed(), true, 'New Monster Name is not displayed');
      assert.equal(namelen > 0, true, 'New Monster Name is not greater than 0');
    });

    await MonsterListPage.monsterIcon('3').then(async (monsterIcon) => {
      assert.equal(await monsterIcon.isDisplayed(), true, 'New Monster Icon is not displayed');
    });

    await MonsterListPage.monsterFavIcon('3').then(async (monsterIcon) => {
      assert.equal(await monsterIcon.isDisplayed(), false, 'New Monster FavIcone is displayed');
    });
  });
});
