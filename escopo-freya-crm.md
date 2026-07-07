# Escopo do Projeto — Freya CRM

**Projeto:** Freya CRM  
**Empresa:** Dev-RuiDiniz / operação interna  
**Data:** 07/07/2026  
**Base técnica analisada:** `Dev-RuiDiniz/Tyr_Controle`  
**Objetivo do documento:** definir o escopo funcional, técnico, arquitetural e de implementação do Freya CRM, considerando que o **Tyr** será evoluído como **ERP interno da empresa** e o **Freya** será o **CRM comercial e de relacionamento com clientes**.

---

## 1. Resumo Executivo

O repositório `Tyr_Controle` já possui uma base sólida para sistemas internos de gestão: autenticação, RBAC, cadastro de clientes, usuários, desenvolvedores, projetos, tarefas, roadmap, escopos, impedimentos, financeiro, dashboards, relatórios, Prisma, PostgreSQL/Supabase, Next.js, Server Actions, testes unitários e E2E.

A recomendação estratégica é separar os produtos por responsabilidade:

- **Tyr ERP:** sistema interno de gestão operacional, financeira, projetos, entregas, equipe, contratos, pagamentos e administração da empresa.
- **Freya CRM:** sistema comercial e relacional para gestão de leads, contatos, empresas, funil de vendas, propostas, atividades comerciais, histórico de relacionamento, pós-venda e conversão de oportunidades em clientes/projetos no Tyr.

O Freya deve nascer como produto/módulo independente em domínio de negócio, mas pode reaproveitar a arquitetura, stack, componentes visuais, padrões de autenticação, RBAC e infraestrutura do Tyr.

---

## 2. Decisão de Produto

### 2.1 Tyr — ERP da Empresa

O Tyr deve concentrar:

- Gestão administrativa da empresa.
- Gestão de usuários e permissões internas.
- Gestão de clientes já convertidos.
- Gestão de projetos contratados.
- Gestão de desenvolvedores/equipe.
- Escopos, roadmap, tarefas, marcos e impedimentos.
- Financeiro de contratos, pagamentos, parcelas e recebimentos.
- Dashboards operacionais e financeiros.
- Relatórios internos.
- Governança, auditoria e controle de produção.

### 2.2 Freya — CRM da Empresa

O Freya deve concentrar:

- Gestão de leads.
- Gestão de contatos.
- Gestão de empresas/prospects.
- Funil comercial.
- Oportunidades/deals.
- Atividades comerciais.
- Histórico de relacionamento.
- Propostas comerciais.
- Follow-ups.
- Segmentação de clientes potenciais.
- Conversão de lead em cliente.
- Integração com o Tyr quando uma oportunidade for ganha.

### 2.3 Fronteira entre ERP e CRM

| Área | Tyr ERP | Freya CRM |
|---|---|---|
| Lead ainda não convertido | Não | Sim |
| Empresa prospect | Não | Sim |
| Cliente contratado | Sim | Sim, como conta convertida |
| Projeto contratado | Sim | Apenas origem comercial |
| Proposta comercial | Pode receber resumo | Sim |
| Contrato e financeiro | Sim | Apenas valor previsto/status comercial |
| Pagamento/parcela | Sim | Não |
| Funil de vendas | Não | Sim |
| Tarefas operacionais de projeto | Sim | Não |
| Atividades comerciais | Não | Sim |
| Pós-venda e sucesso do cliente | Parcial | Sim |
| Relatórios operacionais | Sim | Não |
| Relatórios comerciais | Não | Sim |

---

## 3. Análise Técnica do Repositório Tyr_Controle

### 3.1 Stack identificada

| Camada | Tecnologia |
|---|---|
| Linguagem principal | TypeScript |
| Framework web | Next.js com App Router |
| Frontend | React |
| UI | Tailwind CSS, shadcn/ui, lucide-react |
| Backend | Next.js Server Actions e Route Handlers |
| Banco | PostgreSQL |
| ORM | Prisma |
| Autenticação | Supabase Auth |
| Autorização | RBAC por perfis |
| Validação | Zod e React Hook Form |
| Tabelas | TanStack Table |
| Gráficos | Recharts |
| Testes unitários | Vitest |
| Testes E2E | Playwright |
| Deploy | Vercel para aplicação e Supabase/PostgreSQL em infraestrutura separada |

### 3.2 Estrutura relevante observada

```text
Tyr_Controle/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (protected)/
│   │   │   ├── clientes/
│   │   │   ├── dashboard/
│   │   │   ├── desenvolvedores/
│   │   │   ├── financeiro/
│   │   │   ├── projetos/
│   │   │   ├── usuarios/
│   │   │   └── unauthorized/
│   │   ├── actions/
│   │   └── api/
│   ├── components/
│   ├── lib/
│   └── proxy.ts
├── prisma/
│   └── schema.prisma
├── tests/
├── package.json
├── README.md
├── ARQUITETURA.md
├── BANCO_DADOS.md
├── ESCOPO.md
├── ROADMAP.md
└── RUNBOOK.md
```

### 3.3 Capacidades já existentes que podem ser reaproveitadas

- Autenticação e sessão.
- RBAC por perfil.
- Layout protegido.
- Componentes UI.
- Padrões de formulários.
- Padrões de Server Actions.
- Padrões de validação.
- Prisma/PostgreSQL.
- Soft delete em entidades principais.
- Dashboard e gráficos.
- Testes com Vitest e Playwright.
- Documentação técnica já estruturada.

### 3.4 Pontos de atenção identificados

