describe('POST /characters', function(){
    
    before(function(){
        cy.setToken()
        cy.back2ThePast()
    })    


    it('Deve cadastrar um personagem', function(){
        
        const character = {
            name: 'Wanda Maximoff',
            alias: 'Feiticeira Escarlate',
            team: ['Vingadores'],
            active: true
        }

        cy.api({
            method: 'POST',
            url: '/characters',
            body: character,
            headers:{
                Authorization: Cypress.env('token')
            }
        }).then(function(response){
            expect(response.status).to.eql(201) 
        })
    })
})