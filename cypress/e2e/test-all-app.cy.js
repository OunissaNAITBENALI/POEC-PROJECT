describe('template spec', () => {
  it('should get a link to go  to home page', () => {

    // demander à cypress de se rendre sur la page web de l'appli 
    cy.visit('http://localhost:8080/')

    //vérifier que les boutons de la page d'accueil s'affichent parfaitement 
    //cy.get('.header a[href="/account/login"]').click()
    cy.get('[data-cy="header-login-btn"]').should('be.visible')
    cy.get('[data-cy="header-signup-btn"]').should('be.visible')
    cy.wait(1000)
  })

  // Demander à cypress de tenter de se connecter et de se déconnecter 
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

    //Demander à cypress de se déconnecter et revenir à la page initiale d'accueil 
    cy.get('[data-cy="header-logout-btn"]').should('be.visible').click()
    cy.wait(1000)
  })

  //it('should be possible to Logout', () => {

  //cy.visit('http://localhost:8080/')
  //cy.get('a[href="/account"]').should('be.visible')
  //cy.get('[data-cy="header-account-btn"]').should('be.visible')
  //cy.get('a[href="/logout"]').click()

  //cy.get('[data-cy="header-logout-btn"]').click()
  //cy.visit('http://localhost:8080/')
  //cy.get('a[href="/logout"]').click()href="/logout"

  it('should display an error message on empty email & password', () => {
    cy.visit('http://localhost:8080/login')
    //cy.get('a[href="/login"]').click()


    //cy.get('form-control[type="email"]').type('')
    //cy.get('form-contro[type="password"]').type('')
    // cliquer sur le bouton se connecter 
    //cy.get('a[href="/login"]').click()
    cy.get('button[type="submit"]').click()
    //cy.get('data-cy="login-btn').click()
    cy.get('input[required=""]').should('exist')
    //.should('be.visible')
    cy.wait(1000)
    cy.visit('http://localhost:8080/login')

  })

  it('should display an error message on invalide email', () => {
    cy.visit('http://localhost:8080/login')
    cy.get('input[name="email"]').type('testeurs@mlo')
    cy.get('input[name="password"]').type('987654321')
    cy.get('button[type="submit"]').click()
    //cy.contains('Please enter a valid email address.').should('be.visible')
    cy.get('input[required=""]').should('exist')
    cy.wait(1000)

  })

  it('should display an error message on invalide password', () => {
    cy.visit('http://localhost:8080/login')
    cy.get('input[name="email"]').type('testeurs@mlo.fr')
    cy.get('input[name="password"]').type('98765')
    cy.get('button[type="submit"]').click()
    //cy.contains('Please enter a valid password.').should('be.visible')
    cy.get('input[required=""]').should('exist')
    cy.wait(1000)


  })
})

