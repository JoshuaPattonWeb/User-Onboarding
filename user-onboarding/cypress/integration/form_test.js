describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[type=text]');
    const emailInput = () => cy.get('input[type=email');
    const passwordInput = () => cy.get('input[type=password]');
    const tos = () => cy.get('input[type=checkbox]');
    const foobarInput = () => cy.get('input[name=foobar]');
    const submitBtn = () => cy.get('input[id="submitBtn"]')


    it('just to make sure', () => {
        expect(1 + 2).to.equal(3);
    })

    it('to make sure all proper elements are showing', () => {
        nameInput().should('exist');
        foobarInput().should('not.exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tos().should('exist')
        submitBtn().should('exist')
    })

    describe('inputted information', () => {
        it('lets check the name', () => {
            nameInput()
                .should('have.value', '')
                .type('Joshua')
                .should('have.value', 'Joshua') 
        })
        it('lets check the email', () => {
            emailInput()
                .should('have.value', '')
                .type('fakeemail@email.com')
                .should('have.value', 'fakeemail@email.com')
        })
        it('lets check out the password', () => {
            passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')
        })
    })
    describe('can it be checked or not', () => {
        it('checking if checkbox can be checked', () => {
            tos()
                .should('be.visible')
                .check({ force: true })
                .should('be.checked')
        })
        it('see if able to submit', () => {
            nameInput().type('Joshua')
            emailInput().type('fakeemail@email.com')
            passwordInput().type('password')
            submitBtn().click()
        })
        it('check for validation', () => {
            nameInput('have.value', '')
            emailInput().type('fakeemail@email.com')
            passwordInput().type('password')
            submitBtn().should('be.disabled')
        })
    })










})