1. **Credenciais em documentação:** a documentação do repositório aparenta conter credenciais de teste. Recomenda-se remover imediatamente, rotacionar a senha, criar usuário de demonstração seguro e nunca versionar credenciais.
2. **Perfil CLIENTE:** a documentação cita cliente como perfil, mas o schema/roles analisados indicam principalmente `ADMIN`, `GESTOR_PROJETO` e `DESENVOLVEDOR`. É necessário revisar se o portal do cliente será mantido no Tyr, no Freya ou em ambos.
3. **Separação de domínios:** clientes no Tyr hoje representam uma entidade operacional. No Freya, será necessário distinguir `Lead`, `Prospect`, `Conta`, `Contato` e `Cliente Convertido`.
4. **Escalabilidade de produto:** para evitar acoplamento excessivo, Freya não deve ser apenas um menu genérico dentro do Tyr sem fronteira clara de domínio.
5. **LGPD:** CRM envolve dados pessoais, histórico de relacionamento, origem do lead, consentimento, opt-out e retenção. Isso exige política de dados desde o MVP.

---

## 4. Objetivo do Freya CRM

Criar uma plataforma CRM para centralizar e organizar o relacionamento comercial da empresa, desde a captação de leads até a conversão em cliente/projeto no Tyr ERP.

O Freya deve permitir que a empresa:

- Registre leads com origem, interesse, prioridade e responsável.
- Organize empresas e contatos.
- Gerencie funis comerciais customizáveis.
- Acompanhe oportunidades por etapa.
- Registre atividades, ligações, reuniões, mensagens e follow-ups.
- Gere propostas comerciais.
- Converta oportunidades ganhas em clientes/projetos no Tyr.
- Acompanhe indicadores comerciais.
- Melhore previsibilidade de vendas e qualidade do relacionamento.

---

## 5. Personas e Perfis de Acesso

### 5.1 Perfis recomendados para o Freya

| Perfil | Descrição | Permissões principais |
|---|---|---|
| `ADMIN` | Administrador geral | Acesso total, configurações, usuários, integrações e auditoria |
| `GESTOR_COMERCIAL` | Gestor do time comercial | Gerencia funis, equipes, metas, relatórios e oportunidades |
| `VENDEDOR` | Usuário comercial | Gerencia leads, contatos, atividades e oportunidades próprias |
| `CS` | Customer Success / relacionamento | Acompanha contas convertidas e pós-venda |
| `LEITURA` | Visualização executiva | Acesso somente leitura a dashboards e relatórios |

### 5.2 Regra de autorização inicial

- `ADMIN`: acesso total.
- `GESTOR_COMERCIAL`: acesso total ao CRM, exceto configurações sensíveis.
- `VENDEDOR`: acesso a leads, contatos e oportunidades próprios ou compartilhados.
- `CS`: acesso a contas convertidas, histórico, atividades de pós-venda e saúde do cliente.
- `LEITURA`: acesso somente leitura.

---

## 6. Módulos do Freya CRM

## 6.1 Dashboard Comercial

### Objetivo

Oferecer visão executiva e operacional da área comercial.

### Funcionalidades

- Total de leads novos por período.
- Leads por origem.
- Leads por status.
- Oportunidades abertas.
- Oportunidades ganhas/perdidas.
- Valor potencial em pipeline.
- Valor previsto por mês.
- Taxa de conversão por etapa.
- Tempo médio por etapa.
- Atividades vencidas.
- Próximos follow-ups.
- Ranking de vendedores.
- Forecast comercial.

### Indicadores recomendados

| Indicador | Descrição |
|---|---|
| Leads novos | Quantidade de leads criados no período |
| Leads qualificados | Leads que passaram por qualificação |
| Conversão lead → oportunidade | Percentual de leads transformados em oportunidade |
| Conversão oportunidade → cliente | Percentual de oportunidades ganhas |
| Ticket médio previsto | Média de valor das oportunidades |
| Receita potencial | Soma de oportunidades abertas ponderadas |
| Receita ganha | Soma de oportunidades fechadas como ganhas |
| Atividades pendentes | Follow-ups e tarefas comerciais abertas |
| SLA de primeiro contato | Tempo entre entrada do lead e primeira atividade |

---

## 6.2 Leads

### Objetivo

Cadastrar e acompanhar interessados antes de virarem oportunidade comercial.

### Campos sugeridos

| Campo | Tipo | Obrigatório | Observação |
|---|---|---:|---|
| Nome | Texto | Sim | Nome do lead ou responsável |
| Email | Email | Não | Validar formato |
| Telefone | Texto | Não | Com máscara opcional |
| Empresa | Texto/relação | Não | Pode virar conta depois |
| Cargo | Texto | Não | Cargo do contato |
| Origem | Enum | Sim | Site, indicação, WhatsApp, LinkedIn, tráfego pago, evento, outbound, outro |
| Status | Enum | Sim | Novo, contatado, qualificado, desqualificado, convertido |
| Temperatura | Enum | Sim | Frio, morno, quente |
| Interesse | Texto | Não | Serviço/produto de interesse |
| Observações | Texto longo | Não | Histórico inicial |
| Responsável | Usuário | Sim | Vendedor responsável |
| Próximo follow-up | Data/hora | Não | Para rotina comercial |
| Consentimento LGPD | Boolean/data | Sim quando aplicável | Registro de base legal/consentimento |
| Criado em | Data/hora | Automático | Auditoria |
| Atualizado em | Data/hora | Automático | Auditoria |

### Regras de negócio

- Lead pode existir sem empresa vinculada.
- Lead pode ser convertido em oportunidade.
- Lead convertido não deve ser excluído fisicamente.
- Lead desqualificado deve exigir motivo.
- Lead duplicado deve ser detectado por email, telefone ou empresa.
- Vendedor só deve editar leads permitidos pelo RBAC.
- Histórico de atividades deve permanecer mesmo após conversão.

---

