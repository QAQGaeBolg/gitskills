import Skill, { Effect } from "../skill/Skill";
import PokemonBaseInfo from "./PokemonBaseInfo";
import { PokemonInfo } from "./PokemonInfo";
import PokemonSceneBaseInfo from "./PokemonSceneBaseInfo";

export default class PokemonBattleInfo{
    pokemonBaseInfo: PokemonSceneBaseInfo
    states: Effect[]
    constructor (pokemonBaseInfo: PokemonSceneBaseInfo) {
        this.pokemonBaseInfo = pokemonBaseInfo
        this.states = []
    }
}