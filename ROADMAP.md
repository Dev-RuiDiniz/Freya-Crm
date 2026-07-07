# ROADMAP.md — Roadmap de Desenvolvimento

**Projeto:** Freya CRM  
**Atualizado em:** 07/07/2026  
**Metodologia:** Specification-Driven Development (SDD) + Test-Driven Development (TDD)

---

## 1. Visão Geral do Roadmap

O Freya CRM será evoluído em fases, da governança inicial até a operação em produção. Cada fase contém épicos, histórias e tarefas que seguem os fluxos de SDD (especificação antes do código) e TDD (teste antes da implementação).

O roadmap é dividido em 7 fases:
- **Fase 0** — Diagnóstico e Governança
- **Fase 1** — Base Técnica e Ambiente (Sprint 0)
- **Fase 2** — Funcionalidades Core (Sprints 1-3)
- **Fase 3** — Integrações (Sprint 4)
- **Fase 4** — Segurança, Performance e Qualidade
- **Fase 5** — Deploy, Observabilidade e Operação (Sprint 5)
- **Fase 6** — Evolução Contínua

---

## 2. Convenções de Status

- `PENDENTE`
- `EM ESPECIFICAÇÃO`
- `ESPECIFICADO`
- `EM TESTE`
- `EM DESENVOLVIMENTO`
- `EM REVISÃO`
- `CONCLUÍDO`
- `BLOQUEADO`
- `CANCELADO`

---

## 3. Fases do Projeto

### Fase 0 — Diagnóstico e Governança

**Objetivo:** entender o projeto, documentar arquitetura, banco e escopo.

**Status:** CONCLUÍDO

Épicos:
- EP-0001 — Criar governança do repositório (`AGENTS.md`) — CONCLUÍDO
- EP-0002 — Mapear arquitetura (`ARQUITETURA.md`) — CONCLUÍDO
- EP-0003 — Mapear banco de dados (`BANCO_DADOS.md`) — CONCLUÍDO
- EP-0004 — Definir escopo inicial (`ESCOPO.md`) — CONCLUÍDO
- EP-0005 — Definir estratégia de testes (`ROADMAP.md`) — CONCLUÍDO
- EP-0006 — Criar contexto vivo do projeto (`CONTEXTO.md`) — CONCLUÍDO
- EP-0007 — Criar relatório diário (`RELATORIO.md`) — CONCLUÍDO

Critérios de aceite:
- [x] `AGENTS.md` criado.
- [x] `ARQUITETURA.md` criado.
- [x] `BANCO_DADOS.md` criado.
- [x] `ESCOPO.md` criado.
- [x] `ROADMAP.md` criado.
- [x] `CONTEXTO.md` criado.
- [x] `RELATORIO.md` criado.

---

### Fase 1 — Base Técnica e Ambiente (Sprint 0)

**Objetivo:** garantir que o projeto rode localmente, tenha testes e documentação mínima.

**Status:** EM DESENVOLVIMENTO

Tarefas:
- [x] Inicializar projeto Next.js com TypeScript
- [ ] Configurar Prisma com PostgreSQL/Supabase
- [ ] Configurar Supabase Auth
- [ ] Configurar Vitest e Playwright
- [x] Criar `package.json` com scripts (dev, lint, test, test:e2e, build)
- [x] Validar variáveis de ambiente (`.env.example`)
- [ ] Criar schema Prisma inicial com entidades CRM
- [ ] Criar migration inicial
- [ ] Criar seed de pipeline padrão e motivos de perda
- [ ] Criar permissões CRM (RBAC com 5 perfis)
- [ ] Criar menu CRM vazio
- [ ] Configurar layout protegido para rotas `/crm`
- [x] Validar build, lint e testes
- [ ] Documentar comandos no `ARQUITETURA.md`

