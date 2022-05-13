class ButtonsAreaPage {
  get newBtn() {
    const selector = 'app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)';
    return $(selector);
  }
  get randomBtn() {
    const selector = 'app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)';
    return $(selector);
  }
  get removeAllBtn() {
    const selector = 'app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)';
    return $(selector);
  }
  get unfavoriteBtn() {
    const selector = 'app-monster-list > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)';
    return $(selector);
  }
  get createRandomTeamBtn() {
    const selector = 'app-monster-list > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)';
    return $(selector);
  }
  get sortBtn() {
    const selector = 'app-monster-list > div:nth-child(1) > div:nth-child(2) > button:nth-child(3)';
    return $(selector);
  }
}
module.exports = new ButtonsAreaPage();
