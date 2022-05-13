const LoginPage = require('../pages/login.page');
const NavbarPage = require('../pages/nav.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const EditNewMonsterPage = require('../pages/newEditMonster.page');

describe('Monster Smoke Test', () => {
  beforeEach(async () => {
    await browser.url('');
  });
  afterEach(async () => {
    // await browser.pause(5000);
  });
  it('should verify static content on the login page', async () => {
    assert.equal(await browser.getUrl(), configBaseUrl, 'Url Is not correct');
    assert.equal(await NavbarPage.brandLink.isDisplayed(), true, `NavbarPage.brandLink is not displayed`);
    assert.equal(await NavbarPage.monsterTeamLink.isDisplayed(), true, `NavbarPage.monsterTeamLink is not displayed`);
    assert.equal(await NavbarPage.hamburgerLink.isDisplayed(), false, `NavbarPage.hamburgerLink Label is displayed`);
    assert.equal(await LoginPage.usernameLabel.isDisplayed(), true, `LoginPage.usernameLabel is not displayed`);
    assert.equal(await LoginPage.usernameInput.isDisplayed(), true, `LoginPage.usernameInput is not displayed`);
    assert.equal(await LoginPage.usernameMessage.isDisplayed(), false, `LoginPage.usernameMessage is displayed`);
    assert.equal(await LoginPage.passwordLabel.isDisplayed(), true, `LoginPage.passwordLabel is not displayed`);
    assert.equal(await LoginPage.passwordInput.isDisplayed(), true, `LoginPage.passwordInput is not displayed`);
    assert.equal(await LoginPage.passwordMessage.isDisplayed(), false, `LoginPage.passwordMessage is displayed`);
    assert.equal(await LoginPage.loginButton.isDisplayed(), true, `LoginPage.loginButton is not displayed`);
    // Test accuracy of static elements
    assert.equal(
      await NavbarPage.brandLink.getText(),
      'Monster Dream Team',
      `NavbarPage.brandLink text is not equal to 'Monster Dream Team'`
    );
    assert.equal(
      await NavbarPage.monsterTeamLink.getText(),
      'My Monster Team',
      `NavbarPage.monsterTeamLink text is not equal to 'My Monster Team'`
    );
    assert.equal(await LoginPage.usernameLabel.getText(), 'Username', `LoginPage.usernameLabel text is not equal to 'Username'`);
    assert.equal(await LoginPage.passwordLabel.getText(), 'Password', `LoginPage.passwordLabel text is not equal to 'Password'`);
    assert.equal(await LoginPage.loginButton.getText(), 'Login', `LoginPage.loginButton text is not equal to 'Login'`);
    assert.equal(await LoginPage.usernameInput.getValue(), '', `LoginPage.usernameInput is not blank`);
    assert.equal(await LoginPage.passwordInput.getValue(), '', `LoginPage.passwordInput is not blank`);
    assert.equal(await LoginPage.loginButton.isClickable(), false, `LoginPage.loginButton is clickable`);
  });
  it('should validate static content in navbar when logged in', async () => {
    await LoginPage.login();
    assert.equal(await NavbarPage.brandLink.isDisplayed(), true, `NavbarPage.brandLink is not displayed`);
    assert.equal(await NavbarPage.monsterTeamLink.isDisplayed(), true, `NavbarPage.monsterTeamLink is not displayed`);
    // Test accuracy of static elements
    assert.equal(
      await NavbarPage.brandLink.getText(),
      'Monster Dream Team',
      `NavbarPage.brandLink text is not equal to 'Monster Dream Team'`
    );
    assert.equal(
      await NavbarPage.monsterTeamLink.getText(),
      'My Monster Team',
      `NavbarPage.monsterTeamLink text is not equal to 'My Monster Team'`
    );
    assert.equal(await NavbarPage.hamburgerLink.isDisplayed(), true, `NavbarPage.hamburgerLink is not displayed`);
    assert.equal(await NavbarPage.supportLink.isDisplayed(), false, `NavbarPage.supportLink is displayed without hamburger click`);
    assert.equal(await NavbarPage.logoutLink.isDisplayed(), false, `NavbarPage.logoutLink is displayed without hamburger click`);
    await NavbarPage.hamburgerLink.click();
    assert.equal(await NavbarPage.supportLink.isDisplayed(), true, `NavbarPage.supportLink is not displayed with hamburger click`);
    assert.equal(await NavbarPage.logoutLink.isDisplayed(), true, `NavbarPage.logoutLink is not displayed with hamburger click`);
    assert.equal(await NavbarPage.supportLink.getText(), 'Support', `NavbarPage.supportLink text is not: Support`);
    assert.equal(await NavbarPage.logoutLink.getText(), 'Log Out', `NavbarPage.logoutLink text is not: Log Out`);
  });
  it('should validate buttons area when logged in', async () => {
    await LoginPage.login();
    assert.equal(await ButtonsAreaPage.newBtn.isDisplayed(), true, `ButtonsAreaPage.newBtn is not displayed`);
    assert.equal(await ButtonsAreaPage.newBtn.getText(), 'New Monster', `ButtonsAreaPage.newBtn text is not: New Monster`);

    assert.equal(await ButtonsAreaPage.randomBtn.isDisplayed(), true, `ButtonsAreaPage.randomBtn is not displayed`);
    assert.equal(await ButtonsAreaPage.randomBtn.getText(), 'Random Monster', `ButtonsAreaPage.randomBtn text is not: Random Monster`);

    assert.equal(await ButtonsAreaPage.removeAllBtn.isDisplayed(), true, `ButtonsAreaPage.removeAllBtn is not displayed`);
    assert.equal(
      await ButtonsAreaPage.removeAllBtn.getText(),
      'Remove All Monsters',
      `ButtonsAreaPage.removeAllBtn text is not: Remove All Monsters`
    );

    assert.equal(await ButtonsAreaPage.unfavoriteBtn.isDisplayed(), true, `ButtonsAreaPage.unfavoriteBtn is not displayed`);
    assert.equal(
      await ButtonsAreaPage.unfavoriteBtn.getText(),
      'Unfavorite All',
      `ButtonsAreaPage.unfavoriteBtn text is not: Unfavorite All`
    );

    assert.equal(await ButtonsAreaPage.createRandomTeamBtn.isDisplayed(), true, `ButtonsAreaPage.createRandomTeamBtn is not displayed`);
    assert.equal(
      await ButtonsAreaPage.createRandomTeamBtn.getText(),
      'Create Random Monster Team',
      `ButtonsAreaPage.createRandomTeamBtn text is not: Create Random Monster Team`
    );

    assert.equal(await ButtonsAreaPage.sortBtn.isDisplayed(), true, `ButtonsAreaPage.sortBtn is not displayed`);
    assert.equal(await ButtonsAreaPage.sortBtn.getText(), 'Sort Monsters', `ButtonsAreaPage.sortBtn text is not: Sort Monsters`);
  });
  it('should display default monster list', async () => {
    await LoginPage.login();

    assert.equal(await ButtonsAreaPage.sortBtn.isDisplayed(), true, `ButtonsAreaPage.sortBtn is not displayed`);
    assert.equal(await ButtonsAreaPage.sortBtn.getText(), 'Sort Monsters', `ButtonsAreaPage.sortBtn text is not: Sort Monsters`);
    assert.equal(await MonsterListPage.numberOfMonsters.getText(), 'Number of monsters: 2', 'Number of monsters is incorrect');
    //  monster one
    await MonsterListPage.monsterName('1').then(async (monsterName) => {
      assert.equal(await monsterName.isDisplayed(), true, 'Row 1 Monster Name is not displayed');
      assert.equal(await monsterName.getText(), 'Vampire', 'Row 1 Monster Name is incorrect');
    });
    await MonsterListPage.monsterDescr('1').then(async (monsterDescr) => {
      assert.equal(await monsterDescr.isDisplayed(), true, 'Row 1 Monster description is not displayed');
      assert.equal(await monsterDescr.getText(), 'He just wants your blood.', 'Row 1 Monster description is incorrect');
    });
    await MonsterListPage.monsterIcon('1').then(async (monsterIcon) => {
      assert.equal(await monsterIcon.isDisplayed(), true, 'Row 1 Monster icon is not displayed');
      assert.equal(await monsterIcon.getAttribute('class'), 'glyphicon ra ra-sword pull-right role', 'Row 1 Monster icon is incorrect');
    });
    await MonsterListPage.monsterFavIcon('1').then(async (monsterFavIcon) => {
      assert.equal(await monsterFavIcon.isDisplayed(), true, 'Row 1 Monster favorite icon is not displayed');
      assert.equal(
        await monsterFavIcon.getAttribute('class'),
        'glyphicon glyphicon-heart pull-right hearted',
        'Row 1 Monster favorite icon is incorrect'
      );
    });

    //  monster two
    await MonsterListPage.monsterName('2').then(async (monsterName) => {
      assert.equal(await monsterName.isDisplayed(), true, 'Row 2 Monster Name is not displayed');
      assert.equal(await monsterName.getText(), 'Swamp Creature', 'Row 2 Monster Name is incorrect');
    });
    await MonsterListPage.monsterDescr('2').then(async (monsterDescr) => {
      assert.equal(await monsterDescr.isDisplayed(), true, 'Row 2 Monster description is not displayed');
      assert.equal(await monsterDescr.getText(), 'He awaits you in the swamp.', 'Row 2 Monster description is incorrect');
    });
    await MonsterListPage.monsterIcon('2').then(async (monsterIcon) => {
      assert.equal(await monsterIcon.isDisplayed(), true, 'Row 2 Monster icon is not displayed');
      assert.equal(await monsterIcon.getAttribute('class'), 'glyphicon ra ra-health pull-right role', 'Row 2 Monster icon is incorrect');
    });
    await MonsterListPage.monsterFavIcon('2').then(async (monsterFavIcon) => {
      assert.equal(await monsterFavIcon.isDisplayed(), false, 'Row 2 Monster favorite icon is not displayed');
    });
  });

  it('should validate default content in monster card', async () => {
    await LoginPage.login();
    assert.equal(await MonsterCardPage.selectAMonsterText.isDisplayed(), true, `MonsterCardPage.selectAMonsterText is not displayed`);
    assert.equal(
      await MonsterCardPage.selectAMonsterText.getText(),
      'Select a Monster to edit.',
      `MonsterCardPage.selectAMonsterText text is not correct`
    );
    await MonsterListPage.monsterName('1').then(async (monsterName) => {
      await monsterName.click();
    });
    // assert displayed
    assert.equal(await MonsterCardPage.card.isDisplayed(), true, `MonsterCardPage.card is not displayed`);
    assert.equal(await MonsterCardPage.name.isDisplayed(), true, `MonsterCardPage.name is not displayed`);
    assert.equal(await MonsterCardPage.description.isDisplayed(), true, `MonsterCardPage.description is not displayed`);
    assert.equal(await MonsterCardPage.roleIcon.isDisplayed(), true, `MonsterCardPage.roleIcon is not displayed`);
    assert.equal(await MonsterCardPage.favoriteIcon.isDisplayed(), true, `MonsterCardPage.favoriteIcon is not displayed`);
    assert.equal(await MonsterCardPage.manageMonsterDropdown.isDisplayed(), true, `MonsterCardPage.manageMonsterDropdown is not displayed`);

    // assert text or icon

    assert.equal(await MonsterCardPage.name.getText(), 'Vampire', `MonsterCardPage.name is not correct`);
    assert.equal(await MonsterCardPage.description.getText(), 'He just wants your blood.', `MonsterCardPage.description is not correct`);
    assert.equal(
      await MonsterCardPage.roleIcon.getAttribute('class'),
      'glyphicon ra ra-sword pull-right role',
      `MonsterCardPage.roleIcon is not displayed`
    );
    assert.equal(
      await MonsterCardPage.favoriteIcon.getAttribute('class'),
      'glyphicon glyphicon-heart pull-right hearted',
      `MonsterCardPage.favoriteIcon is not displayed`
    );
    assert.equal(
      await MonsterCardPage.manageMonsterDropdown.getText(),
      'Manage Monster',
      `MonsterCardPage.manageMonsterDropdown is not displayed`
    );
    await MonsterCardPage.manageMonsterDropdown.click();
    assert.equal(await MonsterCardPage.editMonster.isDisplayed(), true, `MonsterCardPage.editMonster is not displayed`);
    assert.equal(await MonsterCardPage.deleteMonster.isDisplayed(), true, `MonsterCardPage.deleteMonster is not displayed`);

    assert.equal(await MonsterCardPage.editMonster.getText(), 'Edit Monster', `MonsterCardPage.editMonster is not correct`);
    assert.equal(await MonsterCardPage.deleteMonster.getText(), 'Delete Monster', `MonsterCardPage.deleteMonster is not correct`);
  });

  it('should validate content in new/edit pages', async () => {
    await LoginPage.login();
    await ButtonsAreaPage.newBtn.click();
    assert.equal(await browser.getUrl(), `${configBaseUrl}mine/new`, `url is not correct`);

    assert.equal(await EditNewMonsterPage.saveBtn.isDisplayed(), true, `EditNewMonsterPage.saveBtn is not displayed`);
    assert.equal(await EditNewMonsterPage.cancelBtn.isDisplayed(), true, `EditNewMonsterPage.cancelBtn is not displayed`);
    assert.equal(await EditNewMonsterPage.nameLabel.isDisplayed(), true, `EditNewMonsterPage.nameLabel is not displayed`);
    assert.equal(await EditNewMonsterPage.nameField.isDisplayed(), true, `EditNewMonsterPage.nameField is not displayed`);
    assert.equal(await EditNewMonsterPage.favoriteCheckbox.isDisplayed(), true, `EditNewMonsterPage.favoriteCheckbox is not displayed`);
    assert.equal(await EditNewMonsterPage.favoriteLabel.isDisplayed(), true, `EditNewMonsterPage.favoriteLabel is not displayed`);
    assert.equal(await EditNewMonsterPage.roleHeader.isDisplayed(), true, `EditNewMonsterPage.roleHeader is not displayed`);
    assert.equal(await EditNewMonsterPage.soldierRadio.isDisplayed(), true, `EditNewMonsterPage.soldierRadio is not displayed`);
    assert.equal(await EditNewMonsterPage.medicRadio.isDisplayed(), true, `EditNewMonsterPage.medicRadio is not displayed`);
    assert.equal(await EditNewMonsterPage.shieldRadio.isDisplayed(), true, `EditNewMonsterPage.shieldRadio is not displayed`);
    assert.equal(await EditNewMonsterPage.thiefRadio.isDisplayed(), true, `EditNewMonsterPage.thiefRadio is not displayed`);
    assert.equal(await EditNewMonsterPage.mageRadio.isDisplayed(), true, `EditNewMonsterPage.mageRadio is not displayed`);
    assert.equal(await EditNewMonsterPage.descriptionLabel.isDisplayed(), true, `EditNewMonsterPage.descriptionLabel is not displayed`);
    assert.equal(await EditNewMonsterPage.description.isDisplayed(), true, `EditNewMonsterPage.description is not displayed`);

    assert.equal(await EditNewMonsterPage.soldierIcon.isDisplayed(), true, `EditNewMonsterPage.soldierIcon is not displayed`);
    assert.equal(await EditNewMonsterPage.medicIcon.isDisplayed(), true, `EditNewMonsterPage.medicIcon is not displayed`);
    assert.equal(await EditNewMonsterPage.shieldIcon.isDisplayed(), true, `EditNewMonsterPage.shieldIcon is not displayed`);
    assert.equal(await EditNewMonsterPage.thiefIcon.isDisplayed(), true, `EditNewMonsterPage.thiefIcon is not displayed`);
    assert.equal(await EditNewMonsterPage.mageIcon.isDisplayed(), true, `EditNewMonsterPage.mageIcon is not displayed`);
    assert.equal(await EditNewMonsterPage.nameError.isDisplayed(), false, `EditNewMonsterPage.description is displayed`);
    assert.equal(await EditNewMonsterPage.descriptionError.isDisplayed(), false, `EditNewMonsterPage.descriptionError is displayed`);

    assert.equal(await EditNewMonsterPage.saveBtn.getText(), 'Save', `EditNewMonsterPage.saveBtn is not correct`);
    assert.equal(await EditNewMonsterPage.cancelBtn.getText(), 'Cancel', `EditNewMonsterPage.cancelBtn is not correct`);
    assert.equal(await EditNewMonsterPage.nameLabel.getText(), 'Name', `EditNewMonsterPage.nameLabel is not correct`);
    assert.equal(await EditNewMonsterPage.nameField.getValue(), '', `EditNewMonsterPage.nameField is not correct`);
    assert.equal(await EditNewMonsterPage.favoriteCheckbox.isSelected(), false, `EditNewMonsterPage.favoriteCheckbox is not correct`);
    assert.equal(await EditNewMonsterPage.favoriteLabel.getText(), 'Favorite', `EditNewMonsterPage.favoriteLabel is not correct`);
    assert.equal(await EditNewMonsterPage.roleHeader.getText(), 'Monster Role', `EditNewMonsterPage.roleHeader is not correct`);
    assert.equal(await EditNewMonsterPage.soldierRadio.isSelected(), false, `EditNewMonsterPage.soldierRadio is not correct`);
    assert.equal(await EditNewMonsterPage.medicRadio.isSelected(), false, `EditNewMonsterPage.medicRadio is not correct`);
    assert.equal(await EditNewMonsterPage.shieldRadio.isSelected(), false, `EditNewMonsterPage.shieldRadio is not correct`);
    assert.equal(await EditNewMonsterPage.thiefRadio.isSelected(), false, `EditNewMonsterPage.thiefRadio is not correct`);
    assert.equal(await EditNewMonsterPage.mageRadio.isSelected(), false, `EditNewMonsterPage.mageRadio is not correct`);
    assert.equal(await EditNewMonsterPage.descriptionLabel.getText(), 'Description', `EditNewMonsterPage.descriptionLabel is not correct`);
    assert.equal(await EditNewMonsterPage.description.getText(), '', `EditNewMonsterPage.description is not correct`);

    assert.include(await EditNewMonsterPage.formGroup.getText(), 'Soldier', `EditNewMonsterPage.formGroup did not include Soldier`);
    assert.include(await EditNewMonsterPage.formGroup.getText(), 'Medic', `EditNewMonsterPage.formGroup did not include Medic`);
    assert.include(await EditNewMonsterPage.formGroup.getText(), 'Shield', `EditNewMonsterPage.formGroup did not include Shield`);
    assert.include(await EditNewMonsterPage.formGroup.getText(), 'Thief', `EditNewMonsterPage.formGroup did not include Thief`);
    assert.include(await EditNewMonsterPage.formGroup.getText(), 'Mage', `EditNewMonsterPage.formGroup did not include Mage`);
  });
});
