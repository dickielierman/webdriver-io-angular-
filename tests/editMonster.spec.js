const LoginPage = require('../pages/login.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const EditNewMonsterPage = require('../pages/newEditMonster.page');
const countText = 'Number of monsters: ';
describe('Edit Monster test suite', () => {
  beforeEach(async () => {
    await browser.url('');
    await LoginPage.login();
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should edit a monster', async () => {
    const newName = 'THE vampire';
    const newDescr = 'He just wants your blood for mage stuff.';
    await MonsterListPage.monsterItemContainer(1).then(async (elem) => {
      await elem.click();
    });
    await MonsterCardPage.manageMonsterDropdown.click();
    await MonsterCardPage.editMonster.click();
    assert.equal(await browser.getUrl(), `${configBaseUrl}mine/0/edit`, 'Url is not correct');
    assert.equal(await EditNewMonsterPage.nameField.getValue(), `Vampire`, 'Name is not correct when landing on the edit page');
    assert.equal(await EditNewMonsterPage.favoriteCheckbox.isSelected(), true, 'Favorite is not correct when landing on the edit page');
    assert.equal(await EditNewMonsterPage.soldierRadio.isSelected(), true, 'Soldier is not correct when landing on the edit page');
    assert.equal(
      await EditNewMonsterPage.description.getValue(),
      `He just wants your blood.`,
      'Description is not correct when landing on the edit page'
    );
    await EditNewMonsterPage.nameField.setValue(newName);
    await EditNewMonsterPage.favoriteCheckbox.click();
    await EditNewMonsterPage.mageRadio.click();
    await EditNewMonsterPage.description.setValue(newDescr);
    await EditNewMonsterPage.saveBtn.click();
    assert.equal(await MonsterListPage.numberOfMonsters.getText(), `${countText}2`, 'Edited Monster count is incorrect');
    await MonsterListPage.monsterName('1').then(async (monsterName) => {
      assert.equal(await monsterName.isDisplayed(), true, 'Edited Monster Name is not displayed');
      assert.equal(await monsterName.getText(), newName, 'Edited Monster Name is incorrect');
    });
    await MonsterListPage.monsterDescr('1').then(async (monsterDescr) => {
      assert.equal(await monsterDescr.isDisplayed(), true, 'Edited Monster description is not displayed');
      assert.equal(await monsterDescr.getText(), newDescr, 'Edited Monster description is incorrect');
    });
    await MonsterListPage.monsterIcon('1').then(async (monsterIcon) => {
      assert.equal(await monsterIcon.isDisplayed(), true, 'Edited Monster icon is not displayed');
      assert.equal(
        await monsterIcon.getAttribute('class'),
        'glyphicon ra ra-laser-blast pull-right role',
        'Edited Monster icon is incorrect'
      );
    });
    await MonsterListPage.monsterFavIcon('1').then(async (monsterFavIcon) => {
      assert.equal(await monsterFavIcon.isDisplayed(), false, 'Edited Monster favorite icon is displayed');
    });
  });
});
