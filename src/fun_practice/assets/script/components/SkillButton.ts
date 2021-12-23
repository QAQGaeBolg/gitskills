
import * as cc from 'cc';
import { calculateDamage } from '../function/Calculation';
import { CurrentPlayer } from '../information/player/components/Player';
import Pokemon from '../information/pokemon/Pokemon';
import Skill from '../information/skill/Skill';
import { BattleState } from '../object/BattleState';
import { BattleLog } from './BattleLog';
import { CurrentPokemonLeft } from './CurrentPokemonLeft';
import { CurrentPokemonRight } from './CurrentPokemonRight';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = cc._decorator;

/**
 * Predefined variables
 * Name = SkillButton
 * DateTime = Wed Nov 24 2021 22:30:26 GMT+0800 (GMT+08:00)
 * Author = QAQGaeBolg
 * FileBasename = SkillButton.ts
 * FileBasenameNoExtension = SkillButton
 * URL = db://assets/script/components/SkillButton.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('SkillButton')
export class SkillButton extends cc.Component {
    public skill: Skill | null = null
    public completeLoading: boolean = false

    start () {
        // [3]
    }

    onLoad() {
    }

    onClickSkillButton() {
        console.log(`@@@@@  press button`)
        //if (FightSceneTwo.battleState == BattleState.WaitMove) {
            //FightSceneTwo.battleState = BattleState.AfterMove;
            let Log = (this.node.getParent() as cc.Node).getChildByName("Log") as cc.Node
            let Battle_log = Log.getChildByName("Battle_log") as cc.Node
            let view = Battle_log.getChildByName("view") as cc.Node
            let content = view.getChildByName("content") as cc.Node
            let battleLog = content.getComponent(BattleLog) as BattleLog
            let name, HPLeft: cc.Node, HPRight: cc.Node
            HPLeft = this.node.getParent().getParent()
            .getChildByName("Left_component").getChildByName("Current_pokemon").getChildByName("HP")
            HPRight = this.node.getParent().getParent()
            .getChildByName("Right_component").getChildByName("Current_pokemon").getChildByName("HP")         
            if (FightSceneTwo.currentPlayer == "left_player") {
                name = HPLeft.getChildByName("name")
                .getComponent(cc.Label).string
            } else if (FightSceneTwo.currentPlayer == "right_player") {
                name = HPRight.getChildByName("name")
                .getComponent(cc.Label).string
            } 
            battleLog.battleLog = `【战斗】${name}使用了${this.skill.getName()}。`
            let attacker: Pokemon, defencer: Pokemon, dmg
            if (FightSceneTwo.currentPlayer == "left_player") {
                attacker = HPLeft.getParent().getComponent(CurrentPokemonLeft).pokemon
                defencer = HPRight.getParent().getComponent(CurrentPokemonLeft).pokemon

            } else {
                attacker = HPRight.getParent().getComponent(CurrentPokemonRight).pokemon
                defencer = HPLeft.getParent().getComponent(CurrentPokemonRight).pokemon
                //dmg = calculateDamage(attacker, this.skill, defencer)
            }
            dmg = calculateDamage(attacker, this.skill, defencer)
            defencer.beingAttacked(dmg, this.skill.getEffect())
            if (defencer.battleHP == 0) {
                FightSceneTwo.lose(FightSceneTwo.currentPlayer == "left_player" ? "right_player" : "left_player")
            }
        //}

    }

    update (deltaTime: number) {
        if (FightSceneTwo.battleState == BattleState.BeforeMove) {
            if (!this.completeLoading) {
                let skill_name = this.node.getChildByName("skill_name") as cc.Node
                let power = this.node.getChildByName("power") as cc.Node
                let cost = this.node.getChildByName("cost") as cc.Node
                if (this.skill !== null) {
                    skill_name.active = true;
                    (skill_name.getComponent(cc.Label) as cc.Label).string = this.skill.getName()
                    power.active = true;
                    (power.getComponent(cc.Label) as cc.Label).string = `${this.skill.getPower()}`
                    cost.active = true;
                    (cost.getComponent(cc.Label) as cc.Label).string = `${this.skill.getCost()}`
                } else {
                    skill_name.active = false
                    power.active = false
                    cost.active = false
                }
                this.completeLoading = true                
            }
        } else {
            this.completeLoading = false
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
