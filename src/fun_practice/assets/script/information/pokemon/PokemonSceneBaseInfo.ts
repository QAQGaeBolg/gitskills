import Skill from "../skill/Skill";
import PokemonBaseInfo from "./PokemonBaseInfo";

export default class PokemonSceneBaseInfo extends PokemonBaseInfo {
    public HPObserver: any[] = []
    public ATKObserver: any[] = []
    public DEFObserver: any[] = []
    public SPObserver: any[] = []

    constructor (pokemonId: string, level: number, skillList: Skill[]) {
        super(pokemonId, level, skillList)
    }
    
    public setHP(HP: number) {
        if (this.HP !== HP) {
            this.HP = HP
            for (let i = 0; i < this.HPObserver.length; i++) {
                this.HPObserver[i].change = true

            }
        }
    }
    public setATK(ATK: number) {
        if (this.ATK !== ATK) {
            this.ATK = ATK
            for (let i = 0; i < this.ATKObserver.length; i++) {
                this.ATKObserver[i].change = true
                
            }
        }
    }
    public setDEF(DEF: number) {
        if (this.DEF !== DEF) {
            this.DEF = DEF
            for (let i = 0; i < this.DEFObserver.length; i++) {
                this.DEFObserver[i].change = true
                
            }
        }
    }
    public setSP(SP: number) {
        if (this.SP !== SP) {
            this.SP = SP
            for (let i = 0; i < this.SPObserver.length; i++) {
                this.SPObserver[i].change = true
                
            }
        }
    }
}