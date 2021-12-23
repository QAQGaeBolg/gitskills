
import * as cc from 'cc';
import Pokemon from '../information/pokemon/Pokemon';
import { PokemonNameMap } from '../information/pokemon/PokemonInfo';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = cc._decorator;
 
@ccclass('PokemonOnBattle')
export class PokemonOffBattle extends cc.Component {
    public pokemon: Pokemon | null = null

    start () {
        // [3]
    }

    update (deltaTime: number) {
        if (FightSceneTwo.battleState == BattleState.LoadBattle_3) {
            if (this.pokemon === null) {
                (this.node.getChildByName("Sprite") as cc.Node).active = false
            } else {
                let child = this.node.getChildByName("Sprite") as cc.Node
                cc.resources.load(
                    `../../image/${PokemonNameMap.get(this.pokemon.getPokemonId())}.png`, 
                    cc.SpriteFrame, 
                    function (err, spriteFrame) {
                        child.getComponent(cc.Sprite).spriteFrame = spriteFrame
                    }
                )
            }            
        }
    }
}

