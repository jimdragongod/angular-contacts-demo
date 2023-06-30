/*
* migrate from app.po.ts
 */
// import { browser, by, element } from 'protractor';

export class AngularContactsDemoPage {
  navigateTo() {
    // return browser.get('/');
    return cy.visit('/');
  }

  // getParagraphText() {
  //   return element(by.css('app-root h3')).getText();
  // }
  getParagraph() {
    return cy.get('app-root h3');
  }
}
