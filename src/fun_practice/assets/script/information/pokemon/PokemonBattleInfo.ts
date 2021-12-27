import Skill, { Effect } from "../skill/Skill";
import PokemonBaseInfo from "./PokemonBaseInfo";
import { PokemonInfo } from "./PokemonInfo";

export default class PokemonBattleInfo{
    pokemonBaseInfo: PokemonBaseInfo
    states: Effect[]
    constructor (pokemonBaseInfo: PokemonBaseInfo) {
        this.pokemonBaseInfo = pokemonBaseInfo
        this.states = []
    }
}