# Extreme Programming (XP) — Guia para Concursos FGV

> **Incidência:** MÉDIA geral | **Práticas** = ALTÍSSIMA
> **Criador:** Kent Beck | **Tipo:** Metodologia Ágil

---

## MAPA DE PRIORIDADE

| Assunto | Frequência | Ação |
|---|---|---|
| **Práticas do XP** | ⭐⭐⭐⭐⭐ | DECORAR |
| Conceitos Básicos | ⭐⭐⭐ | SABER |
| Processo do XP | ⭐⭐⭐ | SABER |
| Princípios / Valores / XP x Scrum | ⭐ | Ignorar se sem tempo |

---

## O QUE É XP

```
XP = Kent Beck + Qualidade Técnica + Programação em Pares + Test-First
```

- **Metodologia** ágil (não é framework como Scrum)
- Leva boas práticas ao **"extremo"**
- Foca **qualidade do código**, não gestão do trabalho
- Scrum = "como organizar". XP = "como desenvolver com qualidade"
- Requisitos = **Histórias de Usuário** (User Stories)

**FRASE COBRADA:** "Se testar é importante, devemos testar **continuamente**."

---

# ⭐⭐⭐⭐⭐ PRÁTICAS DO XP

São **13 práticas**. A FGV cobra qual prática faz o quê.

| Prática | O que é |
|---|---|
| **Planejamento Incremental** | Requisitos como histórias de usuário priorizadas |
| **Pequenos Releases** | Menor conjunto de valor primeiro, entregas frequentes |
| **Projeto Simples** | Soluções simples, sem complexidade desnecessária (YAGNI) |
| **Desenvolvimento Test-First** | Testes escritos **ANTES** do código |
| **Refactoring** | Melhorar código sem mudar comportamento externo |
| **Programação em Pares** | 2 devs no **mesmo** computador |
| **Propriedade Coletiva** | Qualquer dev pode modificar qualquer código |
| **Integração Contínua** | Código integrado + testes executados sempre |
| **Ritmo Sustentável** | Sem horas extras excessivas |
| **Metáforas** | Comunicar sistema de forma simples ao cliente |
| **Cliente On-Site** | Cliente presente junto à equipe |
| **Reuniões em Pé** | Encontros curtos e objetivos |
| **Time Coeso** | Equipes pequenas e multidisciplinares |

---

## Programação em Pares — Mais cobrada

```
Dev A (codifica) + Dev B (revisa) = MESMO computador
```

- Um implementa, outro revisa **em tempo real**
- Deve haver **rodízio** de duplas (não são fixas!)
- Elimina "ilhas de conhecimento"
- Objetivo: qualidade + compartilhamento

**PEGADINHA:** Devs em computadores separados revisando ao final do dia = **ERRADO**

---

## Desenvolvimento Test-First (TDD) — Muito cobrada

```
Teste ANTES → Código DEPOIS → Refatora
```

- Testes unitários automatizados escritos **antes** da implementação
- Define comportamento esperado primeiro
- É diferente de "Test-Fast" — é Test-**First**

**PEGADINHA:** "Testes escritos depois da codificação" = **ERRADO**

---

## Refactoring — Cuidado com confusão

- Melhora estrutura interna do código
- **NÃO altera** comportamento externo
- É **contínua** — pode refatorar código já testado
- **NÃO é** integração contínua (são práticas diferentes!)

**PEGADINHA:** "Refatoramento é integrar código várias vezes" = **ERRADO** (isso é Integração Contínua)

---

## Histórias de Usuário — 3 Cs

| Componente | Significado |
|---|---|
| **Cartão (Card)** | Onde a história é escrita (físico/digital) |
| **Conversação (Conversation)** | Diálogo contínuo entre devs e clientes |
| **Confirmação (Confirmation)** | Critérios de aceitação |

- Equivalência: **1 história = 1 ou mais cenários** de Caso de Uso
- Devem caber em **uma iteração**
- Descrevem funcionalidades sob perspectiva do **usuário**

---

# ⭐⭐⭐ PROCESSO DO XP — 4 Etapas

| Etapa | O que faz |
|---|---|
| **Planejamento** | Histórias de usuário, prioridades, iterações |
| **Projeto** | Soluções simples, arquitetura enxuta |
| **Codificação** | Programação em pares, integração contínua |
| **Teste** | Test-First, testes contínuos |

**NÃO inclui:** Documentação como etapa central (apenas como atividade complementar)

**BIZU:** Essas 4 etapas estão subordinadas aos princípios e valores do Manifesto Ágil.

---

# ⭐⭐ PRÁTICAS COMPLEMENTARES

| Prática | Descrição |
|---|---|
| **Spike Solution** | Protótipo descartável para investigar solução técnica |
| **Incremental Design** | Adiar decisões de design até serem necessárias |
| **15-Minute Build** | Compilar + testes em menos de 15 minutos |
| **Slack** | Folga no planejamento para imprevistos |

---

# ⭐ VALORES DO XP