## 6.3 Empresas / Contas

### Objetivo

Representar empresas prospects, clientes potenciais ou clientes convertidos.

### Campos sugeridos

| Campo | Tipo | Obrigatório |
|---|---|---:|
| Nome fantasia | Texto | Sim |
| Razão social | Texto | Não |
| Documento | CNPJ/CPF | Não |
| Site | URL | Não |
| Segmento | Texto/Enum | Não |
| Porte | Enum | Não |
| Origem | Enum | Não |
| Status | Enum | Sim |
| Endereço | Texto/JSON | Não |
| Observações | Texto longo | Não |
| Responsável comercial | Usuário | Sim |
| Cliente Tyr vinculado | Relação opcional | Não |

### Status sugeridos

- Prospect.
- Em negociação.
- Cliente ativo.
- Cliente inativo.
- Perdido.
- Bloqueado.

### Regras

- Uma empresa pode ter múltiplos contatos.
- Uma empresa pode ter múltiplas oportunidades.
- Uma empresa convertida pode gerar ou vincular um cliente no Tyr ERP.
- Documento deve ser único quando informado.
- Dados sensíveis devem ser protegidos em logs.

---

## 6.4 Contatos

### Objetivo

Registrar pessoas relacionadas a leads, empresas e oportunidades.

### Campos sugeridos

| Campo | Tipo | Obrigatório |
|---|---|---:|
| Nome | Texto | Sim |
| Email | Email | Não |
| Telefone | Texto | Não |
| Cargo | Texto | Não |
| Empresa | Relação | Não |
| LinkedIn | URL | Não |
| Principal | Boolean | Não |
| Preferência de contato | Enum | Não |
| Consentimento | Boolean/data | Quando aplicável |
| Observações | Texto | Não |

### Regras

- Um contato pode pertencer a uma empresa.
- Um contato pode estar vinculado a várias oportunidades.
- Email e telefone devem ser normalizados para evitar duplicidade.
- Consentimento e opt-out devem ser respeitados em comunicações comerciais.

---

## 6.5 Funil de Vendas

### Objetivo

Permitir organização visual das oportunidades por etapa comercial.

### Etapas iniciais sugeridas

1. Entrada.
2. Qualificação.
3. Diagnóstico.
4. Proposta.
5. Negociação.
6. Fechado ganho.
7. Fechado perdido.

### Funcionalidades

- Kanban de oportunidades.
- Drag-and-drop entre etapas.
- Reordenação de oportunidades.
- Valor previsto por etapa.
- Probabilidade por etapa.
- Tempo na etapa.
- Motivo de perda.
- Alertas de oportunidade parada.
- Histórico de mudança de etapa.

### Regras

- Etapas `Fechado ganho` e `Fechado perdido` são finais.
- Para marcar como perdido, exigir motivo.
- Para marcar como ganho, permitir conversão para cliente/projeto no Tyr.
- Mudança de etapa deve gerar evento de histórico.
- Oportunidade parada por mais de X dias deve aparecer como alerta.

---

## 6.6 Oportunidades / Deals

### Objetivo

Controlar negociações comerciais com valor, etapa, previsão e responsável.

### Campos sugeridos

| Campo | Tipo | Obrigatório |
|---|---|---:|
| Título | Texto | Sim |
| Empresa | Relação | Sim |
| Contato principal | Relação | Não |
| Lead origem | Relação | Não |
| Responsável | Usuário | Sim |
| Etapa | Relação | Sim |
| Status | Enum | Sim |
| Valor estimado | Decimal | Sim |
| Probabilidade | Percentual | Não |
| Data prevista de fechamento | Data | Não |
| Serviço/produto | Texto/Enum | Não |
| Prioridade | Enum | Não |
| Descrição | Texto | Não |
| Motivo de perda | Texto/Enum | Obrigatório se perdida |
| Projeto Tyr vinculado | Relação opcional | Após ganho |

### Status

- Aberta.
- Ganha.
- Perdida.
- Cancelada.
- Congelada.

### Regras

- Oportunidade deve pertencer a uma empresa ou lead convertido.
- Valor estimado deve ser maior ou igual a zero.
- Oportunidade ganha pode criar:
  - cliente no Tyr;
  - projeto no Tyr;
  - registro financeiro inicial no Tyr;
  - escopo preliminar do projeto.
- Oportunidade perdida deve registrar motivo.
- Alterações críticas devem ser auditadas.

---

## 6.7 Atividades Comerciais

### Objetivo

Registrar ações de relacionamento e controlar follow-ups.

### Tipos de atividade

- Ligação.
- WhatsApp.
- Email.
- Reunião.
- Demonstração.
- Proposta enviada.
- Follow-up.
- Tarefa interna.
- Nota.
- Outro.

### Campos sugeridos

| Campo | Tipo | Obrigatório |
|---|---|---:|
| Tipo | Enum | Sim |
| Título | Texto | Sim |
| Descrição | Texto | Não |
| Data/hora | Data/hora | Sim |
| Status | Enum | Sim |
| Responsável | Usuário | Sim |
| Lead | Relação | Não |
| Empresa | Relação | Não |
| Contato | Relação | Não |
| Oportunidade | Relação | Não |
| Resultado | Texto | Não |
| Próxima ação | Texto/data | Não |

### Status

- Pendente.
- Concluída.
- Cancelada.
- Atrasada.

### Regras

- Atividade deve estar vinculada a pelo menos uma entidade: lead, empresa, contato ou oportunidade.
- Atividade vencida deve aparecer em dashboard.
- Concluir atividade pode criar próxima atividade.
- Histórico não deve ser apagado fisicamente.

---

## 6.8 Propostas Comerciais

### Objetivo

Controlar propostas enviadas a prospects e oportunidades.

