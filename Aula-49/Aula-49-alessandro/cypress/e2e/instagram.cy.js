describe('Testar pagina de login', () => {
    // antes de realizar o teste (acessar a pagina que quero testar)
    beforeEach(() => { 
        // o que vamos fazer antes de realizar o teste
        cy.visit('https://www.instagram.com');
    });

    it('Qualquer texto que eu quero que apareca quando acontecer o erro', () => {
        // botao da pagina sorry
        cy.get('button').contains('Log In').click();

        // espera 2 segundos 
        cy.wait(2000);

        // (garantindo que tem esta na pagina correta) especificar o que eu quero testar ta certo mesmo
        cy.get('button').contains('Log in');
        cy.contains('Forgot password');

        // preenche os campos
        cy.get('[name="username"]').type('sara_pezao_caucaia');
        cy.get('[name="password"]').type('botaessasenha');
        cy.get('[type="submit"]').click();
    });
  });