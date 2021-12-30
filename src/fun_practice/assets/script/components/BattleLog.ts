
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

    start () {
        this.battleLog = null
    }

    onLoad() {
        this.battleLog = null
    }

    reload () {
        if (this.battleLog !== null) {
            if (this.battleLog !== null) {
                let rt = this.node.getComponent(cc.RichText) as cc.RichText
                rt.string = rt.string.concat(this.battleLog)
                this.battleLog = null
            }
        }
    }

    update (deltaTime: number) {
        this.reload()
    }
}