### MVP

No MVP, proposta pode ser um registro simples com valor, descrição, arquivo/link e status.

### Campos sugeridos

| Campo | Tipo | Obrigatório |
|---|---|---:|
| Oportunidade | Relação | Sim |
| Código | Texto | Sim |
| Título | Texto | Sim |
| Valor | Decimal | Sim |
| Validade | Data | Não |
| Status | Enum | Sim |
| Link/documento | URL/upload | Não |
| Observações | Texto | Não |
| Enviada em | Data | Não |
| Aprovada em | Data | Não |
| Recusada em | Data | Não |

### Status

- Rascunho.
- Enviada.
- Em negociação.
- Aprovada.
- Recusada.
- Expirada.
- Cancelada.

### Evolução futura

- Geração automática de PDF.
- Templates por tipo de serviço.
- Assinatura eletrônica.
- Versionamento de proposta.
- Aprovação interna antes do envio.
- Integração com contrato/financeiro do Tyr.

---

## 6.9 Conversão para Tyr ERP

### Objetivo

Criar ponte controlada entre comercial e operação.

### Fluxo recomendado

1. Vendedor marca oportunidade como `Ganha`.
2. Sistema exibe checklist de conversão.
3. Usuário confirma ou cria:
   - cliente no Tyr;
   - projeto no Tyr;
   - responsável pelo projeto;
   - escopo inicial;
   - valor contratado;
   - modelo de cobrança;
   - datas previstas.
4. Tyr recebe dados operacionais.
5. Freya mantém histórico da origem comercial.
6. Oportunidade fica vinculada ao projeto/cliente criado.

### Dados mínimos enviados ao Tyr

- Empresa/cliente.
- Contato principal.
- Nome do projeto.
- Descrição do projeto.
- Valor contratado.
- Tipo de cobrança.
- Origem da oportunidade.
- Responsável comercial.
- Observações comerciais relevantes.
- Documentos/proposta aprovada, se houver.

### Regras

- Conversão deve ser transacional ou possuir rollback claro.
- Não deve duplicar cliente se documento/email já existir.
- Usuário deve ter permissão para converter.
- Conversão deve gerar evento de auditoria.
- Dados financeiros finais devem ficar no Tyr, não no Freya.

---

## 6.10 Customer Success / Pós-venda

### Objetivo

Acompanhar relacionamento após fechamento, sem substituir gestão operacional do Tyr.

### Funcionalidades

- Visão de contas convertidas.
- Histórico comercial e pós-venda.
- Saúde do cliente.
- Próxima reunião de acompanhamento.
- Risco de churn.
- Oportunidades de upsell/cross-sell.
- NPS ou satisfação.
- Observações de relacionamento.

### Status de saúde

- Saudável.
- Atenção.
- Risco.
- Crítico.
- Inativo.

---

## 7. Modelo de Dados Proposto

## 7.1 Entidades principais do Freya

```text
CrmLead
CrmCompany
CrmContact
CrmPipeline
CrmPipelineStage
CrmOpportunity
CrmOpportunityStageHistory
CrmActivity
CrmProposal
CrmProposalVersion
CrmLossReason
CrmTag
CrmAuditLog
CrmIntegrationLink
```

## 7.2 Relacionamentos

```text
CrmCompany 1:N CrmContact
CrmCompany 1:N CrmOpportunity
CrmLead 0:1 CrmCompany
CrmLead 0:1 CrmContact
CrmLead 0:N CrmActivity
CrmOpportunity N:1 CrmPipelineStage
CrmOpportunity 1:N CrmActivity
CrmOpportunity 1:N CrmProposal
CrmOpportunity 1:N CrmOpportunityStageHistory
CrmOpportunity 0:1 TyrProject
CrmCompany 0:1 TyrClient
```

## 7.3 Exemplo conceitual de enums

```text
LeadStatus:
- NOVO
- CONTATADO
- QUALIFICADO
- DESQUALIFICADO
- CONVERTIDO

LeadTemperature:
- FRIO
- MORNO
- QUENTE

OpportunityStatus:
- ABERTA
- GANHA
- PERDIDA
- CANCELADA
- CONGELADA

ActivityType:
- LIGACAO
- WHATSAPP
- EMAIL
- REUNIAO
- DEMONSTRACAO
- PROPOSTA
- FOLLOW_UP
- TAREFA
- NOTA
- OUTRO

ActivityStatus:
- PENDENTE
- CONCLUIDA
- CANCELADA
- ATRASADA
```

---

## 8. Arquitetura Recomendada

## 8.1 Opção A — Freya no mesmo repositório do Tyr

### Características

- Adicionar rotas em `src/app/(protected)/crm`.
- Adicionar actions em `src/app/actions/crm-*`.
- Adicionar domínio em `src/lib/crm`.
- Adicionar componentes em `src/components/crm`.
- Adicionar modelos Prisma no mesmo banco.

### Vantagens

- Entrega mais rápida.
- Reaproveitamento máximo da base atual.
- Menor complexidade inicial.
- Mesma autenticação e RBAC.
- Integração direta com entidades do Tyr.

### Riscos

- Acoplamento forte entre ERP e CRM.
- Crescimento do repositório pode dificultar manutenção.
- Deploy único para dois produtos.
- Separação comercial/operacional pode ficar confusa.

### Recomendação

Boa para MVP, desde que o domínio CRM seja bem separado em pastas, permissões e entidades.

---

## 8.2 Opção B — Freya em repositório separado

### Características

- Criar repositório próprio, por exemplo `Freya_CRM`.
- Reaproveitar padrões do Tyr.
- Compartilhar banco ou integrar via API.
- Deploy independente.

### Vantagens