Critérios de aceite:
- [x] `npm install` funciona.
- [x] `npm run dev` sobe o servidor.
- [x] `npm run build` passa.
- [x] `npm run lint` passa.
- [ ] `npm run test` passa (mesmo que vazio).
- [ ] Schema Prisma criado com entidades CRM.
- [ ] Migration inicial aplicada.
- [ ] Seed de pipeline executado.
- [ ] Menu CRM aparece somente para perfis autorizados.
- [x] `.env.example` criado sem secrets.
- [x] Nenhuma credencial exposta.

---

### Fase 2 — Funcionalidades Core (Sprints 1-3)

#### Sprint 1 — Leads, Empresas e Contatos

**Objetivo:** Criar base cadastral comercial.

**Status:** PENDENTE

#### História: Gestão de Leads

- **Como:** Vendedor
- **Quero:** cadastrar e acompanhar leads
- **Para:** organizar o pipeline comercial desde o primeiro contato
- **Status:** PENDENTE

##### SDD
- Especificação: CRUD de leads com campos do escopo (nome, email, telefone, origem, status, temperatura, responsável, consentimento LGPD).
- Critérios de aceite: Lead pode ser criado, editado, listado e arquivado. Duplicidade básica alertada. Permissões respeitadas.
- Impacto técnico: Schema Prisma (`CrmLead`), Server Actions (`crm-leads.ts`), schemas Zod, componentes React, testes.

##### TDD
- Teste RED: Teste de criação de lead com campos obrigatórios. Teste de detecção de duplicidade. Teste de permissão por perfil.
- Implementação GREEN: Implementar Server Action de criação com validação Zod e Prisma.
- Refatoração: Extrair normalização de email/telefone para utilitário.
- Teste de regressão: Lead convertido não é excluído fisicamente.

##### Tarefas
- [ ] Criar model `CrmLead` no schema Prisma
- [ ] Criar migration
- [ ] Criar schema Zod para leads
- [ ] Criar Server Actions de CRUD
- [ ] Criar página de listagem com filtros e busca
- [ ] Criar formulário de criação/edição
- [ ] Criar página de detalhe do lead
- [ ] Implementar detecção de duplicidade
- [ ] Implementar desqualificação com motivo
- [ ] Implementar soft delete
- [ ] Criar testes unitários
- [ ] Criar teste E2E de fluxo de lead

#### História: Gestão de Empresas

- **Como:** Gestor comercial / Vendedor
- **Quero:** cadastrar empresas/prospects
- **Para:** organizar contas comerciais
- **Status:** PENDENTE

##### SDD
- Especificação: CRUD de empresas com campos do escopo. Documento único.
- Critérios de aceite: Empresa criada, editada, listada. Documento único validado. Vínculo com contatos e oportunidades.
- Impacto técnico: Schema Prisma (`CrmCompany`), Server Actions (`crm-companies.ts`).

##### TDD
- Teste RED: Teste de documento único. Teste de CRUD.
- Implementação GREEN: Server Actions com validação.
- Refatoração: Extrair validação de documento.
- Teste de regressão: Empresa com oportunidades não é excluída fisicamente.

##### Tarefas
- [ ] Criar model `CrmCompany` no schema Prisma
- [ ] Criar migration
- [ ] Criar schema Zod
- [ ] Criar Server Actions de CRUD
- [ ] Criar página de listagem
- [ ] Criar formulário
- [ ] Criar página de detalhe com abas (contatos, oportunidades, atividades)
- [ ] Implementar validação de documento único
- [ ] Implementar soft delete
- [ ] Criar testes unitários

#### História: Gestão de Contatos

- **Como:** Vendedor
- **Quero:** cadastrar contatos vinculados a empresas
- **Para:** ter pessoas de referência nas negociações
- **Status:** PENDENTE

##### Tarefas
- [ ] Criar model `CrmContact` no schema Prisma
- [ ] Criar migration
- [ ] Criar schema Zod
- [ ] Criar Server Actions de CRUD
- [ ] Criar página de listagem
- [ ] Criar formulário
- [ ] Implementar normalização de email/telefone
- [ ] Implementar consentimento e opt-out
- [ ] Criar testes unitários

---

#### Sprint 2 — Funil e Oportunidades

