const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const NewEditMonserPage = require('../pages/newEditMonster.page');

describe('Unfavorite all Test Suite', () => {
  beforeEach(async () => {
    await browser.url('');
    await LoginPage.login();
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should favorite, then unfavorite all', async () => {
    await ButtonsAreaPage.createRandomTeamBtn.click();
    assert.equal(await MonsterListPage.numberOfMonsters.getText(), 'Number of monsters: 5', 'Number of monsters is incorrect');
    for (let i = 1; i <= (await MonsterListPage.monsterContainerList.length); i++) {
      const monsterItemContainer = await MonsterListPage.monsterItemContainer(i).then(async (data) => {
        return data;
      });
      await monsterItemContainer.click();
      await MonsterCardPage.manageMonsterDropdown.click();
      await MonsterCardPage.editMonster.click();
      await NewEditMonserPage.favoriteCheckbox.click();
      await NewEditMonserPage.saveBtn.click();
    }
    await browser.pause(500);
    for (let i = 1; i <= (await MonsterListPage.monsterContainerList.length); i++) {
      const monsterFavIcon = await MonsterListPage.monsterFavIcon(i).then(async (data) => {
        return data;
      });
      assert.equal(await monsterFavIcon.getAttribute('class'), 'glyphicon glyphicon-heart pull-right hearted', 'Favorite icon is missing');
    }
    await ButtonsAreaPage.unfavoriteBtn.click();
    await browser.pause(500);
    for (let i = 1; i <= (await MonsterListPage.monsterContainerList.length); i++) {
      const monsterFavIcon = await MonsterListPage.monsterFavIcon(i).then(async (data) => {
        return data;
      });
      assert.equal(await monsterFavIcon.isDisplayed(), false, 'Favorite icon is displayed');
    }
  });
});
