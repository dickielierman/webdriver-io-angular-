class NewEditMonsterPage {
  get saveBtn() {
    const selector = 'app-monster-edit button.btn.btn-success';
    return $(selector);
  }
  get cancelBtn() {
    const selector = 'app-monster-edit button.btn.btn-danger';
    return $(selector);
  }
  get nameLabel() {
    const selector = 'label[for="name"]';
    return $(selector);
  }
  get nameField() {
    const selector = '#name';
    return $(selector);
  }
  get favoriteCheckbox() {
    const selector = '#favorite';
    return $(selector);
  }
  get favoriteLabel() {
    const selector = 'label[for="favorite"]';
    return $(selector);
  }
  get roleHeader() {
    const selector = 'label[for="role"]';
    return $(selector);
  }
  get soldierRadio() {
    const selector = 'input[type="radio"][value="soldier"]';
    return $(selector);
  }

  get medicRadio() {
    const selector = 'input[type="radio"][value="medic"]';
    return $(selector);
  }
  get shieldRadio() {
    const selector = 'input[type="radio"][value="shield"]';
    return $(selector);
  }
  get thiefRadio() {
    const selector = 'input[type="radio"][value="thief"]';
    return $(selector);
  }
  get mageRadio() {
    const selector = 'input[type="radio"][value="mage"]';
    return $(selector);
  }
  get descriptionLabel() {
    const selector = 'label[for="description"]';
    return $(selector);
  }
  get description() {
    const selector = '#description';
    return $(selector);
  }

  get shieldIcon() {
    const selector = 'app-monster-edit form i.ra.ra-cracked-shield';
    return $(selector);
  }
  get medicIcon() {
    const selector = 'app-monster-edit form i.ra.ra-health';
    return $(selector);
  }
  get soldierIcon() {
    const selector = 'app-monster-edit form i.ra.ra-sword';
    return $(selector);
  }
  get thiefIcon() {
    const selector = 'app-monster-edit form i.ra.ra-kunai';
    return $(selector);
  }
  get mageIcon() {
    const selector = 'app-monster-edit form i.ra.ra-laser-blast';
    return $(selector);
  }
  get nameError() {
    const selector = 'app-monster-edit > div > div > form > div:nth-child(2) > div > div > p';
    return $(selector);
  }
  get descriptionError() {
    const selector = 'app-monster-edit > div > div > form > div:nth-child(5) > div > div > p';
    return $(selector);
  }
  get formGroup() {
    const selector = 'app-monster-edit > div > div > form > div:nth-child(4) > div > div > div';
    return $(selector);
    // app-monster-edit > div > div > form > div:nth-child(4) > div > div > div
  }
}
module.exports = new NewEditMonsterPage();