**Objetivo:** Criar gestão de pipeline comercial.

**Status:** PENDENTE

#### História: Funil de Vendas (Kanban)

- **Como:** Gestor comercial / Vendedor
- **Quero:** visualizar oportunidades em um Kanban por etapa
- **Para:** ter visão clara do pipeline e mover negociações
- **Status:** PENDENTE

##### Tarefas
- [ ] Criar models `CrmPipeline` e `CrmPipelineStage`
- [ ] Criar migration
- [ ] Criar seed de pipeline padrão (7 etapas)
- [ ] Criar componente Kanban com drag-and-drop
- [ ] Implementar mudança de etapa via drag-and-drop
- [ ] Implementar valor previsto por etapa
- [ ] Implementar alertas de oportunidade parada
- [ ] Criar testes unitários
- [ ] Criar teste E2E de movimentação no funil

#### História: Gestão de Oportunidades

- **Como:** Vendedor
- **Quero:** criar e gerenciar oportunidades
- **Para:** controlar negociações com valor e etapa
- **Status:** PENDENTE

##### Tarefas
- [ ] Criar model `CrmOpportunity` no schema Prisma
- [ ] Criar model `CrmOpportunityStageHistory`
- [ ] Criar migration
- [ ] Criar schema Zod
- [ ] Criar Server Actions de CRUD
- [ ] Implementar movimentação de etapa com histórico
- [ ] Implementar marcar como ganha
- [ ] Implementar marcar como perdida com motivo obrigatório
- [ ] Criar model `CrmLossReason` e seed
- [ ] Criar página de listagem tabular
- [ ] Criar formulário de criação/edição
- [ ] Criar página de detalhe com histórico de etapas
- [ ] Criar testes unitários
- [ ] Criar testes E2E

---

#### Sprint 3 — Atividades e Follow-ups

**Objetivo:** Controlar rotina comercial.

**Status:** PENDENTE

#### História: Atividades Comerciais

- **Como:** Vendedor
- **Quero:** registrar e controlar atividades e follow-ups
- **Para:** não perder o ritmo de relacionamento com leads e oportunidades
- **Status:** PENDENTE

##### Tarefas
- [ ] Criar model `CrmActivity` no schema Prisma
- [ ] Criar migration
- [ ] Criar schema Zod
- [ ] Criar Server Actions de CRUD
- [ ] Implementar vínculo com lead/empresa/contato/oportunidade
- [ ] Implementar conclusão de atividade
- [ ] Implementar criação de próxima atividade
- [ ] Implementar listagem de atividades vencidas
- [ ] Criar página de agenda/lista
- [ ] Criar formulário de atividade
- [ ] Criar testes unitários
- [ ] Criar testes E2E

---

### Fase 3 — Integrações (Sprint 4)

**Objetivo:** Implementar propostas e conversão para Tyr ERP.

**Status:** PENDENTE

#### Sprint 4 — Propostas e Conversão para Tyr

#### História: Propostas Comerciais

- **Como:** Vendedor
- **Quero:** registrar propostas vinculadas a oportunidades
- **Para:** controlar o que foi enviado e seu status
- **Status:** PENDENTE

##### Tarefas
- [ ] Criar model `CrmProposal` no schema Prisma
- [ ] Criar migration
- [ ] Criar schema Zod
- [ ] Criar Server Actions de CRUD
- [ ] Implementar vínculo com oportunidade
- [ ] Implementar status de proposta
- [ ] Implementar anexo/link de documento
- [ ] Criar página de listagem
- [ ] Criar formulário
- [ ] Criar testes unitários

#### História: Conversão para Tyr ERP

- **Como:** Gestor comercial / Vendedor autorizado
- **Quero:** converter oportunidade ganha em cliente/projeto no Tyr
- **Para:** iniciar a operação do projeto contratado
- **Status:** PENDENTE

