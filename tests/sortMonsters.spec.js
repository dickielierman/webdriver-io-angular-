const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

describe('Sort Monsters Test Suite', () => {
  beforeEach(async () => {
    await browser.url('');
    await LoginPage.login();
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should create a team and sort them', async () => {
    await ButtonsAreaPage.createRandomTeamBtn.click();
    await browser.pause(500);
    await ButtonsAreaPage.sortBtn.click();
    await browser.pause(500);
    let monsters = [];
    let monstersSorted = [];
    assert.equal(await MonsterListPage.numberOfMonsters.getText(), 'Number of monsters: 5', 'Number of monsters is incorrect');
    for (let i = 1; i <= (await MonsterListPage.monsterContainerList.length); i++) {
      const monsterName = await MonsterListPage.monsterName(i).then(async (data) => {
        return data;
      });
      monsters.push(await monsterName.getText());
    }
    monstersSorted = monsters.sort();
    if (monsters !== monstersSorted) {
      assert.equal(true, false, `Monster order didn't match computed sort`);
    }
  });
});
