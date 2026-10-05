import { Request, Response } from "express";
import Pokemon from "../models/Pokemon.js";

export const criarPokemon = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nome, tipo, nivel, hp, capturado } = req.body;

    if (!nome || !tipo || nivel === undefined || hp === undefined) {
      res.status(400).json({
        message: "Nome, tipo, nível e HP são obrigatórios."
      });
      return;
    }

    const pokemon = await Pokemon.create({
      nome,
      tipo,
      nivel,
      hp,
      capturado: capturado ?? false
    });

    res.status(201).json(pokemon);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro interno ao criar Pokémon."
    });
  }
};

export const listarPokemons = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const pokemons = await Pokemon.findAll();

    res.status(200).json(pokemons);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro interno ao listar Pokémon."
    });
  }
};

export const buscarPokemonPorId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        message: "ID inválido."
      });
      return;
    }

    const pokemon = await Pokemon.findByPk(id);

    if (!pokemon) {
      res.status(404).json({
        message: "Pokémon não encontrado."
      });
      return;
    }

    res.status(200).json(pokemon);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro interno ao buscar Pokémon."
    });
  }
};

export const atualizarPokemon = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        message: "ID inválido."
      });
      return;
    }
    const { nome, tipo, nivel, hp, capturado } = req.body;

    const pokemon = await Pokemon.findByPk(id);

    if (!pokemon) {
      res.status(404).json({
        message: "Pokémon não encontrado."
      });
      return;
    }

    if (!nome || !tipo || nivel === undefined || hp === undefined) {
      res.status(400).json({
        message: "Nome, tipo, nível e HP são obrigatórios."
      });
      return;
    }

    await pokemon.update({
      nome,
      tipo,
      nivel,
      hp,
      capturado: capturado ?? pokemon.capturado
    });

    res.status(200).json(pokemon);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro interno ao atualizar Pokémon."
    });
  }
};

export const deletarPokemon = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        message: "ID inválido."
      });
      return;
    }

    const pokemon = await Pokemon.findByPk(id);

    if (!pokemon) {
      res.status(404).json({
        message: "Pokémon não encontrado."
      });
      return;
    }

    await pokemon.destroy();

    res.status(200).json({
      message: "Pokémon excluído com sucesso."
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro interno ao excluir Pokémon."
    });
  }
};
