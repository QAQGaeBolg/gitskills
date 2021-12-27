import { assert } from "cc";
import Skill from "../skill/Skill";
import PokemonBaseInfo from "./PokemonBaseInfo";
import { PokemonInfo, PokemonMap } from "./PokemonInfo";

export default class PokemonUserInfo {
    pokemonBaseInfo: PokemonBaseInfo
    exp: number
    constructor (pokemonId: string, level: number, skillList: Skill[], exp: number) {
        this.pokemonBaseInfo = new PokemonBaseInfo(pokemonId, level, skillList)
        this.exp = exp
    }
}