import { Router } from "express";
import {
  criarPokemon,
  listarPokemons,
  buscarPokemonPorId,
  atualizarPokemon,
  deletarPokemon
} from "../controllers/PokemonController.js";

const router = Router();

/**
 * @swagger
 * /pokemons:
 *   get:
 *     summary: Lista todos os Pokémon
 *     description: Retorna todos os Pokémon cadastrados no banco de dados.
 *     tags:
 *       - Pokémon
 *     responses:
 *       200:
 *         description: Lista de Pokémon retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pokemon'
 *       500:
 *         description: Erro interno do servidor.
 */
router.get("/", listarPokemons);
/**
 * @swagger
 * /pokemons/{id}:
 *   get:
 *     summary: Busca um Pokémon pelo ID
 *     description: Retorna os dados de um Pokémon específico.
 *     tags:
 *       - Pokémon
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Pokémon
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Pokémon encontrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       400:
 *         description: ID inválido.
 *       404:
 *         description: Pokémon não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get("/:id", buscarPokemonPorId);

/**
 * @swagger
 * /pokemons:
 *   post:
 *     summary: Cadastra um novo Pokémon
 *     description: Cria um novo Pokémon e salva os dados no banco de dados.
 *     tags:
 *       - Pokémon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - tipo
 *               - nivel
 *               - hp
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Bulbasaur
 *               tipo:
 *                 type: string
 *                 example: Planta
 *               nivel:
 *                 type: integer
 *                 example: 12
 *               hp:
 *                 type: integer
 *                 example: 65
 *               capturado:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Pokémon cadastrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       400:
 *         description: Dados obrigatórios ausentes ou inválidos.
 *       500:
 *         description: Erro interno do servidor.
 */

router.post("/", criarPokemon);

/**
 * @swagger
 * /pokemons/{id}:
 *   put:
 *     summary: Atualiza um Pokémon
 *     description: Atualiza os dados de um Pokémon existente pelo ID.
 *     tags:
 *       - Pokémon
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Pokémon
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - tipo
 *               - nivel
 *               - hp
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Pikachu
 *               tipo:
 *                 type: string
 *                 example: Eletrico
 *               nivel:
 *                 type: integer
 *                 example: 35
 *               hp:
 *                 type: integer
 *                 example: 120
 *               capturado:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Pokémon atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       400:
 *         description: ID inválido ou dados obrigatórios ausentes.
 *       404:
 *         description: Pokémon não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
router.put("/:id", atualizarPokemon);

/**
 * @swagger
 * /pokemons/{id}:
 *   delete:
 *     summary: Exclui um Pokémon
 *     description: Remove um Pokémon do banco de dados pelo ID.
 *     tags:
 *       - Pokémon
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Pokémon
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: Pokémon excluído com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Pokémon excluído com sucesso.
 *       400:
 *         description: ID inválido.
 *       404:
 *         description: Pokémon não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
router.delete("/:id", deletarPokemon);

router.delete("/:id", deletarPokemon);

export default router;
