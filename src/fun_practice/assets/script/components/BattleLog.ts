
import * as cc from 'cc';
const { ccclass, property } = cc._decorator;

/**
 * Predefined variables
 * Name = BattleLog
 * DateTime = Wed Nov 24 2021 22:20:12 GMT+0800 (GMT+08:00)
 * Author = QAQGaeBolg
 * FileBasename = BattleLog.ts
 * FileBasenameNoExtension = BattleLog
 * URL = db://assets/script/components/BattleLog.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('BattleLog')
export class BattleLog extends cc.Component {
    private battleLog: string | null = null

    public setBattleLog(battleLog: string) {
        this.battleLog = battleLog
    }

    public getBattleLog() {
        return this.battleLog
    }

    start () {
        this.battleLog = null
    }

    onLoad() {
        this.battleLog = null
    }

    update (deltaTime: number) {
        if (this.battleLog !== null) {
            let rt = this.node.getComponent(cc.RichText) as cc.RichText
            rt.string = rt.string.concat(this.battleLog)
            this.battleLog = null
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
