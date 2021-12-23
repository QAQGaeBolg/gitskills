
import * as cc from 'cc';
import Pokemon from '../information/pokemon/Pokemon';
import { PokemonMap } from '../information/pokemon/PokemonInfo';
import { BattleState } from '../object/BattleState';
import { CurrentPokemonLeft } from './CurrentPokemonLeft';
import { CurrentPokemonRight } from './CurrentPokemonRight';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = cc._decorator;
 
@ccclass('BattleLog')
export class BattleLog extends cc.Component {
    public battleLog: string | null = null
    public loadBattle: boolean

    start () {
        this.battleLog = null
    }

    onLoad() {
        this.battleLog = null
    }

    update (deltaTime: number) {
        if (FightSceneTwo.battleState == BattleState.LoadBattle_1) {
            if (!this.loadBattle) {
                let leftPokemon: Pokemon = this.node.getParent().getParent()
                .getChildByName("Left_component").getChildByName("Current_pokemon").getComponent(CurrentPokemonLeft).pokemon
                let rightPokemon: Pokemon = this.node.getParent().getParent()
                .getChildByName("Right_component").getChildByName("Current_pokemon").getComponent(CurrentPokemonRight).pokemon
                this.battleLog = `【系统】${PokemonMap.get(leftPokemon.getPokemonId()).name}对战${PokemonMap.get(rightPokemon.getPokemonId()).name}。`
            }
        } else {
            this.loadBattle = false
        }
        console.log(`battlelog is ${this.battleLog}`)
        if (this.battleLog !== null) {
            let rt = this.node.getComponent(cc.RichText) as cc.RichText
            rt.string = rt.string.concat(this.battleLog)
            this.battleLog = null
        }
    }
}