| Valor | Significado |
|---|---|
| **Comunicação** | Conversas frequentes, feedback rápido |
| **Simplicidade** | Soluções simples, sem superengenharia |
| **Feedback** | Retorno contínuo do cliente e dos testes |
| **Coragem** | Enfrentar mudanças, refatorar, admitir erros |
| **Respeito** | Colaboração e confiança mútua |

Mnemônico: **CSFRC** = Comunicação, Simplicidade, Feedback, Respeito, Coragem

---

# ⭐ PRINCÍPIOS DO XP

| Princípio | Significado |
|---|---|
| **Feedback Rápido** | Retorno imediato do cliente e testes |
| **Abraçar Mudanças** | Requisitos mudam, aceitar isso |
| **Presumir Simplicidade** | YAGNI: não implemente o que não precisa |
| **Mudanças Incrementais** | Evolução gradual, não mudanças massivas |
| **Trabalho de Qualidade** | Qualidade não é sacrificada por velocidade |

---

# XP vs SCRUM

| Aspecto | Scrum | XP |
|---|---|---|
| **Tipo** | Framework | Metodologia |
| **Foco** | Gestão do trabalho | Qualidade técnica |
| **Papéis** | PO, SM, Devs | Não enfatiza papéis fixos |
| **Práticas técnicas** | Não define | Define (pares, TDD, refatoração) |
| **Testes** | Valoriza, não detalha | Test-First como centro |
| **Cliente** | Representado pelo PO | **Presente** (On-Site) |
| **Juntos** | Complementam-se muito | Scrum gestão + XP técnica |

---

# PEGADINHAS CLÁSSICAS DA FGV

| Pegadinha | Verdade |
|---|---|
| ❌ XP dispensa testes | XP coloca testes **no centro** |
| ❌ Programação em pares = computadores separados | É o **mesmo** computador |
| ❌ Refactoring = integração contínua | São práticas **diferentes** |
| ❌ Testes vêm depois do código | Vem **antes** (Test-First) |
| ❌ XP é framework | XP é **metodologia** |
| ❌ Releases grandes | XP faz releases **pequenos** |
| ❌ Equipes grandes e hierarquia | XP usa equipes **pequenas e coesas** |
| ❌ Código pronto não pode ser mudado | Pode ser **refatorado** continuamente |
| ❌ Reuniões longas | XP usa reuniões **em pé** (curtas) |
| ❌ Cliente não participa | Cliente deve estar **presente** (On-Site) |

---

# QUESTÕES COMENTADAS

### Q1 (FGV/CVM-2024) — Programação em pares
> "Prática do XP com rodízio de colaboradores:"
- **Gabarito: programação em pares com rodízio (B)**

### Q2 (FGV/CVM-2024) — Test-First
> "Testes antes da implementação do código:"
- **Gabarito: desenvolvimento de test-first (C)**

### Q3 (FGV/INPE-2024) — XP = requisitos incrementais
> "Requisitos conduzidos pela equipe, incrementais:"
- **Gabarito: XP (E)**

### Q4 (FGV/INPE-2024) — Programação em pares + refatoração
> "Metodologia com programadores em pares e refatoração:"
- **Gabarito: Extreme Programming (C)**

### Q5 (FGV/TRF1-2024) — User Story = cenários
> "Uma história pode ser um ou mais cenários:"
- **Gabarito: D**

### Q6 (FGV/TJ SE-2023) — Programação em duplas
> "XP utiliza programação em:"
- **Gabarito: duplas (D)**

### Q7 (FGV/Sefaz AM-2022) — Prática de qualidade
> "Programar em par para assegurar revisão:"
- **Gabarito: D**

### Q8 (CESGRANRIO/CEF-2024) — 3 Cs
> "Três componentes de uma História do Usuário:"
- **Gabarito: Cartão, Conversação, Confirmação (A)**

### Q9 (FCC/PGE AM-2022) — Incremental Design
> "Prática XP para reduzir custo de alterações:"
- **Gabarito: Incremental Design (B)**

### Q10 (FUNDATEC/GHC-2023) — Atividades do XP
> "XP envolve práticas, EXCETO:"
- **Gabarito: Documentação (D)**

### Q11 (FUNDATEC/IPE Saúde-2022) — Lacunas
> "Histórias de usuários, refatoração, pares, testes:"
- **Gabarito: C**

---

# FÓRMULA PARA GABARITO

```
"programação em pares" + "refatoração"          → XP
"testes antes do código"                         → XP (Test-First)
"histórias de usuário"                           → XP
"cliente presente" + "equipe pequena"            → XP
"integração contínua" + "qualidade técnica"      → XP
"melhorar código sem mudar comportamento"        → Refactoring
"2 devs no mesmo computador"                     → Programação em Pares
"testes escritos antes da implementação"         → Test-First
"Cartão, Conversação, Confirmação"               → 3 Cs (User Stories)
"1 história = 1+ cenários de Caso de Uso"        → User Stories
"gestão + sprints + papéis formais"              → Scrum
"qualidade técnica + práticas de código"         → XP
```
