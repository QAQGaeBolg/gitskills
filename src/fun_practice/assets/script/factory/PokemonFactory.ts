import PokemonBattleInfo from "../information/pokemon/PokemonBattleInfo";
import PokemonUserInfo from "../information/pokemon/PokemonUserInfo";
import Skill from "../information/skill/Skill";

export default class PokemonFactory {
    public createPokemonBattleInfo(pokemonUserInfo: PokemonUserInfo): PokemonBattleInfo {
        return new PokemonBattleInfo(pokemonUserInfo.pokemonBaseInfo)
    }

    public createPokemonUserInfo(pokemonId: string, level: number, skillList: Skill[], exp: number): PokemonUserInfo {
        return new PokemonUserInfo(pokemonId, level, skillList, exp)
    }
}