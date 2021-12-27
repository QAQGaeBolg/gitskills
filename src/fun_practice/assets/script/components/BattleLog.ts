
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
    public battleLog: string | undefined = undefined
    public loadBattle: boolean = false

    start () {
        this.battleLog = undefined
    }

    onLoad() {
        this.battleLog = undefined
    }

    update (deltaTime: number) {
        if (FightSceneTwo.battleState == BattleState.LoadBattle_1) {
            if (this.loadBattle !== undefined && !this.loadBattle) {
                cc.assert(this.node.getParent().getParent()
                .getChildByName("Left_component").getChildByName("Current_pokemon").getComponent(CurrentPokemonLeft) !== )
                let leftPokemon: Pokemon = this.node.getParent().getParent()
                .getChildByName("Left_component").getChildByName("Current_pokemon").getComponent(CurrentPokemonLeft).pokemon
                let rightPokemon: Pokemon = this.node.getParent().getParent()
                .getChildByName("Right_component").getChildByName("Current_pokemon").getComponent(CurrentPokemonRight).pokemon
                let pokomon1 = PokemonMap.get(leftPokemon.getPokemonId()), pokemon2 = PokemonMap.get(rightPokemon.getPokemonId())
                cc.assert(pokomon1 !== undefined && pokemon2 !== undefined)
                this.battleLog = `【系统】${pokomon1.name}对战${pokemon2.name}。`
            }
        } else {
            this.loadBattle = false
        }
        console.log(`battlelog is ${this.battleLog}`)
        if (this.battleLog !== undefined) {
            let rt = this.node.getComponent(cc.RichText) as cc.RichText
            //cc.assert(this.battleLog !== undefined)
            rt.string = rt.string.concat(this.battleLog)
            this.battleLog = undefined
        }
    }
}
