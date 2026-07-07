# Freya CRM

Sistema comercial e de relacionamento com clientes da Dev-RuiDiniz.

## Stack

- **Monorepo:** Turborepo + npm workspaces
- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **UI:** Tailwind CSS + shadcn/ui + lucide-react
- **Banco:** PostgreSQL via Supabase (planejado)
- **ORM:** Prisma (planejado)
- **Auth:** Supabase Auth (planejado)
- **Testes:** Vitest + Playwright (planejado)

## Comandos

```bash
npm install              # instalar dependências (raiz)
npm run dev              # ambiente de desenvolvimento (todas as apps)
npm run dev:web          # apenas a app web
npm run build            # build de produção (turbo)
npm run lint             # lint (turbo)
```

## Estrutura

```text
Freya-Crm/
├── apps/
│   └── web/                         # app Next.js (@freya-crm/web)
│       └── src/
│           ├── app/
│           │   ├── (auth)/          # rotas de autenticação (planejado)
│           │   ├── (protected)/crm/ # rotas protegidas do CRM
│           │   │   ├── dashboard/
│           │   │   ├── leads/
│           │   │   ├── empresas/
│           │   │   ├── contatos/
│           │   │   ├── oportunidades/
│           │   │   ├── funil/
│           │   │   ├── atividades/
│           │   │   ├── propostas/
│           │   │   ├── relatorios/
│           │   │   └── configuracoes/
│           │   └── actions/         # server actions (planejado)
│           └── components/
│               └── crm/             # componentes do CRM (planejado)
├── packages/
│   ├── ui/                          # componentes shadcn/ui (@repo/ui)
│   │   └── src/
│   │       ├── button.tsx
│   │       ├── utils.ts             # cn()
│   │       └── index.ts
│   └── lib/                         # regras de negócio CRM (@repo/lib)
│       └── src/
│           ├── crm/
│           └── index.ts
├── turbo.json
└── package.json                     # workspace root
```

## Documentação

- [`AGENTS.md`](./AGENTS.md) — Regras de execução de agentes
- [`ARQUITETURA.md`](./ARQUITETURA.md) — Arquitetura do sistema
- [`BANCO_DADOS.md`](./BANCO_DADOS.md) — Arquitetura de banco de dados
- [`ESCOPO.md`](./ESCOPO.md) — Escopo do projeto
- [`ROADMAP.md`](./ROADMAP.md) — Roadmap de desenvolvimento
- [`CONTEXTO.md`](./CONTEXTO.md) — Contexto vivo do projeto
- [`RELATORIO.md`](./RELATORIO.md) — Registro diário
- [`escopo-freya-crm.md`](./escopo-freya-crm.md) — Documento de escopo original