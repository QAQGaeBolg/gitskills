import Skill, { Effect, SkillList } from "../skill/Skill"
import { PokemonInfo, PokemonMap } from "./PokemonInfo"

export default class Pokemon {
    private pokemonId: string
    private isEnemy: boolean
    private level: number
    private maxHP: number = 0
    private maxATK: number = 0
    private maxDEF: number = 0
    private maxSP: number = 0
    private battleSkillList: Skill[]

    public battleHP?: number
    public battleATK?: number
    public battleDEF?: number
    public battleSP?: number
    public stateList?: Effect[]
    
    public exp?: number
    public expToUpgrade?: number
    public expCanGet?: number

    constructor(
        pokemonId: string,
        isEnemy: boolean,
        level: number, 
        battleSkillList: number[],
        exp?: number, expCanGet?: number
        ) {
        this.pokemonId = pokemonId
        this.isEnemy = isEnemy
        this.level = level
        this.upgrade(this.level)
        this.battleSkillList = new Array()
        const skillList = SkillList.get(this.pokemonId) as Skill[]
        for (let i = 0; i < 4; i++) {
            SkillList.get(this.pokemonId)
            this.battleSkillList.push(skillList[battleSkillList[i]])
        }
    }

    public upgrade(level?: number) {
        if (level !== null && level !== undefined) {
            this.level = level
        } else {
            this.level += 1            
        }
        const pokemonInfo = PokemonMap.get(this.pokemonId) as PokemonInfo
        this.maxHP = pokemonInfo.baseHP + (this.level - 1) * pokemonInfo.HPIncrement
        this.maxATK = pokemonInfo.baseATK + (this.level - 1) * pokemonInfo.ATKIncrement
        this.maxDEF = pokemonInfo.baseDEF + (this.level - 1) * pokemonInfo.DEFIncrement
        this.maxSP = pokemonInfo.baseSP + (this.level - 1) * pokemonInfo.SPIncrement
    }

    public onBattle() {
        this.battleHP = this.maxHP
        this.battleATK = this.maxATK
        this.battleDEF = this.maxDEF
        this.battleSP = this.maxSP
        this.stateList = new Array()
    }

    public beingAttacked(dmg: number, effect: Effect) {
        this.battleHP = Math.max(0, this.battleHP - dmg)
    }

    public getPokemonId(): string {
        return this.pokemonId
    }
    public getLevel(): number {
        return this.level
    }
    public getMaxHP(): number {
        return this.maxHP
    }
    public getMaxATK(): number {
        return this.maxATK
    }
    public getMaxDEF(): number {
        return this.maxDEF
    }
    public getMaxSP(): number {
        return this.maxSP
    }
    public getBattleSkillList(): Skill[] {
        return this.battleSkillList
    }
}