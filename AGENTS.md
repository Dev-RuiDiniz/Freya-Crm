# AGENTS.md — Regras de Execução de Agentes

**Projeto:** Freya CRM  
**Atualizado em:** 07/07/2026  
**Status:** Planejamento / Governança inicial

---

## 1. Objetivo deste arquivo

O `AGENTS.md` define oficialmente:

- Como agentes de IA, automações e colaboradores técnicos devem operar no projeto.
- Como investigar o repositório antes de modificar qualquer arquivo.
- Como documentar mudanças em conjunto com o código.
- Como usar SDD (Specification-Driven Development) e TDD (Test-Driven Development).
- Como padronizar commits em pt-BR usando Conventional Commits.
- Como manter contexto, roadmap, arquitetura, banco e relatório sempre atualizados.

---

## 2. Princípios obrigatórios

- Sempre buscar contexto antes de alterar qualquer arquivo.
- Sempre trabalhar com mudanças pequenas e rastreáveis.
- Sempre atualizar documentação junto com código.
- Nunca inventar comportamento, endpoints, schemas ou regras de negócio.
- Nunca mascarar erro com mock, stub ou fallback falso sem documentação explícita.
- Nunca expor secrets, tokens, senhas ou credenciais em código, documentação ou commits.
- Nunca fazer commit ou push sem autorização explícita do usuário.
- Nunca deixar o projeto em estado quebrado.
- Sempre registrar decisões relevantes no `CONTEXTO.md`.
- Sempre atualizar o `RELATORIO.md` ao final de cada sessão.

---

## 3. Regras de commit em pt-BR usando Conventional Commits

Todo commit deve ser em português do Brasil e seguir o formato Conventional Commits adaptado.

### 3.1 Tipos permitidos

| Tipo | Descrição |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Documentação |
| `test:` | Testes |
| `refactor:` | Refatoração sem mudança funcional |
| `style:` | Formatação sem mudança lógica |
| `chore:` | Tarefas auxiliares, scripts, configurações simples |
| `ci:` | Pipeline, deploy e integração contínua |
| `perf:` | Melhoria de performance |
| `build:` | Mudanças de build, dependências ou empacotamento |
| `revert:` | Reversão de alteração anterior |

### 3.2 Formato obrigatório

```text
<tipo>(<escopo>): <descrição curta em pt-BR>

<corpo opcional explicando o motivo, impacto e arquivos principais>
```

### 3.3 Exemplos

```text
feat(auth): adiciona autenticação com JWT
fix(api): corrige validação de payload no cadastro de lead
docs(arquitetura): atualiza fluxo de autenticação
test(banco): adiciona testes para migrations de leads
refactor(frontend): reorganiza componentes do dashboard
feat(crm-leads): adiciona gestão de leads
feat(crm-pipeline): adiciona funil e oportunidades
```

### 3.4 Regras adicionais

- Um commit por tarefa concluída.
- Não misturar mudanças não relacionadas no mesmo commit.
- Descrição curta no imperativo ou presente.
- Escopo deve refletir a área alterada: `api`, `auth`, `frontend`, `backend`, `banco`, `docs`, `infra`, `tests`, `dashboard`, `crm`, `crm-leads`, `crm-pipeline`, `crm-atividades`, etc.
- Antes de commit, validar testes, build e documentação.
- Commit e push só podem ser feitos quando o usuário autorizar explicitamente.

---

## 4. SDD — Specification-Driven Development

Toda funcionalidade deve começar por especificação, não por código.

### 4.1 Fluxo obrigatório

Antes de codificar, o agente deve:

1. Ler documentação existente (`ESCOPO.md`, `ARQUITETURA.md`, `BANCO_DADOS.md`, `ROADMAP.md`, `CONTEXTO.md`).
2. Confirmar o requisito com o usuário ou com a documentação.
3. Criar ou atualizar especificação em documentação.
4. Definir critérios de aceite.
5. Mapear impacto em:
   - arquitetura
   - banco de dados
   - API / Server Actions
   - frontend
   - testes
   - infraestrutura
   - segurança
6. Registrar decisões relevantes em `CONTEXTO.md`.
7. Atualizar `ROADMAP.md` se a tarefa fizer parte de fase, épico ou história.

### 4.2 Toda especificação deve conter

