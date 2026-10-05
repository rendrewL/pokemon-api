import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Pokémon API",
      version: "1.0.0",
      description:
        "API RESTful para cadastro e gerenciamento de Pokémon."
    },

    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local"
      }
    ],

    components: {
      schemas: {
        Pokemon: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1
            },
            nome: {
              type: "string",
              example: "Pikachu"
            },
            tipo: {
              type: "string",
              example: "Eletrico"
            },
            nivel: {
              type: "integer",
              example: 30
            },
            hp: {
              type: "integer",
              example: 110
            },
            capturado: {
              type: "boolean",
              example: true
            },
            createdAt: {
              type: "string",
              format: "date-time"
            },
            updatedAt: {
              type: "string",
              format: "date-time"
            }
          }
        }
      }
    }
  },

  apis: ["./src/routes/*.ts"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;