# Fernanda & Raphael — 10 anos de casados

Site de Save the Date + RSVP para o aniversário de 10 anos de casamento da Fernanda & Raphael, celebrado em **29 de agosto de 2026** em New York.

- ✨ Identidade visual em aquarela (verde oliva + azul céu)
- 📝 Formulário público de RSVP
- 🔐 Painel privado para os anfitriões (Fernanda) com login e lista completa de confirmações
- 💸 100% gratuito (Vercel + Firebase Spark)

---

## 📦 Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** + **Framer Motion** + **GSAP**-ready
- **Lenis** (smooth scroll)
- **Firebase** Firestore + Authentication
- **Vercel** (hosting)

---

## 🚀 Passo a passo para colocar o site no ar

### 1. Instalar dependências

No terminal, dentro da pasta do projeto:

```bash
npm install
```

### 2. Criar projeto no Firebase

1. Acesse https://console.firebase.google.com
2. Clique em **Add project** → nome sugerido: `fernanda-raphael-10anos`
3. **Desabilite o Google Analytics** (não precisa)
4. Aguarde a criação

### 3. Habilitar Firestore

1. No menu lateral: **Build → Firestore Database**
2. Clique em **Create database**
3. Escolha **Production mode**
4. Localização: `southamerica-east1` (São Paulo)
5. Clique em **Enable**

### 4. Habilitar Authentication

1. No menu lateral: **Build → Authentication**
2. Clique em **Get started**
3. Em **Sign-in providers**, ative **Email/Password**
4. Vá em **Users → Add user**
5. Crie o usuário da Fernanda:
   - Email: (email que ela vai usar)
   - Senha: `G@danha123`

### 5. Pegar credenciais do cliente (públicas)

1. No Firebase Console → ⚙️ **Project Settings**
2. Aba **General** → role até **Your apps**
3. Clique em **Web** (ícone `</>`)
4. Registre com nome `site-aniversario`
5. Copie o objeto `firebaseConfig` — você vai precisar dos valores

### 6. Pegar credenciais do Admin SDK (secretas)

1. Ainda em Project Settings → aba **Service accounts**
2. Clique em **Generate new private key**
3. Baixe o arquivo JSON (guarde em local seguro)
4. Do JSON você vai usar: `project_id`, `client_email`, `private_key`

### 7. Configurar variáveis de ambiente locais

Na raiz do projeto, copie `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Preencha com os valores que você pegou:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=fernanda-raphael-10anos.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=fernanda-raphael-10anos
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=fernanda-raphael-10anos.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

FIREBASE_ADMIN_PROJECT_ID=fernanda-raphael-10anos
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxx@fernanda-raphael-10anos.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n"
```

> ⚠️ A `FIREBASE_ADMIN_PRIVATE_KEY` deve vir entre aspas duplas e manter os `\n` literais.

### 8. Regras de segurança do Firestore

No Firebase Console → **Firestore → Rules**, cole:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvps/{docId} {
      allow read: if request.auth != null;
      allow write: if false;
    }
  }
}
```

> Isso impede que qualquer pessoa leia ou escreva direto. As escritas só acontecem via API (`/api/rsvp`) autenticada pelo Admin SDK, e leituras só acontecem com login no painel.

### 9. Rodar localmente

```bash
npm run dev
```

Abra `http://localhost:3000` e teste o formulário. Depois acesse `http://localhost:3000/admin` e faça login com as credenciais que você criou no passo 4.

### 10. Deploy no Vercel

1. Suba o código para um repositório GitHub
2. Acesse https://vercel.com → **Add New Project**
3. Importe o repositório
4. Em **Environment Variables**, cole todas as variáveis do `.env.local`
5. Clique em **Deploy**
6. Em ~2 minutos você terá a URL `https://algo.vercel.app` pronta para compartilhar

> Para customizar o subdomínio Vercel: Project Settings → Domains → edite `seu-projeto.vercel.app`

---

## 🔑 Credenciais da Fernanda

- **URL do painel:** `https://<subdominio>.vercel.app/admin`
- **Senha:** `G@danha123`
- **Email:** o que você cadastrar no Firebase no passo 4

---

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx             # Fontes + providers
│   ├── page.tsx               # Home (save the date)
│   ├── globals.css            # Estilos globais + animações
│   ├── admin/
│   │   └── page.tsx           # Login + dashboard da anfitriã
│   └── api/rsvp/
│       └── route.ts           # Endpoint para receber confirmações
├── components/
│   ├── Hero.tsx
│   ├── Invitation.tsx
│   ├── EventInfo.tsx
│   ├── Gallery.tsx
│   ├── RSVPForm.tsx
│   ├── Footer.tsx
│   ├── Countdown.tsx
│   ├── SmoothScroll.tsx
│   └── illustrations/         # SVGs em aquarela
├── lib/
│   ├── firebase.ts            # Cliente Firebase
│   ├── firebase-admin.ts      # Admin SDK (server-only)
│   ├── schema.ts              # Validação Zod
│   └── utils.ts
└── hooks/
    ├── useLenisScroll.ts
    └── useCountdown.ts
```

---

## ✏️ Como atualizar informações depois

Quando a Fernanda confirmar horário, endereço e dress code, edite:

- `src/components/EventInfo.tsx` — campos `value` e `sub` em cada item

Depois rode `git push` — a Vercel faz o redeploy automático em segundos.