- Separação clara de produto.
- Deploy independente.
- Menor risco de impacto no ERP.
- Melhor para escalar equipe/produto.

### Riscos

- Mais setup inicial.
- Integração com Tyr precisa ser definida.
- Pode duplicar componentes e autenticação se não houver pacote compartilhado.

### Recomendação

Ideal para médio/longo prazo. Para acelerar, pode-se começar no Tyr como módulo isolado e extrair depois.

---

## 8.3 Recomendação prática

Para este momento, a melhor estratégia é:

1. **MVP do Freya como módulo isolado dentro do repositório Tyr_Controle**, usando rotas `/crm`.
2. Separar completamente domínio, componentes e Server Actions.
3. Evitar misturar models CRM com models operacionais sem prefixo.
4. Usar prefixo `Crm` nas entidades Prisma.
5. Preparar camada de integração para futura extração.
6. Avaliar criação de repositório separado quando o CRM atingir maturidade.

---

## 9. Estrutura de Pastas Sugerida

```text
src/
├── app/
│   ├── (protected)/
│   │   └── crm/
│   │       ├── dashboard/
│   │       ├── leads/
│   │       ├── empresas/
│   │       ├── contatos/
│   │       ├── oportunidades/
│   │       ├── funil/
│   │       ├── atividades/
│   │       ├── propostas/
│   │       ├── relatorios/
│   │       └── configuracoes/
│   └── actions/
│       ├── crm-leads.ts
│       ├── crm-companies.ts
│       ├── crm-contacts.ts
│       ├── crm-opportunities.ts
│       ├── crm-activities.ts
│       ├── crm-proposals.ts
│       └── crm-conversion.ts
├── components/
│   └── crm/
│       ├── dashboard/
│       ├── leads/
│       ├── companies/
│       ├── contacts/
│       ├── opportunities/
│       ├── pipeline/
│       ├── activities/
│       ├── proposals/
│       └── shared/
└── lib/
    └── crm/
        ├── leads/
        ├── companies/
        ├── contacts/
        ├── opportunities/
        ├── activities/
        ├── proposals/
        ├── conversion/
        ├── schemas.ts
        ├── permissions.ts
        └── queries.ts
```

---

## 10. Telas do MVP

## 10.1 Navegação

Adicionar grupo de menu:

- CRM
  - Dashboard
  - Leads
  - Empresas
  - Contatos
  - Oportunidades
  - Atividades
  - Propostas
  - Relatórios
  - Configurações

## 10.2 Dashboard CRM

Componentes:

- Cards de KPIs.
- Gráfico de leads por origem.
- Gráfico de oportunidades por etapa.
- Valor previsto por etapa.
- Lista de follow-ups vencidos.
- Lista de oportunidades paradas.
- Ranking simples por responsável.

## 10.3 Leads

Componentes:

- Listagem com filtros.
- Busca por nome, email, telefone e empresa.
- Filtro por status, origem, temperatura, responsável e período.
- Formulário de criação/edição.
- Detalhe do lead.
- Histórico de atividades.
- Botão converter em oportunidade.
- Ação de desqualificar com motivo.

## 10.4 Empresas

Componentes:

- Listagem.
- Formulário.
- Página de detalhe.
- Aba contatos.
- Aba oportunidades.
- Aba atividades.
- Aba histórico.
- Vínculo com cliente Tyr quando convertido.

## 10.5 Contatos

Componentes:

- Listagem.
- Formulário.
- Associação com empresa.
- Associação com oportunidades.
- Registro de preferência de contato.
- Controle de consentimento/opt-out.

## 10.6 Oportunidades

Componentes:

- Kanban de pipeline.
- Listagem tabular.
- Formulário de criação/edição.
- Detalhe da oportunidade.
- Histórico de etapas.
- Atividades relacionadas.
- Propostas relacionadas.
- Ação `Marcar como ganha`.
- Ação `Marcar como perdida`.
- Ação `Converter para Tyr`.

## 10.7 Atividades

Componentes:

- Agenda/lista.
- Calendário simples futuro.
- Formulário de atividade.
- Conclusão rápida.
- Criar próxima atividade.
- Filtro por responsável/status/período.

## 10.8 Propostas

Componentes:

- Listagem.
- Formulário.
- Vincular a oportunidade.
- Upload/link de documento.
- Status da proposta.
- Histórico de envio/aprovação/recusa.

---

## 11. Requisitos Funcionais

## 11.1 Administração

- RF001 — O sistema deve permitir configurar perfis e permissões do CRM.
- RF002 — O sistema deve permitir cadastrar usuários comerciais.
- RF003 — O sistema deve permitir definir funis e etapas comerciais.
- RF004 — O sistema deve permitir configurar origens de lead.
- RF005 — O sistema deve permitir configurar motivos de perda.
- RF006 — O sistema deve registrar auditoria de ações críticas.

## 11.2 Leads

- RF007 — O sistema deve permitir criar, editar, listar e arquivar leads.
- RF008 — O sistema deve permitir filtrar leads por status, origem, temperatura, responsável e período.
- RF009 — O sistema deve detectar possíveis duplicidades.
- RF010 — O sistema deve permitir desqualificar lead com motivo.
- RF011 — O sistema deve permitir converter lead em oportunidade.
- RF012 — O sistema deve manter histórico completo de atividades do lead.

## 11.3 Empresas e Contatos

- RF013 — O sistema deve permitir cadastrar empresas/prospects.
- RF014 — O sistema deve permitir cadastrar contatos vinculados ou não a empresas.
- RF015 — O sistema deve permitir marcar contato principal.
- RF016 — O sistema deve permitir registrar consentimento e opt-out.
- RF017 — O sistema deve permitir vincular empresa CRM a cliente Tyr após conversão.

