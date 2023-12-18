describe('template spec', () => {
    // Demander à cypress de tenetr de se connecter et de se déconnecter 
    it('should click on boutton Login, then logout', () => {
        cy.visit('http://localhost:8080/')

        cy.get('a[href="/login"]').click()
        cy.visit('http://localhost:8080/login')

        // Vérifier l'affichage des champs de saisie d'identifiant et mot de passe de connexion 
        cy.get('input[name="email"]').should('exist')
        cy.get('input[name="password"]').should('exist')

        // saisir les identifiants de conenxion 
        cy.get('input[name="email"]').type('testeurs@mlo.fr')
        cy.get('input[name="password"]').type('987654321')
        // cliquer sur le bouton se connecter 
        cy.get('button[type="submit"]').click()
        cy.wait(1000)
        cy.get('[data-cy="header-logout-btn"]').should('be.visible').click()

        //Demander à cypress de se déconnecter et revenir à la page initiale d'accueil 
        //cy.get('[data-cy="header-logout-btn"]').should('be.visible').click()

    })
})