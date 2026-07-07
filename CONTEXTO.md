# CONTEXTO.md — Contexto Vivo do Projeto

**Projeto:** Freya CRM  
**Atualizado em:** 07/07/2026  
**Responsável pela atualização:** Agente IA / Desenvolvedor

---

## 1. Resumo Executivo

O Freya CRM é um sistema comercial e de relacionamento com clientes, separado do Tyr ERP (sistema operacional). O projeto foi migrado para monorepo Turborepo com apps/web (Next.js), packages/ui (componentes shadcn/ui) e packages/lib (regras de negócio CRM). A estrutura de pastas do CRM foi criada e a página placeholder está funcionando. Build e lint passando com turbo. Prisma, Supabase Auth, RBAC, testes e funcionalidades CRM ainda não foram implementados. O principal objetivo técnico atual é configurar Prisma + Supabase Auth + RBAC (restante da Sprint 0). Os principais riscos são: integração com Tyr ERP não implementada, credenciais em documentação do Tyr (risco herdado), e ausência de política LGPD definida.

---

## 2. Estado Atual do Projeto

| Área | Status | Observações |
|---|---|---|
| Backend | EM DESENVOLVIMENTO | Next.js em monorepo Turborepo; Server Actions e Prisma pendentes |
| Frontend | EM DESENVOLVIMENTO | Next.js + Tailwind + shadcn/ui em apps/web; packages/ui com Button e cn; páginas pendentes |
| Banco de dados | PENDENTE | Sem schema; planejado: PostgreSQL/Supabase + Prisma |
| Testes | PENDENTE | Sem configuração; planejado: Vitest + Playwright |
| Infraestrutura | PENDENTE | Sem Docker, CI/CD ou observabilidade; deploy planejado: Vercel |
| Documentação | ATUALIZADA | Governança completa + documentação de inicialização |
| Segurança | PENDENTE | Credenciais em docs do Tyr a remover; LGPD a definir |
| Integração Tyr | PENDENTE | Sem implementação; planejada para Sprint 4 |

---

## 3. Histórico de Desenvolvimento

### 07/07/2026 — Migração para Monorepo Turborepo

- **O que foi analisado:** Projeto Next.js inicializado na raiz do repositório; necessidade de estrutura monorepo para separar UI e regras de negócio.
- **O que foi decidido:** Migrar para Turborepo com apps/web (Next.js), packages/ui (componentes shadcn/ui) e packages/lib (regras de negócio CRM).
- **O que foi criado:**
  - `package.json` raiz com workspaces e turbo
  - `turbo.json` com tasks dev, build, lint, test
  - `apps/web/` — app Next.js movida da raiz
  - `apps/web/package.json` (@freya-crm/web)
  - `apps/web/tsconfig.json` com paths @repo/ui e @repo/lib
  - `packages/ui/` — @repo/ui com Button, cn() e index.ts
  - `packages/lib/` — @repo/lib com index.ts placeholder
  - `packages/ui/eslint.config.mjs` e `packages/lib/eslint.config.mjs`
- **O que foi alterado:** README.md, ESCOPO.md, ROADMAP.md, CONTEXTO.md, .gitignore
- **O que ficou pendente:**
  - Configurar Prisma + schema CRM
  - Configurar Supabase Auth
  - Configurar RBAC
  - Configurar Vitest e Playwright
- **Evidências:** `turbo.json`, `apps/web/`, `packages/ui/`, `packages/lib/`, build e lint passando com turbo.

---

### 07/07/2026 — Inicialização do Projeto Next.js

- **O que foi analisado:** Repositório com governança criada; decisão de projeto independente no mesmo Supabase do Tyr.
- **O que foi decidido:** Inicializar Next.js com TypeScript, Tailwind CSS, shadcn/ui; criar estrutura de pastas do CRM; página placeholder.
- **O que foi criado:**
  - `package.json` (Next.js 16.2.10, React 19.2.4, TypeScript, Tailwind v4)
  - `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`
  - `components.json` (shadcn/ui configurado)
  - `src/components/ui/button.tsx` (componente shadcn/ui)
  - `src/lib/utils.ts` (função `cn`)
  - `src/app/(protected)/crm/page.tsx` (página placeholder do CRM)
  - `src/app/page.tsx` (redirect para `/crm`)
  - `.env.example` (placeholders Supabase + Prisma)
  - `.gitignore` atualizado (permite `.env.example`)
  - Estrutura de pastas: `src/app/(auth)`, `src/app/(protected)/crm/*`, `src/app/actions`, `src/components/crm/*`, `src/lib/crm`
  - `README.md` atualizado com stack, comandos e estrutura
