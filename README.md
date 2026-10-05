# Pokémon API

API RESTful desenvolvida em Node.js, Express e TypeScript para gerenciamento de Pokémon, utilizando PostgreSQL como banco de dados e Sequelize como ORM.

O projeto foi desenvolvido como atividade da disciplina de Laboratório de Desenvolvimento Web (LDW).

## Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL
- Supabase
- Swagger / OpenAPI
- pnpm

## Funcionalidades

A API permite:

- Cadastrar Pokémon
- Listar todos os Pokémon
- Buscar Pokémon por ID
- Atualizar Pokémon
- Excluir Pokémon
- Persistir os dados em PostgreSQL
- Testar os endpoints pela documentação Swagger

## Estrutura do projeto

```text
src/
├── config/
│   ├── database.ts
│   └── swagger.ts
├── controllers/
│   └── PokemonController.ts
├── models/
│   └── Pokemon.ts
├── routes/
│   └── pokemonRoutes.ts
└── server.ts
```

## Modelo Pokémon

Cada Pokémon possui os seguintes atributos:

| Campo     | Tipo    | Descrição                  |
| --------- | ------- | -------------------------- |
| id        | integer | Identificador do Pokémon   |
| nome      | string  | Nome do Pokémon            |
| tipo      | string  | Tipo do Pokémon            |
| nivel     | integer | Nível do Pokémon           |
| hp        | integer | Pontos de vida             |
| capturado | boolean | Indica se foi capturado    |
| createdAt | date    | Data de criação            |
| updatedAt | date    | Data da última atualização |

## Endpoints

| Método | Endpoint        | Descrição                |
| ------ | --------------- | ------------------------ |
| GET    | `/pokemons`     | Lista todos os Pokémon   |
| GET    | `/pokemons/:id` | Busca um Pokémon pelo ID |
| POST   | `/pokemons`     | Cadastra um Pokémon      |
| PUT    | `/pokemons/:id` | Atualiza um Pokémon      |
| DELETE | `/pokemons/:id` | Exclui um Pokémon        |

## Instalação

Clone o repositório e instale as dependências:

```bash
pnpm install
```

Crie um arquivo `.env` com base no `.env.example`:

```env
PORT=3000

DB_HOST=seu_host
DB_PORT=5432
DB_NAME=postgres
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_SSL=true
```

## Executando em desenvolvimento

```bash
pnpm dev
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## Swagger

Com o servidor em execução, a documentação interativa da API estará disponível em:

```text
http://localhost:3000/api-docs
```

A documentação permite visualizar e testar todos os endpoints utilizando o recurso **Try it out**.

## Build

Para compilar o projeto TypeScript:

```bash
pnpm build
```

Para executar a versão compilada:

```bash
pnpm start
```

## Códigos de resposta

A API utiliza os principais códigos HTTP:

- `200` — Requisição realizada com sucesso
- `201` — Recurso criado com sucesso
- `400` — Dados ou parâmetros inválidos
- `404` — Recurso não encontrado
- `500` — Erro interno do servidor
