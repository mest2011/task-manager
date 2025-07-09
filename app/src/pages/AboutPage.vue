<template>
  <div class="container py-4">
    <h1 class="h3 mb-3">Sobre o Projeto</h1>

    <p>
      <strong>Task Manager</strong> é uma aplicação SPA desenvolvida com <strong>Vue.js 3</strong> utilizando
      <strong>Composition API</strong> como parte de um teste técnico.
    </p>

    <p>
      O sistema permite criar, listar, marcar como concluídas, remover tarefas, com persistência simulada via <code>json-server</code>.
    </p>

    <h2 class="h5 mt-4">Tecnologias utilizadas</h2>
    <ul>
      <li>Vue 3 + Composition API</li>
      <li>Vite + TypeScript</li>
      <li>Vue Router (rotas SPA)</li>
      <li>Pinia (gerenciamento de estado)</li>
      <li>Axios (requisições HTTP)</li>
      <li>Bootstrap 5</li>
      <li>Modo claro e escuro com classes dinâmicas</li>
      <li>JSON Server como mock API</li>
    </ul>

    <h2 class="h5 mt-4">Rotas disponíveis</h2>
    <ul>
      <li><code>/tasks</code> – Gerenciamento das tarefas e subtarefas</li>
      <li><code>/about</code> – Página atual com informações do projeto</li>
    </ul>

    <p class="mt-4 text-muted">
      Desenvolvido por Miguel Teixeira – Julho de 2025
    </p>
    <div class="mt-5">
      <h2 class="h5">Redes e Contato</h2>
      <ul class="list-unstyled ">
        <li>

          <a href="https://www.linkedin.com/in/mest/" class="text-decoration-none" target="_blank"
            rel="noopener noreferrer">
            LinkedIn – @mest
          </a>
        </li>
        <li>

          <a href="https://github.com/mest2011" class="text-decoration-none" target="_blank" rel="noopener noreferrer">
            GitHub – @mest2011
          </a>
        </li>
        <li>

          <a href="https://mesttech.com.br/" class="text-decoration-none" target="_blank" rel="noopener noreferrer">
            Blog – mesttech.com.br
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>
