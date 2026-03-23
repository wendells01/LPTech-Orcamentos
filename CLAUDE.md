# CLAUDE.md

## Project Context

Este projeto é um sistema de gestão de orçamentos para uma empresa brasileira (LP Tecnologia).

Objetivo:
- substituir sistema atual usado no dia a dia
- foco em produtividade real
- interface rápida, simples e confiável

Stack:
- React + Vite
- Firebase (Auth + Firestore)
- Vercel (deploy)

---

## Core Principles

- Priorizar funcionalidade real sobre aparência
- Evitar over-engineering
- Código simples > código “inteligente”
- Sempre pensar em uso real (não demo)
- Tudo deve ser editável e persistente

---

## Language Rules

- Responder em português
- Todo código deve estar em inglês
- Variáveis, funções e estrutura em inglês
- Evitar nomes genéricos (use nomes descritivos)

---

## Architecture Rules

- Trabalhar sempre em etapas
- Nunca misturar responsabilidades
- Sempre explicar antes de implementar

Workflow obrigatório:

1. Architect
2. Database
3. Frontend
4. QA

Nunca pular etapas.

---

## Data Model (Firebase)

Collections:

### clients
- name
- phone
- email
- address
- createdAt

### quotes
- clientId
- status (negotiation | approved | execution | finished | lost)
- description
- discount
- total
- createdAt
- updatedAt

### quoteItems
(subcollection dentro de quotes)

- type (service | material)
- name
- quantity
- unitPrice
- total

---

## Functional Requirements

O sistema deve permitir:

- login admin
- criação de orçamento
- edição de orçamento
- exclusão
- mudança de status
- cálculo automático de totais
- separação entre serviços e materiais
- seleção/criação de cliente

Nunca usar dados mock quando deveria ser persistido no Firebase.

---

## UI / UX Guidelines

- Design limpo e profissional
- Estilo premium (sem exageros)
- Evitar glow forte e cores neon
- Priorizar legibilidade e espaçamento
- Interface estilo dashboard moderno

---

## Code Rules

- Componentes pequenos e reutilizáveis
- Evitar duplicação de lógica
- Separar UI de lógica sempre que possível
- Não criar abstrações desnecessárias
- Não adicionar dependências sem necessidade clara

---

## Development Behavior

Sempre:

- analisar antes de codar
- explicar decisões
- implementar incrementalmente
- validar cada etapa

Nunca:

- gerar código gigante de uma vez
- mudar coisas que não foram pedidas
- reinventar estrutura sem motivo

---

## QA Rules

Antes de finalizar qualquer tarefa:

- verificar fluxo completo
- checar edge cases
- validar cálculos
- garantir consistência dos dados

---

## Deployment

- Deploy automático via Vercel
- Toda mudança deve ser commitada no GitHub
- Código deve sempre buildar sem erros

---

## Goal

Criar um sistema de orçamentos REAL, utilizável no dia a dia da empresa, com foco em:

- velocidade
- simplicidade
- confiabilidade
- escalabilidade futura
