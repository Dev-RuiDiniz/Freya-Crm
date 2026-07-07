# ESCOPO.md — Escopo do Projeto

**Projeto:** Freya CRM  
**Atualizado em:** 07/07/2026  
**Fase:** Planejamento / MVP (a confirmar)

---

## 1. Objetivo do Projeto

Criar uma plataforma CRM para centralizar e organizar o relacionamento comercial da empresa, desde a captação de leads até a conversão em cliente/projeto no Tyr ERP. O Freya deve permitir registrar leads, organizar empresas e contatos, gerenciar funis comerciais, acompanhar oportunidades por etapa, registrar atividades e follow-ups, gerar propostas, converter oportunidades ganhas em clientes/projetos no Tyr, acompanhar indicadores comerciais e melhorar previsibilidade de vendas.

---

## 2. Problema que o Sistema Resolve

A empresa precisa de um sistema que organize todo o ciclo comercial: captação de leads, qualificação, negociação, proposta e conversão em cliente/projeto operacional. Hoje, o relacionamento comercial não está centralizado, gerando perda de follow-ups, falta de visibilidade de pipeline, dificuldade de prever receita e ausência de rastreabilidade do histórico comercial.

O Freya resolve essa dor oferecendo:
- Centralização de leads e contatos.
- Funil comercial visual com Kanban.
- Atividades e follow-ups rastreáveis.
- Propostas vinculadas a oportunidades.
- Conversão controlada para o Tyr ERP.
- Dashboard comercial com KPIs e forecast.

---

## 3. Público-Alvo / Usuários

| Perfil | Descrição | Permissões |
|---|---|---|
| `ADMIN` | Administrador geral | Acesso total, configurações, usuários, integrações e auditoria |
| `GESTOR_COMERCIAL` | Gestor do time comercial | Gerencia funis, equipes, metas, relatórios e oportunidades |
| `VENDEDOR` | Usuário comercial | Gerencia leads, contatos, atividades e oportunidades próprias |
| `CS` | Customer Success / relacionamento | Acompanha contas convertidas e pós-venda |
| `LEITURA` | Visualização executiva | Acesso somente leitura a dashboards e relatórios |

---

## 4. Escopo Funcional

### 4.1 Módulo Dashboard Comercial

- [ ] Total de leads novos por período
- [ ] Leads por origem
- [ ] Leads por status
- [ ] Oportunidades abertas
- [ ] Oportunidades ganhas/perdidas
- [ ] Valor potencial em pipeline
- [ ] Valor previsto por mês
- [ ] Taxa de conversão por etapa
- [ ] Tempo médio por etapa
- [ ] Atividades vencidas
- [ ] Próximos follow-ups
- [ ] Ranking de vendedores
- [ ] Forecast comercial

### 4.2 Módulo Leads

- [ ] Criar, editar, listar e arquivar leads
- [ ] Filtrar por status, origem, temperatura, responsável e período
- [ ] Busca por nome, email, telefone e empresa
- [ ] Detecção de duplicidade
- [ ] Desqualificação com motivo
- [ ] Conversão em oportunidade
- [ ] Histórico de atividades
- [ ] Consentimento LGPD

### 4.3 Módulo Empresas / Contas

- [ ] CRUD de empresas/prospects
- [ ] Vínculo com contatos
- [ ] Vínculo com oportunidades
- [ ] Documento único (CNPJ/CPF)
- [ ] Vínculo com cliente Tyr após conversão
- [ ] Status: Prospect, Em negociação, Cliente ativo, Cliente inativo, Perdido, Bloqueado

### 4.4 Módulo Contatos

- [ ] CRUD de contatos
- [ ] Associação com empresa
- [ ] Associação com oportunidades
- [ ] Contato principal
- [ ] Preferência de contato
- [ ] Consentimento e opt-out

### 4.5 Módulo Funil de Vendas

- [ ] Kanban de oportunidades
- [ ] Drag-and-drop entre etapas
- [ ] Reordenação de oportunidades
- [ ] Valor previsto por etapa
- [ ] Probabilidade por etapa
- [ ] Tempo na etapa
- [ ] Motivo de perda
- [ ] Alertas de oportunidade parada
- [ ] Histórico de mudança de etapa

### 4.6 Módulo Oportunidades / Deals

- [ ] CRUD de oportunidades
- [ ] Movimentação no funil
- [ ] Histórico de etapas
- [ ] Status: Aberta, Ganha, Perdida, Cancelada, Congelada
- [ ] Motivo obrigatório de perda
- [ ] Marcar como ganha
- [ ] Conversão para Tyr
- [ ] Valor estimado, probabilidade e data prevista

### 4.7 Módulo Atividades Comerciais

