import { assert } from "cc"
import Skill from "../skill/Skill"
import { PokemonInfo, PokemonMap } from "./PokemonInfo"

export default class PokemonBaseInfo {
    pokemonId: string
    pokemonInfo: PokemonInfo
    level: number
    HP: number
    ATK: number
    DEF: number
    SP: number
    currentSkillList: Skill[]
    
    constructor (pokemonId: string, level: number, skillList: Skill[]) {
        this.pokemonId = pokemonId
        let pokemonInfo = PokemonMap.get(this.pokemonId)
        assert(pokemonInfo !== undefined)
        this.pokemonInfo = pokemonInfo
        this.level = level
        this.currentSkillList = skillList
        this.HP = 0
        this.ATK = 0
        this.DEF = 0
        this.SP = 0
        this.updateLevel()
    }

    public updateLevel() {
        assert(this.pokemonInfo !== undefined)
        this.HP = this.pokemonInfo.baseHP + this.level * this.pokemonInfo.HPIncrement
        this.ATK = this.pokemonInfo.baseATK + this.level * this.pokemonInfo.ATKIncrement
        this.DEF = this.pokemonInfo.baseDEF + this.level * this.pokemonInfo.DEFIncrement
        this.SP = this.pokemonInfo.baseSP + this.level * this.pokemonInfo.SPIncrement
    }

    public upgrade() {
        this.level += 1
        this.updateLevel()
    }
}