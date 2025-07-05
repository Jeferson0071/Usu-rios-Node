# 📚 Projeto de Aprendizado com Node.js

Este projeto faz parte do meu aprendizado em **Node.js**, onde desenvolvi uma aplicação de **cadastro de usuários** com back-end utilizando Express e testes via Postman.

---

## 🚀 Tecnologias e Ferramentas Utilizadas

- **Node.js** – Plataforma principal do projeto.
- **Express.js** – Framework para gerenciamento de rotas e requisições.
- **EJS** – Template engine para renderizar HTML com JavaScript.
- **Postman** – Para testar as rotas da API (GET, POST, etc.).
- **dotenv** – Para variáveis de ambiente seguras.
- **Git e GitHub** – Para versionamento e hospedagem do projeto.
- **Visual Studio Code** – Editor de código.
- **Estrutura MVC** – Organização em Model, View e Controller.

---

## ✨ Funcionalidades

- Sistema de cadastro de usuários.
- Organização do projeto em MVC.
- Renderização de páginas com EJS (Ex: navbar, header).
- Testes de rotas via Postman.
- Separação de arquivos em partials para facilitar manutenção.

---

## 🧪 Testes com Postman

As rotas da aplicação foram testadas com o Postman para verificar o envio e o recebimento de dados via HTTP.

Exemplo de rota POST: POST http://localhost:8080/users
Content-Type: application/json

{
"nome": "Joao",
"email": "joao@email.com"
}
