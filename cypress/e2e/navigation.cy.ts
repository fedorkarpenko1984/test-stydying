describe('Homepage', () => {
  it('homepage', () => {
    cy.visit('/')
    cy.contains('Home')
    cy.get('nav').contains('Todo').click()
    cy.contains('todo')
    cy.get('nav').contains('Canban').click()
    cy.contains('canban')
    cy.contains('<').click()
    cy.contains('todo')
  })
})