## 11.4 Oportunidades

- RF018 — O sistema deve permitir criar, editar, listar e arquivar oportunidades.
- RF019 — O sistema deve permitir movimentar oportunidades no funil.
- RF020 — O sistema deve registrar histórico de mudança de etapa.
- RF021 — O sistema deve calcular valor total aberto por etapa.
- RF022 — O sistema deve permitir marcar oportunidade como ganha.
- RF023 — O sistema deve permitir marcar oportunidade como perdida com motivo obrigatório.
- RF024 — O sistema deve permitir converter oportunidade ganha em cliente/projeto no Tyr.
- RF025 — O sistema deve bloquear conversão sem dados mínimos obrigatórios.

## 11.5 Atividades

- RF026 — O sistema deve permitir criar atividades comerciais.
- RF027 — O sistema deve permitir concluir atividades.
- RF028 — O sistema deve permitir cancelar atividades.
- RF029 — O sistema deve listar atividades vencidas.
- RF030 — O sistema deve permitir criar próxima atividade ao concluir uma atividade.
- RF031 — O sistema deve vincular atividade a lead, empresa, contato ou oportunidade.

## 11.6 Propostas

- RF032 — O sistema deve permitir registrar propostas comerciais.
- RF033 — O sistema deve permitir vincular proposta a oportunidade.
- RF034 — O sistema deve permitir alterar status da proposta.
- RF035 — O sistema deve permitir anexar link/documento da proposta.
- RF036 — O sistema deve manter histórico de propostas por oportunidade.

## 11.7 Dashboards e Relatórios

- RF037 — O sistema deve exibir dashboard comercial.
- RF038 — O sistema deve exibir relatório de leads por origem.
- RF039 — O sistema deve exibir relatório de oportunidades por etapa/status.
- RF040 — O sistema deve exibir forecast comercial.
- RF041 — O sistema deve exibir atividades vencidas por responsável.
- RF042 — O sistema deve permitir exportação futura em CSV/XLSX.

---

## 12. Requisitos Não Funcionais

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
| RNF011 | Compatibilidade com deploy atual em Vercel |
| RNF012 | Integração segura com PostgreSQL/Supabase |
| RNF013 | Preparação para futura extração do CRM em produto separado |
| RNF014 | Proteção de dados pessoais conforme LGPD |
| RNF015 | Nenhum secret ou credencial deve ser versionado |

---

## 13. Segurança e LGPD

## 13.1 Dados pessoais tratados

- Nome.
- Email.
- Telefone.
- Cargo.
- Empresa.
- Histórico de comunicação.
- Origem do lead.
- Preferências de contato.
- Consentimento/opt-out.
- Observações comerciais.

## 13.2 Controles obrigatórios

- RBAC por perfil.
- Validação de autorização em todas as Server Actions.
- Registro de consentimento quando aplicável.
- Controle de opt-out.
- Logs sem emails/telefones/documentos em texto desnecessário.
- Auditoria para conversão, exclusão, alteração de status final e alteração de responsável.
- Soft delete.
- Política de retenção.
- Exportação/remoção futura de dados por titular.
- Rate limit em endpoints públicos futuros.
- Sanitização de uploads/links de propostas.
- Nenhum token, senha ou chave em documentação, logs ou commits.

## 13.3 Risco crítico já identificado

A documentação atual do Tyr aparenta conter credenciais de teste. Antes de evoluir Tyr/Freya para produção real, recomenda-se:

1. Remover credenciais versionadas da documentação.
2. Rotacionar imediatamente as credenciais expostas.
3. Criar fluxo seguro de usuário demo, se necessário.
4. Usar apenas variáveis de ambiente e secrets da plataforma.
5. Validar histórico Git se a credencial tiver sido versionada em commits anteriores.

---

## 14. Integrações

## 14.1 Integração Freya → Tyr

### Evento principal

- Oportunidade ganha no Freya gera cliente/projeto/financeiro inicial no Tyr.

### Estratégia no MVP

Se o Freya estiver no mesmo repositório/banco:

- Integração direta via services/Server Actions.
- Criação transacional quando possível.
- Vínculos por IDs internos.

### Estratégia futura

Se o Freya for extraído:

- API interna autenticada.
- Webhooks.
- Fila/event bus.
- Serviço de integração.
- Idempotência por `externalId`.

## 14.2 Integrações futuras

- WhatsApp Business.
- Email/SMTP.
- Google Calendar.
- Google Meet.
- Assinatura digital.
- Emissão de contrato.
- Gateway de pagamento.
- Importação CSV.
- Web forms do site.
- Landing pages.
- Tráfego pago/UTM.
- LinkedIn/outbound.

---

## 15. Banco de Dados — Proposta Inicial

## 15.1 Tabelas MVP

| Tabela | Objetivo |
|---|---|
| `crm_leads` | Leads comerciais |
| `crm_companies` | Empresas/prospects/contas |
| `crm_contacts` | Pessoas de contato |
| `crm_pipelines` | Funis comerciais |
| `crm_pipeline_stages` | Etapas do funil |
| `crm_opportunities` | Negociações/deals |
| `crm_opportunity_stage_history` | Histórico de mudanças de etapa |
| `crm_activities` | Atividades comerciais |
| `crm_proposals` | Propostas comerciais |
| `crm_loss_reasons` | Motivos de perda |
| `crm_audit_logs` | Auditoria crítica |
| `crm_integration_links` | Vínculos com Tyr |

## 15.2 Índices recomendados

