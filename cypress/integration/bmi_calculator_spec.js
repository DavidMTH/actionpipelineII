describe ('BMI Calculator', () => {
    it('calculates BMI correctly', () => {
        cy.visit('index.html')

        cy.get('#weight').type('70')
        cy.get('#height').type('180')

        cy.contains('Berechne').click()

        cy.get('#result').should('contain', 'Dein BMI betraegt:')

        cy.get('#result').invoke('text').then(parseFloat).should('bea.a', 'number')
    })

    it('handles invalid input', () => {
        cy.visit('index.html')

        cy.get('#weight').type('abc')
        cy.get('#height').type('xyz')

        cy.contains('Berechne').click()

        cy.get('#result').should('contain', 'Bitte geben Sie gueltige Werte ein')
    })
})