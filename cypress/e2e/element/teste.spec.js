cy.visit('https://nubank.com.br/')
cy.get('//*[@id="short-form"]/div[1]').type('cpf')
cy.