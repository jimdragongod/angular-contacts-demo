/*
* migrate from app.e2e-spec.ts
 */
import { AngularContactsDemoPage } from './app.po';

describe('angular-contacts-demo App', () => {
  let page: AngularContactsDemoPage;

  beforeEach(() => {
    page = new AngularContactsDemoPage();
  });

  /*
  * Protractor
   */
  // it('should display message saying app works', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('app works!');
  // });
  /*
  * Cypress
   */
  it('should display message saying 所有联系人', () => {
    page.navigateTo();
    page.getParagraph().then((jqElement) => {
      expect(jqElement).to.have.text('所有联系人');
    });
  });

});