- `crm_leads.email`
- `crm_leads.phone`
- `crm_leads.status`
- `crm_leads.source`
- `crm_leads.owner_id`
- `crm_leads.created_at`
- `crm_companies.document`
- `crm_companies.name`
- `crm_contacts.email`
- `crm_contacts.phone`
- `crm_opportunities.status`
- `crm_opportunities.stage_id`
- `crm_opportunities.owner_id`
- `crm_opportunities.expected_close_date`
- `crm_activities.status`
- `crm_activities.due_at`
- `crm_activities.owner_id`

---

## 16. Backend — Padrão de Implementação

## 16.1 Server Actions

Criar actions por domínio:

- `crm-leads.ts`
- `crm-companies.ts`
- `crm-contacts.ts`
- `crm-opportunities.ts`
- `crm-activities.ts`
- `crm-proposals.ts`
- `crm-conversion.ts`

## 16.2 Camada lib

Criar regras de negócio em `src/lib/crm`:

- schemas Zod.
- queries.
- services.
- normalização de email/telefone/documento.
- validações de duplicidade.
- permissões.
- conversão para Tyr.
- auditoria.

## 16.3 Validações obrigatórias

- Campos obrigatórios.
- Formato de email.
- Telefone normalizado.
- Valor monetário não negativo.
- Data prevista válida.
- Permissão por ação.
- Entidade existente antes de relacionamento.
- Motivo obrigatório para perda/desqualificação.
- Dados mínimos para conversão.

---

## 17. Frontend — Padrão de Implementação

## 17.1 Diretrizes

- Preservar design system existente.
- Usar componentes reutilizáveis.
- Evitar duplicação de formulários.
- Manter layout responsivo.
- Usar feedback visual após ações.
- Atualizar tela imediatamente após criação/edição/exclusão/mudança de etapa.
- Tratar loading, erro, vazio e sucesso.
- Manter acessibilidade básica.

## 17.2 Componentes compartilhados sugeridos

- `CrmPageHeader`
- `CrmKpiCard`
- `CrmStatusBadge`
- `CrmOwnerSelect`
- `CrmCompanySelect`
- `CrmContactSelect`
- `CrmLeadForm`
- `CrmOpportunityForm`
- `CrmActivityForm`
- `CrmPipelineBoard`
- `CrmTimeline`
- `CrmEmptyState`
- `CrmConfirmDialog`

---

## 18. Testes e Validação

## 18.1 Testes unitários

Criar testes para:

- validação de schemas;
- normalização de email/telefone/documento;
- regras de conversão;
- motivo obrigatório para perda/desqualificação;
- permissões do CRM;
- cálculo de forecast;
- detecção de duplicidade.

## 18.2 Testes E2E

Fluxos Playwright recomendados:

1. Login como admin/gestor comercial.
2. Criar lead.
3. Converter lead em oportunidade.
4. Mover oportunidade no funil.
5. Criar atividade.
6. Concluir atividade e criar próxima ação.
7. Criar proposta.
8. Marcar oportunidade como perdida com motivo.
9. Marcar oportunidade como ganha.
10. Converter oportunidade para Tyr.
11. Validar restrição de permissão por perfil.

## 18.3 Comandos esperados

```bash
npm install
npm run lint
npm run test
npm run test:e2e
npm run build
```

---

## 19. Roadmap de Entrega

## 19.1 Sprint 0 — Preparação e Segurança

### Objetivo

Preparar base técnica, segurança e fronteira Tyr/Freya.

### Entregas

- Remover/rotacionar credenciais versionadas.
- Definir estratégia de módulo Freya.
- Criar permissões CRM.
- Criar documentação inicial.
- Criar migration base.
- Criar menu CRM vazio.
- Criar seed opcional de pipeline padrão.

### Critérios de aceite

- Nenhuma credencial exposta.
- Build passa.
- Menu CRM aparece somente para perfis autorizados.
- Entidades CRM iniciais criadas no Prisma.
- Documentação atualizada.

---

## 19.2 Sprint 1 — Leads, Empresas e Contatos

### Objetivo

Criar base cadastral comercial.

### Entregas

- CRUD de leads.
- CRUD de empresas.
- CRUD de contatos.
- Filtros e busca.
- Validação com Zod.
- Histórico simples de criação/edição.
- Soft delete.

### Critérios de aceite

- Lead pode ser criado, editado, listado e arquivado.
- Empresa e contato podem ser vinculados.
- Duplicidade básica é alertada.
- Permissões são respeitadas.
- Testes unitários principais criados.

---

## 19.3 Sprint 2 — Funil e Oportunidades

### Objetivo

Criar gestão de pipeline comercial.

### Entregas

- Cadastro de pipeline padrão.
- Etapas do funil.
- CRUD de oportunidades.
- Kanban com mudança de etapa.
- Histórico de mudança.
- Status ganho/perdido.
- Motivo obrigatório de perda.

### Critérios de aceite

- Oportunidade aparece no Kanban.
- Oportunidade muda de etapa.
- Histórico é registrado.
- Perda exige motivo.
- Valores por etapa são calculados.

---

## 19.4 Sprint 3 — Atividades e Follow-ups

### Objetivo

Controlar rotina comercial.

### Entregas

- CRUD de atividades.
- Atividades vinculadas a lead/empresa/contato/oportunidade.
- Conclusão de atividade.
- Próxima ação.
- Atividades vencidas no dashboard.

### Critérios de aceite

- Atividade pode ser criada e concluída.
- Atividades vencidas aparecem em destaque.
- Conclusão pode gerar próxima ação.
- Vendedor visualiza atividades próprias.

---

## 19.5 Sprint 4 — Propostas e Conversão para Tyr

### Objetivo

Fechar ciclo comercial e integrar com ERP.

### Entregas

- Registro de propostas.
- Status de proposta.
- Anexo/link.
- Marcar oportunidade como ganha.
- Conversão para cliente/projeto no Tyr.
- Vínculo entre oportunidade e entidade Tyr.
- Auditoria da conversão.

