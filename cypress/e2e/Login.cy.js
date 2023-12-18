describe('template spec', () => {
    it('should get a link to go  to home page', () => {

        // demander à cypress de se rendre sur la page web de l'appli 
        cy.visit('http://localhost:8080/')

        //cy.get('.header a[href="/account/login"]').click()
        cy.get('[data-cy="header-login-btn"]').should('be.visible')
        //cy.get('[data-cy="header-signup-btn"]').should('be.visible')

        // Dmander à cypress de cliquer sur le bouton login  
        cy.visit('http://localhost:8080/login')

        //cy.get('[data-cy="header-login-btn] > Login').sould('be.visible').click()

        cy.get('input[name="email"]').type('testeurs@mlo.fr')
        cy.get('input[name="password"]').type('987654321')

        cy.get('button[type="submit"]').click()

        //it('should display message error on empty informations', () => {

        // Demander à cypress de cliquer sur le bouton sign up sans saisir les champs obligatoires 

        //cy.get('#fullname').type(' ')
        //cy.get('input[name="email"]').type(' ')
        //cy.get('input[name="password"]').type(' ')
        // cy.get('#confirmPassword').type(' ')
        //cy.get('.offset-sm-3 > .btn').click()
        // cy.get(".highlight[button=signUp]").click()
        //cy.get('button[type="submit"]').click()
        //cy.get('[data-cy="signup-submit-btn"]').click()
        // cy.get('[data-cy="signup-form"]').submit()
        //cy.get('[data-cy="header-signup-btn"]', 'Sign Up').click()

        //cy.get('.offset-sm-3 > .btn').click()
        // vérifier l'affichage du message d'erreur 
        //cy.contains("Veuillez renseigner ce champs").should("exist")

    })
})
