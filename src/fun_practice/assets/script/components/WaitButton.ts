
import { _decorator, Component, Node } from 'cc';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = _decorator;

@ccclass('WaitButton')
export class WaitButton extends Component {

    start () {
        // [3]
    }

    onClickButton() {
        FightSceneTwo.battleState = BattleState.AfterMove
    }
}

