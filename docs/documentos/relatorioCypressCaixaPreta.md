# Relatório de Testes Cypress

Este documento contém detalhes sobre como executar os testes Cypress em seu projeto, além de uma explicação detalhada de cada teste implementado.
-----------

-----------
## Como rodar e executar os testes do Cypress

Para executar os testes Cypress em seu projeto, siga os passos abaixo:

1. **Instalação do Cypress**:
   - Certifique-se de que o Cypress está instalado em seu projeto. Se não estiver, você pode instalá-lo rodando `npm install cypress --save-dev` no diretório do seu projeto.

2. **Abrindo o Cypress**:
   - Para abrir a interface do Cypress, utilize o comando `npx cypress open`. Isso abrirá a interface gráfica, onde você pode selecionar individualmente os testes para executar.

3. **Executando os Testes via Linha de Comando**:
   - Para executar os testes via linha de comando sem abrir a interface gráfica, utilize o comando `npx cypress run`. Este comando executa todos os testes e é ideal para integração contínua.

## Explicação dos testes

### Arquivo `research.cy.ts`

#### 1. `displays page title with table`
- **Objetivo**: Verificar se a página inicial carrega corretamente, exibindo o título "Todas as pesquisas" e uma tabela com pelo menos uma linha.
- **Ações**:
  - Acessa a URL base.
  - Verifica se o título `h1` contém o texto "Todas as pesquisas".
  - Checa se a tabela contém as colunas "Pesquisa", "Criado em", "Status" e "Ação".
  - Assegura que a tabela tem ao menos uma linha de dados.

#### 2. `displays and close create research modal`
- **Objetivo**: Testar a abertura e o fechamento do modal de criação de nova pesquisa.
- **Ações**:
  - Acessa a URL base.
  - Verifica se o botão "Nova pesquisa" é visível e clica nele.
  - Checa se o modal se torna visível após o clique.
  - Fecha o modal clicando no ícone `svg` e verifica se o modal foi fechado corretamente.

#### 3. `navigate to list of distribution`
- **Objetivo**: Testar a navegação para a lista de distribuição.
- **Ações**:
  - Acessa a URL base.
  - Clica no primeiro link de navegação para a lista de distribuição.
  - Verifica se a URL atual não é mais a URL base, indicando que a navegação ocorreu.

### Arquivo `distribution.cy.ts`

#### 1. `should display page title with table`
- **Objetivo**: Verificar se a página de distribuição carrega corretamente com o título e uma tabela contendo as distribuições.
- **Ações**:
  - Acessa a URL da lista de distribuição.
  - Verifica se o título `h1` está presente.
  - Checa se a tabela contém as colunas "Distribuição", "Canal", "Criado em", "Status", e "Ação".
  - Assegura que a tabela tem ao menos uma linha de dados.

#### 2. `should display and close create distribution modal`
- **Objetivo**: Testar a abertura e o fechamento do modal de criação de nova distribuição.
- **Ações**:
  - Acessa a URL da lista de distribuição.
  - Verifica se o botão "Nova distribuição" é visível e clica nele.
  - Checa se o modal se torna visível após o clique.
  - Fecha o modal clicando no ícone `svg` e verifica se o modal foi fechado corretamente e a URL permanece inalterada.

## 3. `should interact successfully with distribution modal`
- **Objetivo**: Testar a interação com o modal de distribuição, incluindo o download de um arquivo modelo e o upload deste arquivo.
- **Ações**:
  - Acessa a URL da lista de distribuição e abre o modal de nova distribuição.
  - Verifica se o tipo de distribuição "E-mail" é visível.
  - Clica no botão de download e espera pelo download do arquivo.
  - Realiza o upload do arquivo baixado e verifica se o arquivo aparece como carregado.
 

## 4. Estrutura de arquivos de teste

Os testes Cypress estão organizados no diretório cypress/e2e. Cada arquivo de teste cobre uma funcionalidade específica do aplicativo.

 - **research.cy.ts:** Contém testes relacionados à página inicial de pesquisas.
 - **distribution.cy.ts:** Contém testes relacionados à página de distribuições.

Essa estrutura facilita a organização e manutenção dos testes, permitindo que os desenvolvedores encontrem e trabalhem em testes específicos de forma mais eficiente.

## 5. Boas práticas de teste
Para escrever testes com Cypress, é importante seguir algumas boas práticas para garantir que os testes sejam claros, mantidos e confiáveis:

 - **Seletores:** Utilize seletores robustos e específicos para interagir com os elementos da página. Prefira atributos de dados dedicados (por exemplo, data-cy) em vez de seletores baseados em estrutura CSS ou markup, pois isso minimiza a dependência de alterações no código-fonte.
