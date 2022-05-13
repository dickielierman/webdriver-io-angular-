const LoginPage = require('../pages/login.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');

describe('Delete Monster Test Suite', () => {
  beforeEach(async () => {
    await browser.url('');
    await LoginPage.login();
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should delete monster', async () => {
    await MonsterListPage.monsterItemContainer(1).then(async (elem) => {
      await elem.click();
    });
    await MonsterCardPage.manageMonsterDropdown.click();
    await MonsterCardPage.deleteMonster.click();
    await MonsterCardPage.deleteMonsterModal.waitForDisplayed();
    assert.equal(await MonsterCardPage.deleteMonsterModal.isDisplayed(), true, 'Delete monster modal is not displayed');
    assert.equal(
      await MonsterCardPage.deleteMonsterModalText.getText(),
      'Are you sure you want to delete this monster?',
      'Delete monster modal text is incorrect'
    );
    assert.equal(await MonsterCardPage.yesDeleteMonster.getText(), 'YES', `'YES' Delete monster modal button text is incorrect`);
    await MonsterCardPage.yesDeleteMonster.click();
    await browser.pause(1000);
    await MonsterListPage.monsterName(1).then(async (elem) => {
      assert.notEqual(await elem.getText(), 'Vampire', `Vampire text is still displayed`);
    });
  });
});
