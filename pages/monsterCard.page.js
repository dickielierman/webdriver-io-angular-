class MonsterCardPage {
  get selectAMonsterText() {
    const selector = 'app-monsters > div > div.col-md-7.rightPanel > app-monster-start > h3';
    return $(selector);
  }
  get card() {
    const selector = '.monsterDetail';
    return $(selector);
  }
  get name() {
    const selector = 'app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-8 > h1';
    return $(selector);
  }
  get description() {
    const selector = 'app-monster-detail > div.monsterDetail > div:nth-child(2) > div';
    return $(selector);
  }
  get roleIcon() {
    const selector = 'app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-4 > span.role';
    return $(selector);
  }
  get favoriteIcon() {
    const selector = 'app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-4 > span.hearted';
    return $(selector);
  }
  get manageMonsterDropdown() {
    const selector = 'app-monster-detail > div.row > div > div > button';
    return $(selector);
  }
  get editMonster() {
    const selector = 'app-monster-detail > div.row > div > div > ul > li:nth-child(1) > a';
    return $(selector);
  }
  get deleteMonster() {
    const selector = 'app-monster-detail > div.row > div > div > ul > li:nth-child(2) > a';
    return $(selector);
  }
  get deleteMonsterModal() {
    const selector = '#mat-dialog-0';
    return $(selector);
  }
  get deleteMonsterModalText() {
    const selector = '#mat-dialog-0 > app-pop-up > p';
    return $(selector);
  }
  get yesDeleteMonster() {
    const selector = '#mat-dialog-0 > app-pop-up > div > div:nth-child(1) > button';
    return $(selector);
  }
  get noDeleteMonster() {
    const selector = '#mat-dialog-0 > app-pop-up > div > div:nth-child(2) > button';
    return $(selector);
  }
}
module.exports = new MonsterCardPage();
