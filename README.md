# 📚 Memoteca

Aplicação web para cadastro, organização e gerenciamento de pensamentos e frases.

O projeto foi desenvolvido inicialmente durante os estudos de desenvolvimento web e posteriormente evoluído com novas funcionalidades, melhorias de interface, organização do código e integração com uma API REST.

A aplicação permite cadastrar, visualizar, editar e excluir pensamentos, utilizando JavaScript para manipulação da interface e Axios para comunicação com o backend.

## 🚀 Funcionalidades

- **Cadastro de pensamentos:** permite adicionar pensamentos informando conteúdo e autoria.
- **Listagem de pensamentos:** exibe dinamicamente os pensamentos cadastrados.
- **Edição de pensamentos:** permite atualizar pensamentos existentes diretamente pela interface.
- **Edição inline:** possibilita editar um pensamento sem precisar retornar ao formulário no topo da página.
- **Exclusão de pensamentos:** permite remover pensamentos cadastrados.
- **Integração com API REST:** comunicação entre frontend e backend utilizando Axios.
- **Atualização dinâmica da interface:** a lista é atualizada após operações de cadastro, edição e exclusão.
- **Tema claro e escuro:** permite alternar entre os modos de visualização.
- **Interface responsiva:** adaptação da aplicação para diferentes tamanhos de tela.
- **Estado vazio:** exibe uma mensagem personalizada quando não existem pensamentos cadastrados.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estrutura semântica da aplicação.
- **CSS3:** estilização, responsividade, animações e temas claro/escuro.
- **JavaScript (ES6+):** lógica da aplicação e interação com a interface.
- **Axios:** realização das requisições HTTP.
- **Node.js:** ambiente utilizado para execução do backend.
- **JSON Server:** criação de uma API REST para persistência dos dados.
- **Git:** controle de versão.
- **GitHub:** hospedagem e gerenciamento do código-fonte.

## 🔄 Operações CRUD

A aplicação implementa as quatro operações fundamentais de uma API REST:

| Operação | Método HTTP | Endpoint | Função |
|----------|-------------|----------|--------|
| Criar | POST | `/pensamentos` | Cadastrar pensamento |
| Listar | GET | `/pensamentos` | Buscar pensamentos |
| Editar | PUT | `/pensamentos/:id` | Atualizar pensamento |
| Excluir | DELETE | `/pensamentos/:id` | Remover pensamento |

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
│   └── styles.css
│
├── js/
│   ├── api.js
│   ├── main.js
│   ├── theme-toggle.js
│   └── ui.js
│
├── index.html
├── package.json
├── package-lock.json
└── README.md