##### Tarefas
- [ ] Criar model `CrmIntegrationLink` no schema Prisma
- [ ] Criar migration
- [ ] Criar Server Action `crm-conversion.ts`
- [ ] Implementar checklist de conversão
- [ ] Implementar criar/vincular cliente no Tyr (dedup por documento/email)
- [ ] Implementar criar projeto no Tyr
- [ ] Implementar registro financeiro inicial no Tyr
- [ ] Implementar vínculo entre oportunidade e entidade Tyr
- [ ] Implementar auditoria da conversão
- [ ] Implementar tratamento de erro e rollback
- [ ] Criar testes unitários
- [ ] Criar testes E2E de fluxo de conversão

---

### Fase 4 — Segurança, Performance e Qualidade

**Objetivo:** Endurecer o sistema para uso real.

**Status:** PENDENTE

Tarefas:
- [ ] Revisar RBAC em todas as Server Actions
- [ ] Testes de autorização por perfil
- [ ] Revisar logs para garantir ausência de dados sensíveis
- [ ] Validar política LGPD (consentimento, opt-out, retenção)
- [ ] Revisar índices e performance de queries
- [ ] Validar paginação em todas as listagens
- [ ] Revisar validação de entrada (frontend e backend)
- [ ] Remover/rotacionar credenciais expostas (se aplicável)
- [ ] Configurar rate limit em endpoints públicos futuros
- [ ] Sanitização de uploads/links de propostas
- [ ] Auditoria completa de ações críticas
- [ ] Testes E2E de todos os fluxos principais

---

### Fase 5 — Deploy, Observabilidade e Operação (Sprint 5)

**Objetivo:** Preparar o sistema para ambiente de produção.

**Status:** PENDENTE

#### Sprint 5 — Dashboard e Relatórios

#### História: Dashboard Comercial

- **Como:** Gestor comercial / Admin
- **Quero:** ver KPIs e gráficos comerciais
- **Para:** ter visão gerencial do pipeline
- **Status:** PENDENTE

##### Tarefas
- [ ] Criar componentes de KPI cards
- [ ] Criar gráfico de leads por origem (Recharts)
- [ ] Criar gráfico de oportunidades por etapa
- [ ] Criar valor previsto por etapa
- [ ] Criar lista de follow-ups vencidos
- [ ] Criar lista de oportunidades paradas
- [ ] Criar ranking simples por responsável
- [ ] Criar forecast comercial
- [ ] Implementar filtros por período
- [ ] Criar relatório básico filtrável
- [ ] Validar permissões de acesso a relatórios
- [ ] Criar testes unitários
- [ ] Criar testes E2E

Tarefas de deploy:
- [ ] Configurar deploy na Vercel
- [ ] Configurar variáveis de ambiente em produção
- [ ] Configurar Supabase em produção
- [ ] Aplicar migrations em produção (`prisma migrate deploy`)
- [ ] Executar seeds em produção
- [ ] Configurar observabilidade (PENDENTE DE DEFINIÇÃO)
- [ ] Configurar backup do banco
- [ ] Validar build de produção

---

### Fase 6 — Evolução Contínua

**Objetivo:** Planejar melhorias futuras.

**Status:** PENDENTE

Backlog futuro:
- [ ] Importação CSV de leads
- [ ] Integração com formulário do site
- [ ] Integração com WhatsApp Business
- [ ] Integração com email/SMTP
- [ ] Agenda/calendário
- [ ] Templates de proposta
- [ ] Geração de PDF de propostas
- [ ] Assinatura eletrônica
- [ ] Automação de follow-up
- [ ] Pontuação de lead (lead scoring)
- [ ] SLA comercial
- [ ] Metas por vendedor
- [ ] Forecast ponderado
- [ ] Integração com campanhas
- [ ] Webhooks
- [ ] API pública controlada
- [ ] Portal do cliente conectado ao pós-venda
- [ ] Customer Success / Pós-venda completo
- [ ] Extração do Freya para repositório próprio (se aplicável)
- [ ] Integração com Google Calendar
- [ ] Integração com Google Meet
- [ ] Emissão de contrato
- [ ] Gateway de pagamento

---

