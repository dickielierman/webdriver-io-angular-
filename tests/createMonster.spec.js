const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const EditNewMonsterPage = require('../pages/newEditMonster.page');

const countText = 'Number of monsters: ';
describe('Create Monster test suite', () => {
  beforeEach(async () => {
    await browser.url('');
    await LoginPage.login();
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should create a new monster', async () => {
    await ButtonsAreaPage.newBtn.click();
    await EditNewMonsterPage.nameField.setValue('Swamp Thing');
    await EditNewMonsterPage.favoriteCheckbox.click();
    await EditNewMonsterPage.soldierRadio.click();
    await EditNewMonsterPage.description.setValue('Swamp Thing is a thing from the swamp.');
    await EditNewMonsterPage.saveBtn.click();
    assert.equal(await MonsterListPage.numberOfMonsters.getText(), `${countText}3`, 'New Monster count is incorrect');
    await MonsterListPage.monsterName('3').then(async (monsterName) => {
      assert.equal(await monsterName.isDisplayed(), true, 'New Monster Name is not displayed');
      assert.equal(await monsterName.getText(), 'Swamp Thing', 'New Monster Name is incorrect');
    });
    await MonsterListPage.monsterDescr('3').then(async (monsterDescr) => {
      assert.equal(await monsterDescr.isDisplayed(), true, 'New Monster description is not displayed');
      assert.equal(await monsterDescr.getText(), 'Swamp Thing is a thing from the swamp.', 'New Monster description is incorrect');
    });
    await MonsterListPage.monsterIcon('3').then(async (monsterIcon) => {
      assert.equal(await monsterIcon.isDisplayed(), true, 'New Monster icon is not displayed');
      assert.equal(await monsterIcon.getAttribute('class'), 'glyphicon ra ra-sword pull-right role', 'New Monster icon is incorrect');
    });
    await MonsterListPage.monsterFavIcon('3').then(async (monsterFavIcon) => {
      assert.equal(await monsterFavIcon.isDisplayed(), true, 'New Monster favorite icon is not displayed');
    });
  });
  it('should Validate errors', async () => {
    await ButtonsAreaPage.newBtn.click();
    await EditNewMonsterPage.nameField.click();
    await EditNewMonsterPage.description.click();
    await EditNewMonsterPage.nameField.click();

    assert.equal(await EditNewMonsterPage.nameError.isDisplayed(), true, 'EditNewMonsterPage.nameError is not displayed');
    assert.equal(await EditNewMonsterPage.descriptionError.isDisplayed(), true, 'EditNewMonsterPage.descriptionError is not displayed');

    assert.equal(await EditNewMonsterPage.nameError.getText(), 'Name is required', 'EditNewMonsterPage.nameError is not correct');
    assert.equal(
      await EditNewMonsterPage.descriptionError.getText(),
      'Description is required',
      'EditNewMonsterPage.descriptionError is not correct'
    );
  });
});
