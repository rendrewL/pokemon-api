import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import "./models/Pokemon.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
dotenv.config();

import pokemonRoutes from "./routes/pokemonRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/pokemons", pokemonRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Pokémon API está funcionando!"
  });
});

const iniciarServidor = async () => {
  try {
    await sequelize.authenticate();

    console.log("Conexão com PostgreSQL estabelecida com sucesso!");

    await sequelize.sync();

    console.log("Tabelas sincronizadas com sucesso!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
  }
};

iniciarServidor();