
import { _decorator, Component, Node, Button } from 'cc';
const { ccclass, property } = _decorator;

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
export class SkillButton extends Component {

    start () {
        // [3]
    }

    onLoad() {
        let button = this.node.getComponent(Button)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
