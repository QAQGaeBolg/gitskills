
import { _decorator, Component, Node } from 'cc';
import 'console';
import Skill from '../information/skill/Skill';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
import { SkillButton } from './SkillButton';
const { ccclass, property } = _decorator;

 
@ccclass('SkillList')
export class SkillList extends Component {
    public skillList: Skill[] = []

    public setSkills(skillList: Skill[]) {
        this.skillList = skillList
    }

    start () {

    }

    updateSkills () {
        if (FightSceneTwo.battleState == BattleState.BeforeMove) {
            for (let i = 0; i < this.skillList.length; i++) {
                let skill = this.node.getChildByName(`Skill${i}`) as unknown as SkillButton
                skill.skill = this.skillList[i]
            }
        }        
    }

    update (dt: number) {
        this.updateSkills()
    }
}