- **O que foi alterado:** `src/app/layout.tsx` (metadata e lang pt-BR), `src/app/page.tsx` (redirect), `README.md`, `.gitignore`
- **O que ficou pendente:**
  - Configurar Prisma + schema CRM + migration + seed
  - Configurar Supabase Auth
  - Configurar RBAC com 2 perfis (ADMIN, VENDEDOR)
  - Configurar Vitest e Playwright
  - Implementar funcionalidades do MVP (Sprints 1-5)
- **Evidências no repositório:** `package.json`, `src/app/(protected)/crm/page.tsx`, `components.json`, `.env.example`, build e lint passando.

---

### 07/07/2026 — Criação da Governância e Documentação Estrutural

- **O que foi analisado:** Repositório Freya-Crm (apenas `README.md` e `escopo-freya-crm.md`); documento de escopo com 1532 linhas descrevendo stack, módulos, modelo de dados, arquitetura e roadmap.
- **O que foi decidido:** Criar 7 arquivos de governança/documentação na raiz do repositório, refletindo o estado real (planejamento, sem código). Stack e arquitetura marcadas como planejadas/pendentes.
- **O que foi criado:**
  - `AGENTS.md` — Regras de execução de agentes (SDD, TDD, commits, segurança, conduta)
  - `ARQUITETURA.md` — Arquitetura do sistema, stack, módulos, fluxos, integrações
  - `BANCO_DADOS.md` — Arquitetura de banco, tabelas, relacionamentos, índices, constraints
  - `ESCOPO.md` — Escopo completo do projeto, módulos, regras de negócio, riscos
  - `ROADMAP.md` — Fases de desenvolvimento com SDD/TDD, backlog, matriz
  - `CONTEXTO.md` — Este arquivo
  - `RELATORIO.md` — A ser criado
- **O que foi alterado:** Nenhum arquivo existente foi alterado.
- **O que ficou pendente:**
  - Criar `RELATORIO.md`
  - Inicializar projeto Next.js (Sprint 0)
  - Criar `package.json`, `prisma/schema.prisma`, migrations, seeds
  - Configurar Vitest e Playwright
  - Configurar Supabase Auth e RBAC
  - Implementar todas as funcionalidades do MVP
- **Evidências no repositório:** Arquivos de governança na raiz; `escopo-freya-crm.md` preservado.

---

## 4. Decisões Técnicas e Arquiteturais

| Data | Decisão | Motivo | Impacto | Status |
|---|---|---|---|---|
| 07/07/2026 | Freya CRM em repositório próprio | Separação clara de produto comercial vs operacional | Deploy independente, integração com Tyr via API futura | Confirmada |
| 07/07/2026 | Stack Next.js + Prisma + PostgreSQL/Supabase | Reaproveitamento de padrões do Tyr_Controle | Menor curva de aprendizado, componentes compartilháveis | Planejada |
| 07/07/2026 | Prefixo `Crm` em entidades Prisma | Preservar separação de domínios Freya vs Tyr | Evita colisão de models e acoplamento | Planejada |
| 07/07/2026 | Server Actions no MVP (sem API REST) | Simplicidade e velocidade de entrega | Pode evoluir para API interna se extraído | Planejada |
| 07/07/2026 | RBAC com 2 perfis iniciais (ADMIN, VENDEDOR) | Simplificação para MVP | GESTOR_COMERCIAL, CS e LEITURA adicionados no futuro | Planejada |
| 07/07/2026 | Soft delete em entidades principais | Rastreabilidade e integridade de dados | `deleted_at` em leads, empresas, contatos, oportunidades | Planejada |
| 07/07/2026 | Auditoria via `crm_audit_logs` | Rastreabilidade de ações críticas | Log de conversão, exclusão, status final, responsável | Planejada |

---

## 5. Decisões de Produto e Escopo

| Data | Decisão | Motivo | Impacto |
|---|---|---|---|
| 07/07/2026 | Freya vende, qualifica, acompanha e converte; Tyr opera, entrega, cobra e administra | Separação de responsabilidade comercial vs operacional | Fronteira clara entre CRM e ERP |
| 07/07/2026 | MVP não inclui geração de PDF, assinatura eletrônica, WhatsApp, email | Focar no core do CRM primeiro | Essas features ficam no backlog futuro |
| 07/07/2026 | Customer Success / Pós-venda fica no backlog futuro | Priorizar fluxo comercial principal no MVP | Módulo planejado mas não priorizado |
| 07/07/2026 | Conversão Freya → Tyr é parte do MVP | Fechar o ciclo comercial | Sprint 4 obrigatória para MVP |