## 4. Backlog Geral

| ID | Tipo | Descrição | Prioridade | Status |
|---|---|---|---|---|
| EP-0001 | Épico | Criar governança do repositório | Alta | CONCLUÍDO |
| EP-0002 | Épico | Mapear arquitetura | Alta | CONCLUÍDO |
| EP-0003 | Épico | Mapear banco de dados | Alta | CONCLUÍDO |
| EP-0004 | Épico | Definir escopo inicial | Alta | CONCLUÍDO |
| EP-0005 | Épico | Definir estratégia de testes | Alta | CONCLUÍDO |
| EP-0006 | Épico | Criar contexto vivo do projeto | Alta | CONCLUÍDO |
| EP-0007 | Épico | Criar relatório diário | Alta | CONCLUÍDO |
| EP-0008 | Épico | Base técnica e ambiente (Sprint 0) | Alta | EM DESENVOLVIMENTO |
| EP-0009 | Épico | Leads, empresas e contatos (Sprint 1) | Alta | PENDENTE |
| EP-0010 | Épico | Funil e oportunidades (Sprint 2) | Alta | PENDENTE |
| EP-0011 | Épico | Atividades e follow-ups (Sprint 3) | Alta | PENDENTE |
| EP-0012 | Épico | Propostas e conversão para Tyr (Sprint 4) | Alta | PENDENTE |
| EP-0013 | Épico | Dashboard e relatórios (Sprint 5) | Média | PENDENTE |
| EP-0014 | Épico | Segurança, performance e qualidade | Média | PENDENTE |
| EP-0015 | Épico | Deploy e operação | Média | PENDENTE |
| EP-0016 | Épico | Evolução contínua | Baixa | PENDENTE |
| DT-0001 | Débito técnico | Inicializar projeto Next.js | Alta | CONCLUÍDO |
| DT-0002 | Débito técnico | Configurar Vitest e Playwright | Alta | PENDENTE |
| DT-0003 | Débito técnico | Remover credenciais expostas do Tyr | Alta | PENDENTE |
| DT-0004 | Débito técnico | Definir política de retenção LGPD | Alta | PENDENTE |
| DT-0005 | Débito técnico | Configurar CI/CD | Média | PENDENTE |
| DT-0006 | Débito técnico | Configurar observabilidade | Média | PENDENTE |
| DT-0007 | Débito técnico | Definir estratégia de backup | Alta | PENDENTE |

---

## 5. Matriz SDD/TDD por Tarefa

| ID | Tarefa | Spec criada | Teste criado | Implementado | Documentado |
|---|---|---|---|---|---|
| EP-0001 | Governança (AGENTS.md) | Sim | N/A | N/A | Sim |
| EP-0002 | Arquitetura (ARQUITETURA.md) | Sim | N/A | N/A | Sim |
| EP-0003 | Banco (BANCO_DADOS.md) | Sim | N/A | N/A | Sim |
| EP-0004 | Escopo (ESCOPO.md) | Sim | N/A | N/A | Sim |
| EP-0005 | Roadmap (ROADMAP.md) | Sim | N/A | N/A | Sim |
| EP-0008 | Base técnica (Sprint 0) | Sim | Não | Parcial | Sim |
| EP-0009 | Leads/empresas/contatos | Não | Não | Não | Não |
| EP-0010 | Funil/oportunidades | Não | Não | Não | Não |
| EP-0011 | Atividades | Não | Não | Não | Não |
| EP-0012 | Propostas/conversão | Não | Não | Não | Não |
| EP-0013 | Dashboard/relatórios | Não | Não | Não | Não |

---

## 6. Definição de Pronto

Uma tarefa só é considerada pronta quando:

- [ ] Requisito documentado.
- [ ] Critérios de aceite definidos.
- [ ] Teste criado ou justificativa registrada.
- [ ] Implementação concluída.
- [ ] Testes passando.
- [ ] Documentação atualizada.
- [ ] `CONTEXTO.md` atualizado.
- [ ] `RELATORIO.md` atualizado.
