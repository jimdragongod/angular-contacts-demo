/*
* migrate from list.e2e-spec.ts
 */
// import { browser, element, by } from 'protractor';

describe('contact list', function () {
    it('test ListComponent', function () {
        // 打开网页
        // browser.get('/list');
        cy.visit('/list');

        //  const contactList = element.all(by.css('.list li a'));
        const contactListChainable =  cy.get('.list li a');

        // 测试列表记录条数是否符合预期
        // expect(contactList.count()).toBeGreaterThan(8);
        contactListChainable.then(function (contactList){
            expect(contactList.length).to.gt(8);
        });

        // contactList.first().click();
        // browser.getCurrentUrl().then(function(url) {
        //     expect(url.endsWith('list/1')).toBe(true);
        // });
        contactListChainable.first().click();
        cy.location().then(function (url) {
            expect(url.pathname).to.match(/list\/1$/);
        })
    })
})
