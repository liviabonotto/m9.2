import { HTTPResponse } from "../../types";

describe("Research endpoint", () => {
  it("should create reasearch", () => {
    cy.fixture("teste.csv", "binary").then((fileContent) => {
      const blob = Cypress.Blob.binaryStringToBlob(fileContent);

      const formData = new FormData();

      formData.append("file", blob, "teste.csv");
      formData.append("author", "Teste");
      formData.append("title", "Pesquisa");
      formData.append("product", "Produto 1");

      cy.request({
        method: "POST",
        url: 'http://localhost:3000/research/upload',
        failOnStatusCode: false,
        body: formData,
      }).as("researchResponse");

      cy.get<HTTPResponse>("@researchResponse").should((response) => {
        expect(response.status).to.eq(201);
        // expect(response.body).to.have.property(
        //   "message",
        //   "Arquivo processado com sucesso e pesquisa criada!"
        // );
      });
    });
  });

  it('should update a research', () => {
    const researchId = '1'; // ID da pesquisa a ser atualizada
    const updateData = {
      title: 'Pesquisa Atualizada',
      author: 'Maria Souza',
      product: 'Produto Y',
    };

    cy.request({
      method: 'PUT',
      url: `/research/${researchId}`,
      body: updateData,
      failOnStatusCode: false,
    }).as('updateResponse');

    cy.get<HTTPResponse>('@updateResponse').should((response) => {
      expect(response.status).to.eq(200);
      // expect(response.body).to.have.property('title', updateData.title);
      // expect(response.body).to.have.property('author', updateData.author);
      // expect(response.body).to.have.property('product', updateData.product);
    });
  });

  it('should get the status of a research', () => {
    const researchId = 'abc123';

    cy.request({
      method: 'GET',
      url: `/research/status/${researchId}`,
      failOnStatusCode: false,
    }).as('statusResponse');

    cy.get<HTTPResponse>('@statusResponse').should((response) => {
      expect(response.status).to.eq(200);
      // expect(response.body).to.have.property('status');
      // expect(response.body.status).to.be.oneOf(['pending', 'processing', 'completed', 'failed']);
    });
  });

  it('should get all the researchs', () => {
 
    cy.request({
     method: 'GET',
      url: '/research/all',
      failOnStatusCode: false,
    }).as('getAllResponse');

    cy.visit('http://localhost:5173/') 

    cy.get<HTTPResponse>('@getAllResponse').should((response) => {
      expect(response.status).to.eq(200)
    
      const objects = response.body;
      expect(objects).to.be.an('array').that.is.not.empty;
    
      const firstObject = objects[0];
      expect(firstObject).to.have.property('id');
      expect(firstObject).to.have.property('title');
      expect(firstObject).to.have.property('product');
      expect(firstObject).to.have.property('author');
      expect(firstObject).to.have.property('createdAt');
      expect(firstObject).to.have.property('updatedAt');
    });
    })

    
});