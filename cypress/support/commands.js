// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setToken', function(){
    cy.api({
        method: 'POST',
        url: '/sessions',
        body: {
            email: 'patricia@qacademy.io',
            password: 'qa-cademy'
        }

    }).then(function(response){
        expect(response.status).to.eql(200)      
        Cypress.env('token', response.body.token)
    })
})

Cypress.Commands.add('back2ThePast', function(){
    cy.api({
        method: 'DELETE',
        url: '/back2thepast/62a7a670ba925800163b8208'
    }).then(function(response){
        expect(response.status).to.eql(200)
    })
})  