### Critérios de aceite

- Proposta pode ser criada e vinculada.
- Oportunidade ganha pode iniciar conversão.
- Cliente/projeto não duplica se já existir.
- Conversão gera vínculo e histórico.
- Falha de conversão é tratada com mensagem clara.

---

## 19.6 Sprint 5 — Dashboard e Relatórios

### Objetivo

Dar visão gerencial do CRM.

### Entregas

- KPIs comerciais.
- Gráficos de lead por origem.
- Oportunidades por etapa.
- Forecast.
- Ranking por responsável.
- Atividades vencidas.
- Relatório básico filtrável.

### Critérios de aceite

- Dashboard carrega com dados reais.
- Filtros por período funcionam.
- Usuário sem permissão não acessa relatórios restritos.
- Build e testes passam.

---

## 20. Backlog Futuro

- Importação CSV de leads.
- Integração com formulário do site.
- Integração com WhatsApp.
- Integração com email.
- Agenda/calendário.
- Templates de proposta.
- Geração de PDF.
- Assinatura eletrônica.
- Automação de follow-up.
- Pontuação de lead.
- SLA comercial.
- Metas por vendedor.
- Forecast ponderado.
- Integração com campanhas.
- Webhooks.
- API pública controlada.
- Portal do cliente conectado ao pós-venda.
- Extração do Freya para repositório próprio.

---

## 21. Riscos Técnicos

| Risco | Impacto | Mitigação |
|---|---|---|
| Misturar ERP e CRM sem fronteira | Alto | Prefixar entidades, pastas e permissões CRM |
| Duplicidade de cliente/empresa | Alto | Normalização e checagem por documento/email |
| Credenciais em documentação | Alto | Remover, rotacionar, usar secrets |
| Falha na conversão Freya → Tyr | Alto | Transação, idempotência e logs seguros |
| Crescimento do monolito | Médio | Domínio isolado e futura extração |
| Dados pessoais sem consentimento | Alto | Campos LGPD, opt-out e política de retenção |
| Performance em listagens | Médio | Paginação, filtros e índices |
| Permissões insuficientes | Alto | RBAC por ação e testes de autorização |
| Falta de testes E2E | Médio | Cobrir fluxos comerciais críticos |

---

## 22. Critérios de Aceite do MVP

O MVP do Freya será considerado entregue quando:

- CRM possuir menu e rotas protegidas.
- Perfis comerciais estiverem definidos.
- Leads puderem ser gerenciados.
- Empresas e contatos puderem ser gerenciados.
- Oportunidades puderem ser criadas e movidas em funil.
- Atividades puderem ser registradas e concluídas.
- Propostas puderem ser registradas.
- Oportunidade ganha puder ser convertida para Tyr.
- Dashboard comercial exibir KPIs básicos.
- Permissões forem respeitadas.
- Dados pessoais tiverem tratamento mínimo de LGPD.
- Build, lint, testes unitários e E2E principais estiverem passando.
- Documentação técnica estiver atualizada.

---

## 23. Plano Técnico de Implementação

### Branch sugerida

```bash
feature/freya-crm-mvp
```

### Commits sugeridos

```bash
security(docs): remove credenciais expostas da documentacao
feat(crm): adiciona modelos base do freya
feat(crm): adiciona permissoes e menu do crm
feat(crm-leads): adiciona gestao de leads
feat(crm-contas): adiciona empresas e contatos
feat(crm-pipeline): adiciona funil e oportunidades
feat(crm-atividades): adiciona atividades comerciais
feat(crm-propostas): adiciona registro de propostas
feat(crm-integracao): adiciona conversao de oportunidade para tyr
feat(crm-dashboard): adiciona indicadores comerciais
test(crm): adiciona testes dos fluxos principais
docs(crm): documenta escopo e uso do freya
```

### Arquivos prováveis de alteração

```text
prisma/schema.prisma
src/lib/auth/roles.ts
src/components/header.tsx
src/app/(protected)/crm/**
src/app/actions/crm-*.ts
src/components/crm/**
src/lib/crm/**
tests/unit/crm/**
tests/e2e/crm/**
README.md
ARQUITETURA.md
BANCO_DADOS.md
ROADMAP.md
RUNBOOK.md
```

---

## 24. Recomendação Final

O Freya CRM deve ser criado como uma camada comercial separada do Tyr ERP, mesmo que inicialmente esteja no mesmo repositório para acelerar o MVP.

A arquitetura atual do Tyr permite reaproveitar autenticação, RBAC, Prisma, UI, Server Actions, dashboard e testes. Porém, a implementação deve preservar a separação de domínios:

- **Freya vende, qualifica, acompanha e converte.**
- **Tyr opera, entrega, cobra e administra.**

Essa separação reduz acoplamento, melhora clareza do produto e permite que, no futuro, Freya evolua para um sistema independente sem comprometer o ERP.

---

## 25. Próximos Passos Recomendados

1. Aprovar este escopo.
2. Decidir se o MVP será no mesmo repositório ou em repositório próprio.
3. Remover/rotacionar qualquer credencial exposta.
4. Criar branch `feature/freya-crm-mvp`.
5. Criar plano técnico detalhado antes da implementação.
6. Implementar Sprint 0.
7. Validar build, lint, testes e permissões.
8. Avançar por sprints curtas e revisáveis.

---

## 26. Observação sobre Validação

Este documento foi criado por análise remota do repositório via integração GitHub e leitura dos arquivos principais. Não foram executados comandos locais como `npm install`, `npm run build`, `npm run lint` ou testes automatizados, pois a solicitação foi de análise e criação de escopo em Markdown para download, sem alteração de código no repositório.
