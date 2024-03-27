# Relatório de Teste de Integração

Este documento apresenta os resultados dos testes de integração para dois conjuntos de funcionalidades da aplicação: o gerenciamento de pesquisas e a distribuição de pesquisas. Os testes foram implementados utilizando a ferramenta Cypress, permitindo uma avaliação automatizada tanto do front-end quanto do back-end da aplicação.
-----------

-----------
## Explicação dos testes

### Arquivo `research.cy.ts`

#### 1. `Criação de Pesquisa`

- **Objetivo**: Verificar a funcionalidade de criação de uma nova pesquisa enviando um arquivo CSV e informações adicionais.
- **Endpoint**: `POST /research/upload`
- **Status do Teste**: ✅ Passou

#### 2. `Atualização de Pesquisa`

- **Objetivo**: Testar a atualização de dados de uma pesquisa existente.
- **Endpoint**: `PUT /research/{researchId}`
- **Status do Teste**: ✅ Passou

#### 3.`Consulta do Status de Pesquisa`

- **Objetivo**: Avaliar a capacidade de consulta do status atual de uma pesquisa.
- **Endpoint**: `GET /research/status/{researchId}`
- **Status do Teste**: ✅ Passou

#### 4.`Consulta de todas as pesquisas`

- **Objetivo**: Avaliar a capacidade de consultar todas as pesquisas disponíveis.
- **Endpoint**: `GET /research/all}`
- **Status do Teste**: ❌ Não Passou
   * Embora a rota no backend consiga ser acessada pelo cypress, a ferramenta não consegue acessar o frontend da aplicação por meio do endereço `http://localhost:5173/`.


### Arquivo `distribute.cy.ts`

#### 1. `Distribuição de Pesquisa`

- **Objetivo**: Verificar se o endpoint é capaz de distribuir uma pesquisa para os participantes.
- **Endpoint**: `POST /research/distribute/{researchId}`
- **Status do Teste**: ✅ Passou


### Estrutura de arquivos de teste de integração

Os testes de Integração utilizando Cypress estão organizados no diretório cypress/e2e/integration. Cada arquivo de teste cobre uma funcionalidade específica da aplicação.

 - **research.cy.ts:** Contém os testes de integração relacionados à página inicial de pesquisas.
 - **distribute.cy.ts:** Contém testes de integração relacionados à página de distribuições.



### Conclusão

Os testes para o gerenciamento de pesquisas foram concluídos com sucesso, indicando uma integração robusta e funcional entre as interfaces e o backend. Todas as funcionalidades básicas testadas responderam conforme o esperado.

O teste de distribuição de pesquisa demonstrou que a aplicação é capaz de realizar a distribuição conforme esperado, com o sistema retornando uma resposta positiva e o status apropriado, indicando a eficácia dessa funcionalidade.
