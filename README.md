# Task Manager

<br>

<p align="center">
  <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" alt="Vue.js" width="50" height="50"/>
  </a>
  &nbsp;
  &nbsp;
  &nbsp;
  <a href="https://vite.dev/" target="_blank" rel="noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png" alt="TypeScript" width="50" height="50"/>
  </a>
  &nbsp;
  &nbsp;
  &nbsp;
  <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
    <img src="https://camo.githubusercontent.com/ecd695fb1ffadab6633f9fcdffaeebc58f3cca722260f0dec7dc607bd9d0e740/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" alt="TypeScript" width="50" height="50"/>
  </a>
  &nbsp;
  &nbsp;
  &nbsp;
  <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/1200px-Pinialogo.svg.png" alt="TypeScript" width="50" height="50"/>
  </a>
  &nbsp;
  &nbsp;
  &nbsp;
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" height="50"/>
  </a>
  &nbsp;
  &nbsp;
  &nbsp;
  <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt="Docker" width="50" height="50"/>
  </a>
  &nbsp;
  &nbsp;
  &nbsp;
  <a href="https://github.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" width="50" height="50"/>
  </a>
  &nbsp;
  &nbsp;
  &nbsp;
  <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="50" height="50"/>
  </a>
</p>

<br>

## Sobre

Aplicação SPA (Single Page Application) para gerenciamento de tarefas, desenvolvida com **Vue.js 3**, como parte de um teste técnico.

---

## Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/) + Composition API
- [Vue Router](https://router.vuejs.org/) – Rotas SPA
- [Pinia](https://pinia.vuejs.org/) – Gerenciamento de estado
- [Axios](https://axios-http.com/) – Requisições HTTP
- [Bootstrap 5](https://getbootstrap.com/) – Estilização com customizações e dark mode
- [JSON Server](https://github.com/typicode/json-server) – Mock API REST
- [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/) – Ferramentas de build modernas

---

## Funcionalidades

- Listar tarefas e subtarefas
- Criar tarefas e subtarefas
- Marcar como concluída
- Remover tarefas e subtarefas
- Modo escuro e claro (toggle)
- Integração com API REST fake (`json-server`)
- Componentização completa (Vue 3)
- Estado global gerenciado via Pinia

---

## Rodando o projeto com Docker

#### Pré-requisitos

- Docker instalado ([https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/))
- Docker Compose instalado

---

#### 1. Clone o projeto

```bash
git clone https://github.com/mest2011/task-manager.git
cd task-manager
```

---

#### 2. Build e startup dos containers

Execute o comando abaixo na raiz do projeto para subir o frontend (Vue.js) e o backend (JSON Server):

```bash
docker-compose up -d --build
```

---

#### 3. Acessando a aplicação

- Frontend Vue.js: [http://localhost:5173](http://localhost:5173)
- Backend JSON Server (API fake): [http://localhost:3000/tasks](http://localhost:3000/tasks)

---

#### 4. Considerações

- O backend lê e salva os dados no arquivo `./api/db.json`, garantindo persistência local.
- O frontend está configurado para consumir a API via `http://localhost:3000`.
- Hot reload funciona normalmente, pois o código está montado via volume no container frontend.
- Para parar os containers, use `Ctrl+C` no terminal e, se quiser, remova os containers com:

```bash
docker-compose down
```

---

#### 5. Rodar em ambiente de produção

Para buildar o frontend e gerar arquivos estáticos, rode dentro do container ou localmente:

```bash
docker-compose run frontend yarn build
```

---

## Redes e Contato

Sinta-se à vontade para me seguir ou entrar em contato:

[LinkedIn](linkedin.com/in/mest/)

[GitHub](https://github.com/mest2011)

[Blog pessoal](https://mesttech.com.br)
