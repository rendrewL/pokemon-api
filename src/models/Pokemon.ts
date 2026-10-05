import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database.js";

export interface PokemonAttributes {
  id: number;
  nome: string;
  tipo: string;
  nivel: number;
  hp: number;
  capturado: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PokemonCreationAttributes
  extends Optional<PokemonAttributes, "id" | "createdAt" | "updatedAt"> {}

class Pokemon
  extends Model<PokemonAttributes, PokemonCreationAttributes>
  implements PokemonAttributes
{
  declare id: number;
declare nome: string;
declare tipo: string;
declare nivel: number;
declare hp: number;
declare capturado: boolean;

declare readonly createdAt: Date;
declare readonly updatedAt: Date;
}

Pokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },

    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },

    nivel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    capturado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    sequelize,
    tableName: "pokemons",
    modelName: "Pokemon",
    timestamps: true
  }
);

export default Pokemon;