# 👥 Gestão de Pessoas

Aplicação web para **gerenciamento de pessoas**, desenvolvida com foco em uma interface moderna, responsiva e de fácil utilização.

🔗 **Acesse a aplicação:**
👉 [**gest-o-de-pessoas-chi.vercel.app**](https://gest-o-de-pessoas-chi.vercel.app/)

---

## 📋 Sobre o projeto

O **Gestão de Pessoas** é uma aplicação desenvolvida para facilitar o cadastro, consulta, atualização e gerenciamento de informações de pessoas.

O projeto foi desenvolvido utilizando uma arquitetura baseada em **Frontend + API + Banco de Dados**, permitindo a comunicação entre a interface da aplicação e o backend responsável pelo gerenciamento dos dados.

---

## 🚀 Funcionalidades

* ✅ Cadastro de pessoas
* ✅ Listagem de pessoas
* ✅ Consulta de informações
* ✅ Atualização de dados
* ✅ Exclusão de registros
* ✅ Interface responsiva
* ✅ Integração com API REST
* ✅ Persistência de dados em banco PostgreSQL
* ✅ Validação e tratamento de requisições
* ✅ Comunicação entre frontend e backend

---

## 🛠️ Tecnologias utilizadas

### 🎨 Frontend

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router">
</p>

### ⚙️ Backend

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/REST_API-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="REST API">
</p>

### 🗄️ Banco de dados

<p>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Neon-000000?style=for-the-badge&logo=neon&logoColor=white" alt="Neon">
</p>

### ☁️ Deploy e ferramentas

<p>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" alt="Render">
</p>

---

## 🏗️ Arquitetura

A aplicação utiliza uma arquitetura dividida em três principais camadas:

```text
┌─────────────────────┐
│      Frontend       │
│   React + Vite      │
└──────────┬──────────┘
           │
           │ HTTP / REST API
           ▼
┌─────────────────────┐
│       Backend       │
│ Node.js + Express   │
└──────────┬──────────┘
           │
           │ SQL
           ▼
┌─────────────────────┐
│     PostgreSQL      │
│        Neon         │
└─────────────────────┘
```

O frontend realiza as requisições para a API, enquanto o backend é responsável pelas regras da aplicação e pela comunicação com o banco de dados.

---

## 🌐 Deploy

A aplicação está disponível online através da Vercel:

### 🔗 Aplicação

👉 [**gest-o-de-pessoas-chi.vercel.app**](https://gest-o-de-pessoas-chi.vercel.app/)

A infraestrutura do projeto utiliza serviços de hospedagem separados para a aplicação frontend, API e banco de dados.

---

## 📁 Estrutura do projeto

Uma possível organização do projeto:

```text
API-gestao-de-pessoas/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── database/
│   ├── services/
│   └── app.ts
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎯 Objetivos

O projeto foi desenvolvido com o objetivo de aplicar conhecimentos de:

* Desenvolvimento Frontend
* Desenvolvimento Backend
* TypeScript
* APIs REST
* Banco de dados relacionais
* Integração entre aplicações
* Componentização
* Responsividade
* Versionamento com Git e GitHub
* Deploy de aplicações web

---

## 👨‍💻 Autor

**Michael Charlys Moreira da Silva**

🎓 Graduando em Ciência da Computação — UFC

💻 Desenvolvedor Fullstack

🔗 GitHub: [Michael7217](https://github.com/Michael7217)

---

## ⭐ Projeto

Se este projeto foi útil ou interessante para você, considere deixar uma ⭐ no repositório!
