# Métricas de qualidade

##  Definição de objetivos de qualidade

A seguir descreveremos os objetivos estabelecidas para garantir a qualidade da solução para o cliente.

1. Assegurar que todos os bugs críticos são corrigidos antes da subida de cada versão.
2. Atingir uma cobertura de testes de pelo menos 80% para as funcionalidades críticas, garantindo que os testes automatizados abranjam a maioria dos cenários de uso das features.
3. A cada subida de versão, ter no máximo 3 bugs críticos (que podem resultar em rollbacks).
4. A cada distribuição de pesquisas, ter uma taxa de abertura dos e-mails de pelo menos 80%.
5. A cada distribuição de pesquisas, ter uma taxa de resposta das pesquisas de pelo menos 60%.
6. Reduzir o tempo de identificação de erros em planilhas de distribuição.
7. Alcançar uma pontuação de satisfação do cliente de pelo menos 70% relacionada à estabilidade e facilidade de uso do software.

## Formulação das questões que norteiam os objetivos

Objetivo 1:
1. Como verificar o que é bug crítico?
2. Como tratar esses bugs antes da subida de cada versão?

Objetivo 2:
1. Como assegurar que 80% das funcionalidades está coberta?
2. Como identificar as funcionalidades críticas da aplicação?

Objetivo 3:
1. Quais tecnologias usar para avaliar a critícidade dos bugs?

Objetivo 4:
1. Como acompanhar as taxas de abertura de um e-mail?
2. Como garantir que 80% serão abertos?

Objetivo 5:
1. Como garantir que 60% dos usuários respondam as pesquisas?

Objetivo 6:
1. Como coletar o tempo de resolução dos erros da planilha?
2. Que mecanismos podemos utilizar para reduzir o tempo de identificação de erros?

Objetivo 7:
1. Como metrificar a facilidade do uso do software?
2. Como metrificar a estabilidade do software?
3. Quanto tempo nossa aplicação fica disponível por mês?
4. Existem mecanismos de feedback para avaliar a usabilidade?

## Elaboração de métricas confiáveis e práticas

Com base nos objetivos e perguntas propostos, foram elaboradas as métricas confiáveis e práticas, utilizando diferentes tipos de escalas. Estas métricas ajudarão a monitorar e garantir a qualidade da solução para o cliente, seguindo os critérios de validade, confiabilidade e praticidade.

### Objetivo 1: Bugs Críticos

**Métrica 1: Número de Bugs Críticos por Versão**
- **Escala**: Ratio
- **Definição**: Contagem do número de bugs críticos identificados antes da subida de cada versão.
- **Praticidade**: Fácil de calcular através de ferramentas de rastreamento de bugs e fácil de interpretar para tomada de decisão.

### Objetivo 2: Cobertura de Testes

**Métrica 2: Percentual de Cobertura de Testes para Funcionalidades Críticas**
- **Escala**: Ratio
- **Definição**: Percentual do código das funcionalidades críticas coberto por testes automatizados.
- **Praticidade**: Pode ser calculado automaticamente por ferramentas de cobertura de testes, fornecendo um indicador claro da qualidade do teste.

### Objetivo 3: Criticidade dos Bugs

**Métrica 3: Tempo Médio para Correção de Bugs Críticos**
- **Escala**: Intervalar
- **Definição**: Tempo médio desde a identificação até a correção de bugs críticos.
- **Praticidade**: Útil para medir a eficiência da equipe de desenvolvimento e do processo de gestão de bugs.

### Objetivo 4: Taxas de Abertura de E-mail

**Métrica 4: Taxa de Abertura de E-mails de Pesquisas**
- **Escala**: Ratio
- **Definição**: Percentual de e-mails de pesquisas enviados que são abertos pelos destinatários.
- **Praticidade**: Facilmente calculável por plataformas de envio de e-mail e crítico para avaliar a eficácia da comunicação.

### Objetivo 5: Taxa de Resposta das Pesquisas

**Métrica 5: Taxa de Resposta de Pesquisas**
- **Escala**: Ratio
- **Definição**: Percentual de destinatários que respondem às pesquisas após a abertura do e-mail.
- **Praticidade**: Indica o engajamento dos usuários e a relevância das pesquisas para eles.

### Objetivo 6: Identificação de Erros em Planilhas

**Métrica 6: Tempo Médio de Identificação de Erros em Planilhas**
- **Escala**: Intervalar
- **Definição**: Tempo médio desde o envio até a identificação de erros em planilhas de distribuição.
- **Praticidade**: Auxilia na avaliação da eficácia dos processos de verificação e validação de dados.

### Objetivo 7: Satisfação do Cliente

**Métrica 7: Índice de Satisfação do Cliente**
- **Escala**: Ordinal (ex: muito insatisfeito, insatisfeito, neutro, satisfeito, muito satisfeito)
- **Definição**: Avaliação agregada da satisfação do cliente com base em pesquisas regulares.
- **Praticidade**: Permite entender a percepção do usuário sobre a estabilidade e facilidade de uso do software.
