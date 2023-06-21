/*
* migrate from app.po.ts
 */
// import { browser, by, element } from 'protractor';

export class AngularContactsDemoPage {
  navigateTo() {
    // return browser.get('/');
    return cy.visit('/');
  }

  getParagraphText() {
    // return element(by.css('app-root h1')).getText();
    return cy.get('app-root h1');
  }
}
