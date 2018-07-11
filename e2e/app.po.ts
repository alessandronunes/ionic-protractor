import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    //browser.waitForAngularEnabled(false);
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('page-home')).element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
  }

  openMenu() {
    return element(by.className('bar-button-menutoggle')).click();
  }

  getMenuItems() {
    return element.all(by.css('.show-menu .list .item'));
  }
}
