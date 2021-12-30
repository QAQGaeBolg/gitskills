
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
import { SceneController } from './SceneController';
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
    public skill!: Skill | null
    public wait!: boolean
    public quit!: boolean
    public observer: any

    start () {
        // [3]
    }

    onLoad() {

    }

    reload () {

    }

    onClickSkillButton() {
        console.log(`@@@@@  press button`);
        (this.observer as SceneController).action.skill = this.skill;
        (this.observer as SceneController).action.wait = this.wait;
        (this.observer as SceneController).action.quit = this.quit;
    }

    update (deltaTime: number) {
        if ((this.observer as SceneController).sceneBaseInfo.state == BattleState.BeforeMove) {
            let skillName = this.node.getChildByName("SkillName") as cc.Node
            let power = this.node.getChildByName("Power") as cc.Node
            let cost = this.node.getChildByName("Cost") as cc.Node
            if (this.skill !== null) {
                skillName.active = true;
                (skillName.getComponent(cc.Label) as cc.Label).string = this.skill.getName()
                power.active = true;
                (power.getComponent(cc.Label) as cc.Label).string = `${this.skill.getPower()}`
                cost.active = true;
                (cost.getComponent(cc.Label) as cc.Label).string = `${this.skill.getCost()}`
            } else {
                skillName.active = false
                power.active = false
                cost.active = false
            }
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
