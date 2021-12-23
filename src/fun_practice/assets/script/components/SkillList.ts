
import { _decorator, Component, Node } from 'cc';
import Skill from '../information/skill/Skill';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = _decorator;

 
@ccclass('SkillList')
export class SkillList extends Component {
    public skillList: Skill[]
    public completeLoading: boolean = false

    start () {
    }

    update (dt) {
        if (FightSceneTwo.battleState == BattleState.BeforeMove) {
            if (!this.completeLoading) {
                let skill1 = this.node.getChildByName("Skill1")
                let skill2 = this.node.getChildByName("Skill2")
                let skill3 = this.node.getChildByName("Skill3")
                let skill4 = this.node.getChildByName("Skill4")

            }
        }
    }
}
