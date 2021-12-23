
import * as cc from 'cc';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = cc._decorator;


 
@ccclass('HPController')
export class HPController extends cc.Component {
    private maxHP
    private currentHP
    private hp_column: cc.Node
    private hp_number: cc.Node
    private control: "left_player" | "right_player"
    public updateFinish: boolean = false

    public damage(dmg: number) {
        this.currentHP = Math.max(0, this.currentHP - dmg)
    }

    start () {
        this.hp_column = this.node.getChildByName("hp_column")
        this.hp_number = this.node.getChildByName("hp_number")
    }

    update(dt) {
        if (FightSceneTwo.battleState == BattleState.LoadBattle_4) {
            
        } else if (FightSceneTwo.battleState == BattleState.AfterMove) {
            let sprite = this.hp_column.getComponent(cc.Sprite)
            if (sprite.fillRange - sprite.fillStart - this.currentHP/this.maxHP > 0.01) {
                if (this.control == "left_player") {
                    sprite.fillRange -= 0.01
                } else {
                    sprite.fillStart += 0.01
                }
            } else {
                this.updateFinish = true
            }
        }
    }

}