- [ ] CRUD de atividades
- [ ] Tipos: Ligação, WhatsApp, Email, Reunião, Demonstração, Proposta, Follow-up, Tarefa, Nota, Outro
- [ ] Vínculo com lead/empresa/contato/oportunidade
- [ ] Conclusão de atividade
- [ ] Criação de próxima atividade
- [ ] Atividades vencidas no dashboard
- [ ] Status: Pendente, Concluída, Cancelada, Atrasada

### 4.8 Módulo Propostas Comerciais

- [ ] Registro de propostas
- [ ] Vínculo com oportunidade
- [ ] Status: Rascunho, Enviada, Em negociação, Aprovada, Recusada, Expirada, Cancelada
- [ ] Anexo/link de documento
- [ ] Histórico de envio/aprovação/recusa

### 4.9 Módulo Conversão para Tyr ERP

- [ ] Marcar oportunidade como ganha
- [ ] Checklist de conversão
- [ ] Criar/vincular cliente no Tyr
- [ ] Criar projeto no Tyr
- [ ] Gerar registro financeiro inicial no Tyr
- [ ] Vínculo entre oportunidade e entidade Tyr
- [ ] Auditoria da conversão
- [ ] Deduplicação de cliente por documento/email

### 4.10 Módulo Customer Success / Pós-venda

- [ ] Visão de contas convertidas
- [ ] Histórico comercial e pós-venda
- [ ] Saúde do cliente (Saudável, Atenção, Risco, Crítico, Inativo)
- [ ] Risco de churn
- [ ] Oportunidades de upsell/cross-sell
- [ ] NPS ou satisfação
- [ ] Observações de relacionamento

---

## 5. Escopo Não Funcional

| Código | Requisito |
|---|---|
| RNF001 | Interface responsiva para desktop e tablet |
| RNF002 | Loading, empty, success e error states em todos os fluxos críticos |
| RNF003 | Validação de entrada no frontend e backend |
| RNF004 | Autorização por perfil/permissão |
| RNF005 | Logs sem dados sensíveis |
| RNF006 | Soft delete nas entidades principais |
| RNF007 | Auditoria de ações críticas |
| RNF008 | Paginação e filtros em listagens |
| RNF009 | Índices em campos de busca e relacionamento |
| RNF010 | Build, lint, testes unitários e E2E antes de produção |
| RNF011 | Compatibilidade com deploy em Vercel |
| RNF012 | Integração segura com PostgreSQL/Supabase |
| RNF013 | Preparação para futura extração do CRM em produto separado |
| RNF014 | Proteção de dados pessoais conforme LGPD |
| RNF015 | Nenhum secret ou credencial deve ser versionado |

---

## 6. Fora do Escopo

- Gestão operacional de projetos (responsabilidade do Tyr ERP).
- Gestão financeira de contratos, pagamentos e parcelas (responsabilidade do Tyr ERP).
- Gestão de desenvolvedores/equipe (responsabilidade do Tyr ERP).
- Portal do cliente (backlog futuro).
- Geração automática de PDF de propostas (backlog futuro).
- Assinatura eletrônica (backlog futuro).
- Integração com WhatsApp Business (backlog futuro).
- Integração com email/SMTP (backlog futuro).
- Importação CSV de leads (backlog futuro).
- API pública (backlog futuro).
- Automação de follow-up (backlog futuro).
- Metas por vendedor (backlog futuro).

---

## 7. Regras de Negócio

| Código | Regra | Módulo | Status |
|---|---|---|---|
| RN-001 | O usuário precisa estar autenticado para acessar o CRM | Auth | Planejada |
| RN-002 | VENDEDOR só acessa leads/oportunidades próprios | RBAC | Planejada |
| RN-003 | Lead pode existir sem empresa vinculada | Leads | Planejada |
| RN-004 | Lead convertido não deve ser excluído fisicamente | Leads | Planejada |
| RN-005 | Lead desqualificado deve exigir motivo | Leads | Planejada |
| RN-006 | Duplicidade de lead detectada por email, telefone ou empresa | Leads | Planejada |
| RN-007 | Documento da empresa deve ser único quando informado | Empresas | Planejada |
| RN-008 | Email e telefone de contato devem ser normalizados | Contatos | Planejada |
| RN-009 | Consentimento e opt-out devem ser respeitados | Contatos/Leads | Planejada |
| RN-010 | Etapas Fechado ganho e Fechado perdido são finais | Funil | Planejada |
| RN-011 | Marcar como perdido exige motivo | Oportunidades | Planejada |
| RN-012 | Marcar como ganha permite conversão para Tyr | Oportunidades | Planejada |
| RN-013 | Mudança de etapa deve gerar evento de histórico | Funil | Planejada |
| RN-014 | Oportunidade parada por mais de X dias gera alerta | Funil | Planejada |
| RN-015 | Valor estimado deve ser maior ou igual a zero | Oportunidades | Planejada |
| RN-016 | Atividade deve estar vinculada a pelo menos uma entidade | Atividades | Planejada |
| RN-017 | Concluir atividade pode criar próxima atividade | Atividades | Planejada |
| RN-018 | Conversão para Tyr não deve duplicar cliente | Conversão | Planejada |
| RN-019 | Conversão deve gerar evento de auditoria | Conversão | Planejada |
| RN-020 | Dados financeiros finais ficam no Tyr, não no Freya | Conversão | Planejada |
| RN-021 | Proposta deve estar vinculada a uma oportunidade | Propostas | Planejada |
| RN-022 | Logs não devem conter dados sensíveis em texto plano | Segurança | Planejada |
| RN-023 | Soft delete em entidades principais | Persistência | Planejada |
| RN-024 | Auditoria para conversão, exclusão, alteração de status final e alteração de responsável | Auditoria | Planejada |