Dados de Teste: Use dados de teste representativos e configure um estado inicial conhecido para os testes quando possível. Isso ajuda a garantir a reprodutibilidade e a confiabilidade dos testes.

 - **Estrutura de Teste:** Organize seus testes de forma lógica e modular, agrupando casos de teste relacionados em arquivos ou descrições de teste adequadas.

 - **Descrições de Teste:** Escreva descrições de teste claras e descritivas que expliquem o que cada teste está verificando.
Separação de Responsabilidades: Mantenha os testes focados em verificar uma funcionalidade específica e evite testar várias funcionalidades em um único teste.

 - **Manutenção de Testes:** À medida que o aplicativo evolui, é importante manter os testes atualizados e remover testes obsoletos ou duplicados.
Depuração de Testes

##### O Cypress oferece várias ferramentas e recursos para ajudar na depuração de testes que falham:

 - **Logs e Snapshots:** Use os logs do Cypress e snapshots de passos de teste para entender o estado da aplicação em falhas.
Execução em Modo Headed: Executar Cypress em modo headed (npx cypress open) permite visualizar a execução do teste passo a passo, facilitando a identificação do problema.

 - **Debugger:** O Cypress fornece um debugger integrado que permite depurar o código do teste e inspecionar variáveis e estados durante a execução.

 - **Gravação de Testes:** Utilize a ferramenta de gravação de testes do Cypress para gerar automaticamente a estrutura básica de um teste, facilitando o início do desenvolvimento de novos testes.
Integração Contínua

**O Cypress pode ser facilmente integrado em sistemas de integração contínua (CI) para automatizar a execução de testes como parte do pipeline de desenvolvimento. Aqui estão alguns exemplos de como configurar o Cypress em sistemas de CI populares:**

**GitHub Actions:** Consulte o exemplo de configuração no arquivo .github/workflows/cypress.yml.

**GitLab CI/CD:** Consulte o exemplo de configuração no arquivo .gitlab-ci.yml.


## 6. Paralelismo e balanceamento de carga

O Cypress oferece suporte para execução paralela de testes, o que pode acelerar significativamente a execução dos testes em ambientes de CI. Você pode configurar o paralelismo especificando a opção --parallel ao executar o comando cypress run.

 - Para distribuir a carga de execução de testes em várias máquinas, você pode usar o balanceamento de carga do Cypress. Essa abordagem divide os testes em várias faixas, que podem ser executadas em paralelo em diferentes máquinas ou contêineres.

`npx cypress run --parallel --record --key <record_key>`

Essa configuração executa os testes em paralelo e grava os resultados no Painel de Controle do Cypress usando uma chave de registro.


##  7. Relatórios e métricas
O Cypress fornece várias opções para gerar relatórios e acompanhar métricas dos testes executados:

**Relatórios HTML:** O Cypress pode gerar relatórios HTML detalhados com capturas de tela, vídeos e informações sobre os testes executados. Esses relatórios podem ser enviados como artefatos em sistemas de CI ou integrados em ferramentas de relatório de terceiros.

**Painel de Controle do Cypress:** O Painel de Controle do Cypress é uma plataforma baseada em nuvem que fornece relatórios, análises e outras ferramentas para visualizar e gerenciar os resultados dos testes.

**Integração com Ferramentas de Análise:** O Cypress pode ser integrado com ferramentas de análise de terceiros, como o Datadog, o New Relic e o Sentry, permitindo o monitoramento e a análise dos testes em conjunto com outras métricas do aplicativo.
Essas opções de relatório e monitoramento ajudam a equipe a ter uma visão clara da cobertura e desempenho dos testes, facilitando a identificação de problemas e a tomada de decisões informadas sobre a qualidade do software.

## Conclusão

Este relatório oferece uma visão abrangente sobre a implementação e execução dos testes automatizados com Cypress no projeto. Ao seguir as instruções detalhadas para rodar e executar os testes, juntamente com as explicações fornecidas para cada teste específico, os desenvolvedores e testadores podem assegurar que as funcionalidades principais do sistema estejam funcionando conforme esperado. A automação de testes com Cypress não só melhora a eficiência do processo de desenvolvimento, mas também contribui significativamente para a manutenção da qualidade e estabilidade do projeto. A prática contínua de testes automatizados é essencial para identificar precocemente problemas e regressões, garantindo assim um produto final mais robusto e confiável.