- Objetivo
- Contexto
- Regras de negócio
- Fluxo esperado
- Critérios de aceite
- Impacto técnico
- Testes necessários
- Riscos
- Dependências

---

## 5. TDD — Test-Driven Development

### 5.1 Fluxo obrigatório

1. **RED** — escrever ou ajustar teste que falha.
2. **GREEN** — implementar o mínimo necessário para passar.
3. **REFACTOR** — melhorar mantendo testes verdes.

### 5.2 Regras

- Toda feature nova precisa de teste.
- Todo bug corrigido precisa de teste de regressão.
- Toda regra de negócio crítica precisa de teste.
- Toda migration relevante precisa ser validada.
- Não reduzir cobertura sem justificativa registrada em `RELATORIO.md`.
- Se a stack não tiver testes configurados, registrar isso e propor configuração inicial.

### 5.3 Comandos da stack planejada (Next.js + Vitest + Playwright)

```bash
npm install          # instalação de dependências
npm run dev          # ambiente de desenvolvimento
npm run lint         # lint
npm run test         # testes unitários (Vitest)
npm run test:e2e     # testes E2E (Playwright)
npm run build        # build de produção
```

> **Observação:** Os comandos acima são os esperados conforme o escopo. Ainda não há `package.json` no repositório. `PENDENTE DE VALIDAÇÃO` até que o projeto seja inicializado.

### 5.4 Comandos de banco (Prisma)

```bash
npx prisma migrate dev    # criar e aplicar migration em desenvolvimento
npx prisma migrate deploy # aplicar migrations em produção
npx prisma generate       # gerar cliente Prisma
npx prisma studio         # interface visual do banco
npx prisma db seed        # executar seeds
```

---

## 6. Atualização obrigatória de documentação

Toda tarefa técnica deve atualizar documentação.

### 6.1 Arquivos que devem ser atualizados conforme impacto

| Arquivo | Quando atualizar |
|---|---|
| `ARQUITETURA.md` | Mudança estrutural, módulo, fluxo ou integração |
| `BANCO_DADOS.md` | Mudança em tabelas, models, migrations, índices, constraints ou seeds |
| `ESCOPO.md` | Mudança de requisito, regra de negócio ou limite do projeto |
| `ROADMAP.md` | Mudança de fase, épico, prioridade ou tarefa |
| `CONTEXTO.md` | Decisão técnica, bloqueio, mudança importante ou estado novo |
| `RELATORIO.md` | Ao final de cada sessão/dia de trabalho |

### 6.2 Checklist obrigatório por tarefa

```markdown
- [ ] Requisito compreendido
- [ ] Especificação criada/atualizada
- [ ] Teste criado/atualizado
- [ ] Implementação validada
- [ ] Documentação atualizada
- [ ] Arquitetura atualizada, se aplicável
- [ ] Banco de dados atualizado, se aplicável
- [ ] Roadmap atualizado, se aplicável
- [ ] Contexto atualizado
- [ ] Relatório do dia atualizado
```

---

## 7. Segurança e integridade

- Nunca expor `.env`, tokens, senhas, chaves privadas ou credenciais.
- Nunca copiar secrets para documentação.
- Antes de registrar exemplos, usar valores fictícios seguros.
- Não criar backdoors, bypass de autenticação ou desativar validações sem autorização.
- Validar entradas de usuário no frontend e backend.
- Documentar riscos de segurança encontrados.
- Registrar pendências críticas em `CONTEXTO.md`.
- Dados pessoais (LGPD): nome, email, telefone, cargo, empresa, histórico de comunicação — tratar conforme política de proteção de dados.
- Logs não devem conter dados sensíveis em texto plano.

---

## 8. Conduta para agentes

- Ser conservador em mudanças.
- Priorizar consistência com padrões existentes.
- Não reescrever o projeto sem necessidade.
- Não substituir bibliotecas principais sem justificativa.
- Não remover testes.
- Não apagar histórico de documentação.
- Em caso de dúvida, investigar antes de perguntar.
- Se ainda houver dúvida, registrar como `A CONFIRMAR`.
- Preservar separação de domínios: Freya (CRM/comercial) vs Tyr (ERP/operacional).
- Usar prefixo `Crm` em entidades Prisma do Freya.
- Não misturar models CRM com models operacionais do Tyr sem prefixo.