---

## 8. Critérios Gerais de Aceite

- [ ] Sistema executa localmente com instruções documentadas.
- [ ] Testes principais passam.
- [ ] Funcionalidades principais documentadas.
- [ ] Banco de dados documentado.
- [ ] Fluxos principais validados.
- [ ] Sem credenciais expostas.
- [ ] Relatório diário atualizado.

### Critérios de aceite do MVP

- [ ] CRM possuir menu e rotas protegidas.
- [ ] Perfis comerciais estiverem definidos.
- [ ] Leads puderem ser gerenciados.
- [ ] Empresas e contatos puderem ser gerenciados.
- [ ] Oportunidades puderem ser criadas e movidas em funil.
- [ ] Atividades puderem ser registradas e concluídas.
- [ ] Propostas puderem ser registradas.
- [ ] Oportunidade ganha puder ser convertida para Tyr.
- [ ] Dashboard comercial exibir KPIs básicos.
- [ ] Permissões forem respeitadas.
- [ ] Dados pessoais tiverem tratamento mínimo de LGPD.
- [ ] Build, lint, testes unitários e E2E principais estiverem passando.
- [ ] Documentação técnica estiver atualizada.

---

## 9. Entregáveis

- Código-fonte (Next.js + TypeScript + Prisma)
- Documentação técnica (AGENTS.md, ARQUITETURA.md, BANCO_DADOS.md, ESCOPO.md, ROADMAP.md, CONTEXTO.md, RELATORIO.md)
- Schema Prisma e migrations
- Seeds de dados iniciais (pipeline padrão, motivos de perda)
- Testes unitários (Vitest)
- Testes E2E (Playwright)
- Deploy em Vercel (planejado)
- Manual de execução
- Relatórios diários

---

## 10. Premissas

- A stack será Next.js + TypeScript + Prisma + PostgreSQL/Supabase, reaproveitando padrões do Tyr_Controle.
- A autenticação será via Supabase Auth.
- O RBAC terá 5 perfis comerciais (ADMIN, GESTOR_COMERCIAL, VENDEDOR, CS, LEITURA).
- O Freya usará prefixo `Crm` em entidades Prisma para preservar separação de domínios.
- A integração com o Tyr no MVP será direta via services/Server Actions se no mesmo repositório/banco.
- O deploy será em Vercel com Supabase/PostgreSQL.
- Nenhuma credencial será versionada.

---

## 11. Restrições

- Repositório sem código inicial — toda a base técnica precisa ser criada.
- Integração com Tyr depende da disponibilidade e estrutura do ERP.
- LGPD exige política de consentimento, opt-out e retenção desde o MVP.
- Credenciais em documentação do Tyr precisam ser removidas/rotacionadas antes de produção.
- Sem CI/CD configurado inicialmente.

---

## 12. Riscos

| Risco | Impacto | Probabilidade | Mitigação |
|---|---|---|---|
| Misturar ERP e CRM sem fronteira | Alto | Média | Prefixar entidades, pastas e permissões CRM |
| Duplicidade de cliente/empresa | Alto | Média | Normalização e checagem por documento/email |
| Credenciais em documentação | Alto | Baixa | Remover, rotacionar, usar secrets |
| Falha na conversão Freya → Tyr | Alto | Média | Transação, idempotência e logs seguros |
| Crescimento do monolito | Médio | Média | Domínio isolado e futura extração |
| Dados pessoais sem consentimento | Alto | Média | Campos LGPD, opt-out e política de retenção |
| Performance em listagens | Médio | Baixa | Paginação, filtros e índices |
| Permissões insuficientes | Alto | Média | RBAC por ação e testes de autorização |
| Falta de testes E2E | Médio | Alta | Cobrir fluxos comerciais críticos |
