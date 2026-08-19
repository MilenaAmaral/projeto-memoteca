# 📚 Memoteca

Memoteca é uma aplicação web para cadastro e organização de pensamentos e frases. O projeto permite cadastrar, listar, editar e excluir pensamentos, armazenando informações como conteúdo e autoria.

O projeto foi desenvolvido durante os estudos de desenvolvimento web e posteriormente evoluído com novas funcionalidades e melhorias no código.

## 🔨 Funcionalidades

* **Cadastro de pensamentos:** permite adicionar novos pensamentos, informando conteúdo e autoria.
* **Listagem de pensamentos:** exibe os pensamentos cadastrados na aplicação.
* **Edição de pensamentos:** permite atualizar pensamentos existentes.
* **Exclusão de pensamentos:** permite remover pensamentos cadastrados.
* **Integração com API:** comunicação entre o front-end e o servidor utilizando requisições HTTP.
* **Atualização dinâmica da interface:** a lista de pensamentos é atualizada após operações de cadastro, edição e exclusão.

## 🛠️ Tecnologias utilizadas

* **HTML5:** estrutura da aplicação.
* **CSS3:** estilização e organização visual da interface.
* **JavaScript:** desenvolvimento da lógica e interação da aplicação.
* **Fetch API:** realização das requisições HTTP para comunicação com a API.
* **Node.js:** ambiente utilizado para execução do servidor.
* **JSON Server:** utilizado para simular uma API REST e realizar as operações CRUD.
* **Git e GitHub:** controle de versão e gerenciamento do código-fonte.

## 🔄 Operações CRUD

O projeto implementa as quatro operações fundamentais:

| Operação | Método HTTP | Função               |
| -------- | ----------- | -------------------- |
| Criar    | POST        | Cadastrar pensamento |
| Listar   | GET         | Buscar pensamentos   |
| Editar   | PUT         | Atualizar pensamento |
| Excluir  | DELETE      | Remover pensamento   |

## 📁 Estrutura do projeto

```text
PROJETO-MEMOTECA/
│
├── assets/
│   └── imagens/
│
├── backend/
│   ├── db.json
│   ├── package.json
│   └── package-lock.json
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── main.js
│   └── ui.js
│
├── index.html
├── README.md
└── thumb.png
```

## 🚀 Como executar o projeto

### Pré-requisitos

* Node.js instalado
* Visual Studio Code
* Extensão Live Server

### 1. Executar o backend

Abra o terminal na pasta do projeto:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Inicie o JSON Server:

```bash
npm start
```

A API estará disponível em:

```text
http://localhost:3001
```

O endpoint de pensamentos pode ser acessado em:

```text
http://localhost:3001/pensamentos
```

### 2. Executar o frontend

Abra o projeto no Visual Studio Code.

Com a extensão **Live Server** instalada, clique com o botão direito no arquivo `index.html` e selecione:

**Open with Live Server**

O frontend será executado localmente pelo Live Server.

## 🎨 Design

O projeto utiliza como referência o layout disponibilizado no Figma:

[🔗 Acessar o Figma do projeto](https://www.figma.com/design/Sz1gmmemxqcB3amInL4Ndp/Rebrand-Memoteca-%7C-Curso-CRUD?node-id=148-26&t=FpdmfbiM1i1s6REQ-0)

## 📚 Aprendizados

Durante o desenvolvimento do projeto, foram praticados conceitos importantes de desenvolvimento web, incluindo:

* Manipulação do DOM com JavaScript.
* Modularização do código.
* Consumo de APIs REST.
* Requisições HTTP utilizando Fetch API.
* Operações CRUD.
* Manipulação de dados em JSON.
* Tratamento de erros com `try/catch`.
* Organização de código entre API, interface e lógica da aplicação.
* Controle de versão utilizando Git.
* Desenvolvimento utilizando branches e commits semânticos.

## 🚧 Próximas melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

* Validação mais completa dos formulários.
* Confirmação antes da exclusão de um pensamento.
* Mensagens de feedback para o usuário após as operações.
* Busca e filtragem de pensamentos.
* Responsividade e melhorias de acessibilidade.
* Publicação da aplicação em ambiente online.

## 👩‍💻 Desenvolvido por

**Milena Amaral Dias**

[GitHub](https://github.com/MilenaAmaral)

[LinkedIn](https://www.linkedin.com/in/milenaamaraldias/)
