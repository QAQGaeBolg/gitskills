
import { _decorator, Component, Node } from 'cc';
import HTTP from '../function/HTTP';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = _decorator;
 
@ccclass('QuitButton')
export class QuitButton extends Component {

    start () {
        
    }

    onLoad () {
    }

    onClickButton() {
        FightSceneTwo.battleState = BattleState.BattleFinish
    }
}