---

## 6. Pendências Atuais

| Pendência | Área | Prioridade | Próxima ação |
|---|---|---|---|
| Inicializar projeto Next.js | Base técnica | Alta | Sprint 0 |
| Criar `package.json` | Base técnica | Alta | Sprint 0 |
| Criar `prisma/schema.prisma` | Banco de dados | Alta | Sprint 0 |
| Criar migration inicial | Banco de dados | Alta | Sprint 0 |
| Criar seed de pipeline padrão | Banco de dados | Alta | Sprint 0 |
| Configurar Vitest | Testes | Alta | Sprint 0 |
| Configurar Playwright | Testes | Alta | Sprint 0 |
| Configurar Supabase Auth | Autenticação | Alta | Sprint 0 |
| Criar RBAC com 2 perfis (ADMIN, VENDEDOR) | Autorização | Alta | Sprint 0 |
| Definir política de retenção LGPD | Segurança | Alta | Antes de produção |
| Remover/rotacionar credenciais do Tyr | Segurança | Alta | Antes de produção |
| Configurar CI/CD | Infraestrutura | Média | Fase 5 |
| Configurar observabilidade | Infraestrutura | Média | Fase 5 |
| Definir estratégia de backup | Infraestrutura | Alta | Fase 5 |
| Avaliar RLS no Supabase | Segurança | Média | Fase 4 |

---

## 7. Bloqueios

| Bloqueio | Severidade | Descrição | Dependência |
|---|---|---|---|
| Sem código inicial | Alta | Repositório sem `package.json`, sem configuração | Decisão de iniciar Sprint 0 |
| Integração com Tyr não definida tecnicamente | Média | Estratégia de integração (direta vs API) depende de decisão | Validação da arquitetura do Tyr |
| Credenciais expostas no Tyr | Alta | Documentação do Tyr aparenta conter credenciais | Remoção e rotação antes de produção |

---

## 8. Riscos Técnicos

| Risco | Impacto | Mitigação |
|---|---|---|
| Misturar ERP e CRM sem fronteira | Alto | Prefixar entidades, pastas e permissões CRM |
| Duplicidade de cliente/empresa | Alto | Normalização e checagem por documento/email |
| Credenciais em documentação do Tyr | Alto | Remover, rotacionar, usar secrets |
| Falha na conversão Freya → Tyr | Alto | Transação, idempotência e logs seguros |
| Crescimento do monolito | Médio | Domínio isolado e futura extração |
| Dados pessoais sem consentimento | Alto | Campos LGPD, opt-out e política de retenção |
| Performance em listagens | Médio | Paginação, filtros e índices |
| Permissões insuficientes | Alto | RBAC por ação e testes de autorização |
| Falta de testes E2E | Médio | Cobrir fluxos comerciais críticos |

---

## 9. Próximos Passos

1. Finalizar criação do `RELATORIO.md`.
2. Inicializar projeto Next.js com TypeScript (Sprint 0).
3. Criar `package.json` com scripts (dev, lint, test, test:e2e, build).
4. Configurar Prisma com PostgreSQL/Supabase e criar schema inicial.
5. Criar migration inicial e seed de pipeline padrão.
6. Configurar Vitest e Playwright.
7. Configurar Supabase Auth e RBAC com 2 perfis (ADMIN, VENDEDOR).
8. Criar menu CRM vazio e layout protegido.
9. Validar build, lint e testes.
10. Avançar para Sprint 1 (Leads, Empresas e Contatos).

---

## 10. Notas Importantes para Próximos Agentes

- Sempre ler este arquivo antes de trabalhar.
- Sempre atualizar este arquivo ao final da sessão.
- Não remover histórico antigo.
- Registrar decisões, bloqueios e mudanças de direção.
- O repositório está em fase de planejamento — nenhum código existe ainda.
- Toda implementação deve seguir SDD (especificação antes) e TDD (teste antes).
- Usar prefixo `Crm` em entidades Prisma.
- Preservar separação de domínios: Freya (CRM) vs Tyr (ERP).
- Não fazer commit ou push sem autorização explícita do usuário.
- Consultar `escopo-freya-crm.md` para detalhes completos do escopo.
