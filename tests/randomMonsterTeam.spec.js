const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const monsterData = require('../data/monsters.json');

describe('Random Monster Team Test Suite', () => {
  beforeEach(async () => {
    await browser.url('');
    await LoginPage.login();
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should create a random monster team', async () => {
    await ButtonsAreaPage.createRandomTeamBtn.click();
    assert.equal(await MonsterListPage.numberOfMonsters.getText(), 'Number of monsters: 5', 'Number of monsters is incorrect');
    assert.equal(await MonsterListPage.monsterContainerList.length, 5, 'The number of monsters is not correct');
    for (let i = 1; i <= (await MonsterListPage.monsterContainerList.length); i++) {
      const monsterName = await MonsterListPage.monsterName(i).then(async (data) => {
        return data;
      });
      const monsterDescr = await MonsterListPage.monsterDescr(i).then(async (data) => {
        return data;
      });
      const monsterIcon = await MonsterListPage.monsterIcon(i).then(async (data) => {
        return data;
      });

      for (let j = 0; j < monsterData.length; j++) {
        if ((await monsterName.getText()) == monsterData[j].name) {
          assert.equal(await monsterDescr.getText(), monsterData[j].desc, `Description for ${await monsterName.getText()} is incorrect`);
          assert.equal(await monsterIcon.getAttribute('class'), monsterData[j].icon, 'Icon is incorrect');
          break;
        } else if (j == monsterData.length - 1) {
          assert.equal(true, false, `${await monsterName.getText()} was not found.`);
        }
      }
    }
  });
});
