class NavbarPage {
  get brandLink() {
    const selector = '.navbar-brand';
    return $(selector);
  }
  get monsterTeamLink() {
    const selector = '.navbar a[href="/mine"]';
    return $(selector);
  }
  get hamburgerLink() {
    const selector = '.dropdown-toggle';
    return $(selector);
  }
  get supportLink() {
    const selector = 'nav li > a[href="https://glitchitsystem.com"]';
    return $(selector);
  }
  get logoutLink() {
    const selector = 'div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(2) > a';
    return $(selector);
  }
}
module.exports = new NavbarPage();
