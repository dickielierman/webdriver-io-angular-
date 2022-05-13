class MonsterListPage {
  get numberOfMonsters() {
    const selector = `app-monsters > div > div.col-md-5 > app-monster-list > p`;
    return $(selector);
  }
  get monsterContainerList() {
    const selector = `app-monster-list > div:nth-child(4) > div > app-monster-item > a`;
    return $$(selector);
  }
  /**
   * Returns monster container
   * @param {Number} row // Starts with 1
   * @returns
   */
  async monsterItemContainer(row) {
    const selector = `app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(${row}) > a`;
    return $(selector);
  }
  /**
   * Returns monster Name
   * @param {Number} row // Starts with 1
   * @returns
   */
  async monsterName(row) {
    const selector = 'app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > div > h4';
    await $(selector).waitForDisplayed();
    return await $(selector);
  }
  /**
   * Returns monster description
   * @param {Number} row // Starts with 1
   * @returns
   */
  async monsterDescr(row) {
    const selector = 'app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > div > p';
    const temp = await $(selector);
    return temp;
  }
  /**
   * Returns monster icon
   * @param {Number} row // Starts with 1
   * @returns
   */
  async monsterIcon(row) {
    const selector = `app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(${row}) > a > span.role`;
    const temp = await $(selector);
    return temp;
  }
  /**
   * Returns monster favorite icon
   * @param {Number} row // Starts with 1
   * @returns
   */
  async monsterFavIcon(row) {
    const selector = `app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(${row}) > a > span.glyphicon.glyphicon-heart.pull-right.hearted`;
    const temp = await $(selector);
    return temp;
  }
}
module.exports = new MonsterListPage();
