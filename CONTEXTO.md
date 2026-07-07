# CONTEXTO.md — Contexto Vivo do Projeto

**Projeto:** Freya CRM  
**Atualizado em:** 07/07/2026  
**Responsável pela atualização:** Agente IA / Desenvolvedor

---

## 1. Resumo Executivo

O Freya CRM é um sistema comercial e de relacionamento com clientes, separado do Tyr ERP (sistema operacional). O projeto está em fase de **planejamento e governança inicial** — o repositório possui apenas o documento de escopo (`escopo-freya-crm.md`) e os arquivos de governança recém-criados. Não há código, `package.json`, schema Prisma, migrations ou testes implementados. O principal objetivo técnico atual é inicializar a base do projeto (Next.js + Prisma + PostgreSQL) e configurar o ambiente de desenvolvimento. Os principais riscos são: integração com Tyr ERP não implementada, credenciais em documentação do Tyr (risco herdado), e ausência de política LGPD definida.

---

## 2. Estado Atual do Projeto

| Área | Status | Observações |
|---|---|---|
| Backend | PENDENTE | Sem código; stack planejada: Next.js Server Actions + Prisma |
| Frontend | PENDENTE | Sem código; stack planejada: React + Tailwind + shadcn/ui |
| Banco de dados | PENDENTE | Sem schema; planejado: PostgreSQL/Supabase + Prisma |
| Testes | PENDENTE | Sem configuração; planejado: Vitest + Playwright |
| Infraestrutura | PENDENTE | Sem Docker, CI/CD ou observabilidade; deploy planejado: Vercel |
| Documentação | EM DESENVOLVIMENTO | Governança criada (AGENTS, ARQUITETURA, BANCO, ESCOPO, ROADMAP); CONTEXTO e RELATORIO em criação |
| Segurança | PENDENTE | Credenciais em docs do Tyr a remover; LGPD a definir |
| Integração Tyr | PENDENTE | Sem implementação; planejada para Sprint 4 |

---

## 3. Histórico de Desenvolvimento

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
| 07/07/2026 | RBAC com 5 perfis comerciais | Controle de acesso por função comercial | VENDEDOR vê apenas próprios dados; ADMIN acesso total | Planejada |
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
| Criar RBAC com 5 perfis | Autorização | Alta | Sprint 0 |
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
7. Configurar Supabase Auth e RBAC com 5 perfis comerciais.
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
