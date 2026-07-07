# Freya CRM

Sistema comercial e de relacionamento com clientes da Dev-RuiDiniz.

## Stack

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **UI:** Tailwind CSS + shadcn/ui + lucide-react
- **Banco:** PostgreSQL via Supabase (planejado)
- **ORM:** Prisma (planejado)
- **Auth:** Supabase Auth (planejado)
- **Testes:** Vitest + Playwright (planejado)

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # ambiente de desenvolvimento
npm run build      # build de produção
npm run lint       # lint
```

## Estrutura

```text
src/
├── app/
│   ├── (auth)/            # rotas de autenticação (planejado)
│   ├── (protected)/crm/   # rotas protegidas do CRM
│   │   ├── dashboard/
│   │   ├── leads/
│   │   ├── empresas/
│   │   ├── contatos/
│   │   ├── oportunidades/
│   │   ├── funil/
│   │   ├── atividades/
│   │   ├── propostas/
│   │   ├── relatorios/
│   │   └── configuracoes/
│   └── actions/           # server actions (planejado)
├── components/
│   ├── ui/                # componentes shadcn/ui
│   └── crm/               # componentes do CRM (planejado)
└── lib/
    ├── utils.ts           # utilitários (cn)
    └── crm/               # regras de negócio do CRM (planejado)
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