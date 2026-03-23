# Sistema de Orçamentos SaaS

MVP de um sistema de gestão de orçamentos estilo CRM, desenvolvido com React + Vite e Supabase.

## 🚀 Funcionalidades

- Autenticação com Supabase Auth
- Dashboard com métricas e visão geral
- Gestão completa de orçamentos (CRUD)
- Filtros e busca de orçamentos
- Página de detalhe do orçamento com:
  - Serviços e materiais
  - Cálculo automático de totais
  - Desconto
  - Status editável
- Design responsivo e moderno

## 📦 Stack

- **Frontend**: React 18 + Vite
- **UI**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Auth/DB**: Supabase
- **Ícones**: Lucide React

## 🔧 Configuração

### 1. Clone e instalação

```bash
npm install
```

### 2. Variáveis de ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

### 3. Banco de dados

Execute o schema SQL fornecido no Supabase Studio para criar as tabelas:

- `clients`
- `quotes`
- `quote_items`

Os triggers de cálculo automático e geração de números de orçamento serão criados automaticamente.

### 4. Auth

Configure o Supabase Auth:
- Provider: Email/Senha
- Crie usuários admin manualmente ou via SQL

## 🏃‍♂️ Execução

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/          # Botões, inputs, modais, spinners
│   ├── layout/          # Layout admin, sidebar, protected route
│   ├── quotes/          # Componentes específicos de orçamentos
│   └── ui/              # Componentes UI (card, badge, etc)
├── pages/
│   └── admin/           # Páginas: Login, Dashboard, Quotes, QuoteDetail
├── lib/
│   ├── supabase/        # Cliente Supabase, auth, queries
│   ├── utils/           # Formatadores, cálculos, validadores
│   └── constants/       # Status de orçamento, tipos de item
├── hooks/               # Custom hooks (useAuth, useQuotes, etc)
├── styles/              # CSS global, tema
└── App.jsx              # Rotas principais
```

## 🎯 Fluxo de Dados

1. **Autenticação**: Supabase Auth armazena token automaticamente
2. **Rotas protegidas**: `ProtectedRoute` redireciona para login se não autenticado
3. **API**: Supabase JS Client diretamente nos hooks/components
4. **Cálculos**: Real-time no frontend, com cópia no banco via triggers

## 🔐 Segurança

- Row Level Security (RLS) pode ser ativado no Supabase
- Para MVP single-tenant: RLS desabilitado
- Para multi-tenant: adicionar `user_id` nas tabelas e criar políticas

## 🧪 Testes

Este é um MVP focado em funcionalidade. Recomenda-se:

1. Testar fluxo completo de criação/edição de orçamentos
2. Validar cálculos de totais
3. Testar filtros e busca
4. Verificar responsividade em mobile

## 📝 Notas

- Schema normalizado e escalável
- Triggers automáticos para cálculos no banco
- Design limpo e moderno (Tailwind)
- Foco em usabilidade para negócios reais

## 📄 Licença

MIT
