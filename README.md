#  Inteli - Instituto de Tecnologia e Liderança em parceria com TRACK.CO

Repositório do grupo 2024-T0003-ES09-G05

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="https://github.com/2023M8T3Inteli/Grupo-01/blob/main/Assets/inteliLogo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# Construção de Teste Automatizados e Controle de Qualidade de Software

 <a id="groupName"> Grupo 5 </a>

 ## 🚀 Integrantes
- <a href="https://www.linkedin.com/in/alan-rozensztajn-schipper-0563701ba/">Alan Schipper</a>
- <a href="https://www.linkedin.com/in/beatriz-hirasaki-leite-b2261923a/">Beatriz Mayumi</a>
- <a href="https://www.linkedin.com/in/felipe-saadi/">Felipe Saadi</a>
- <a href="https://www.linkedin.com/in/jordan-acs/">Jordan Andrade</a>
- <a href="https://www.linkedin.com/in/livia-bonotto-9064641a3/">Livia Bonotto</a>
- <a href="https://www.linkedin.com/in/pedro-hagge/">Pedro Baptista</a>
- <a href="https://www.linkedin.com/in/stefano-tinelli-b59515270/">Stefano Tinelli</a>

## 🔍 Sumário
* [Descrição ](#descricao)
* [Estrutura de pastas](#estrutura)
* [Documentação](#documentacao)
* [Instalação](#instalacao)
* [Histórico de Lançamentos](#historico)
* [Licença/license](#licenca)
* [Referências](#ref)

## 📜 <a id="descricao"> Descrição</a>

O projeto de automação de testes na plataforma CXM da empresa TRACK.CO tem como objetivo principal implementar uma estratégia abrangente de testes automatizados nas funcionalidades CORE do sistema, incluindo Pesquisas, Dashboards, Distribuição e Interação. A iniciativa visa mitigar os riscos associados aos deploys manuais, reduzir a dependência de testes manuais e minimizar a frequência de rollbacks, proporcionando uma experiência mais estável e confiável para os clientes.

O projeto também prevê a definição de indicadores chave de desempenho (KPIs) para monitorar a redução de rollbacks e a estabilidade da plataforma, bem como uma avaliação de impacto financeiro para quantificar os benefícios associados à implementação dos testes automatizados. A comunicação transparente com os clientes e a manutenção contínua dos testes garantirão a relevância e a confiabilidade dos testes à medida que o produto evolui.

Por meio da implementação de testes automatizados nas funcionalidades CORE da plataforma CXM, a empresa TRACK.CO busca não apenas elevar a qualidade do produto, mas também posicionar-se como referência em práticas de teste e confiabilidade, fortalecendo sua reputação no mercado e garantindo o sucesso contínuo no setor de Experiência do Cliente.

## 📁 <a id="estrutura"> Estrutura de Pasta </a>

* 2024-T0003-ES09-G05<br>
  * backend
     * dist
     * postgres-dump
     * prisma
     * src
     * teste
     * uploads
     * docker-compose.yml
     * package.json
  * docs<br>
     * documentos <br>
         --> GitFlow.md <br>
         --> requisitos_funcionais.mf <br>
         --> teste_carga.md <br>
         -->teste_integracao <br>
         -->teste unitarios <br>
         --> wireframe_mockup <br>
     * arquitetura.md
  * frontend
      * src
          --> public <br>
          --> src <br>
          --> index.html <br>
          --> package.json <br>
      
  * README.md


## 📄 <a id="documentacao"> Documentação</a>

### Métricas de qualidade

A documentação das métricas de qualidade estão contidas na pasta *documentos*, que pode ser acessada por meio do seguinte link : [Link](https://github.com/Inteli-College/2024-T0003-ES09-G05/blob/main/docs/documentos/metricas.md)

## 🔧 <a id="instalacao">Instalação</a>

Clone o projeto
```
git clone https://github.com/Inteli-College/2024-T0003-ES09-G05.git
```

### Executar Backend com Docker

Navegue até a pasta Backend
```
cd backend
```

Crie um arquivo .env na raiz da pasta backend e adicione as seguintes informações (preencher com os dados do banco)
```
DATABASE_URL=postgresql://user:password@database_url
SMTP_PASS=password
```

Rode o Docker
```
docker-compose up
```

### Executar o Backend Manualmente
Navegue até a pasta Backend
```
cd backend
```

Instale as dependências
```
npm install
```

Crie um arquivo .env na raiz da pasta backend e adicione as seguintes informações (preencher com os dados do banco e SMTP)
```
DATABASE_URL=postgresql://user:password@database_url
SMTP_PASS=password
```

Faça a Migração do DB
```
npx prisma migrate dev
```

Rode a Aplicação Backend
```
npm run start
```

## 🗃 <a id="historico"> Histórico de Lançamentos </a>

* 0.0.0 - 09/02/2024
  * Template do Readme
* 1.0.0 - 18/02/2024
  * [Release](https://github.com/Inteli-College/2024-T0003-ES09-G05/releases/tag/v1.0.0)
* 2.0.0 - 03/03/2024
*  * Implementação frontend
   * Implementação backend
   * TDD (Test Driven Domani)
   * Métricas de qualidade

## 📋 <a id="licenca"> Licença/license </a>

[Grupo 5](#groupName) by <a href= "https://www.inteli.edu.br/">Inteli</a>, <a href="https://www.linkedin.com/in/alan-rozensztajn-schipper-0563701ba/">Alan Schipper</a>, <a href="https://www.linkedin.com/in/beatriz-hirasaki-leite-b2261923a/">Beatriz Mayumi</a>, <a href="https://www.linkedin.com/in/felipe-saadi/">Felipe Saadi</a>, <a href="https://www.linkedin.com/in/jordan-acs/">Jordan Andrade</a>, <a href="https://www.linkedin.com/in/livia-bonotto-9064641a3/">Livia Bonotto</a>, <a href="https://www.linkedin.com/in/pedro-hagge/">Pedro Baptista</a>, <a href="https://www.linkedin.com/in/stefano-tinelli-b59515270/">Stefano Tinelli</a> is Licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

## 🎓 <a id="ref"> Referências </a>

Node. Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia Node. Disponível em: https://nodejs.org/docs/latest/api/ . Acesso em: fev. 2024.<br><br>
Docker. Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia Docker. Disponível em: https://docs.docker.com/ . Acesso em: fev. 2024.<br><br>
