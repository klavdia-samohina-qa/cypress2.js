describe('Провеерка авторизации', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
    })
 
    it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('german@dolnikov.ru');
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     })

    it('Ввели неверный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('qa_one_love');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     })

     it('Ввели неверный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germa@dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     })

     it('Ввели логин без @', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germadolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     })

     it('Ввели логин со строчными буквами', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })