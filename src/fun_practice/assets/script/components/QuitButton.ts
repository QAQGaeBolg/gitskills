
import { _decorator, Component, Node } from 'cc';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = QuitButton
 * DateTime = Fri Nov 26 2021 12:00:24 GMT+0800 (中国标准时间)
 * Author = QAQGaeBolg
 * FileBasename = QuitButton.ts
 * FileBasenameNoExtension = QuitButton
 * URL = db://assets/script/components/QuitButton.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('QuitButton')
export class QuitButton extends Component {

    start () {
        // [3]
    }

    onClickButton() {
        FightSceneTwo.battleState = BattleState.BattleFinish
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
