
import * as cc from 'cc';
import { user_lkx, user_zyf } from '../information/player/data/userData';
import { BattleState } from '../object/BattleState';
const { ccclass, property } = cc._decorator;
 
@ccclass('FightSceneTwo')
export class FightSceneTwo extends cc.Component {
    public static battleState: BattleState = BattleState.LoadBattle
    public static round: number = 0
    public static currentPlayer: "left_player" | "right_player"
    public static leftPlayer: any
    public static rightPlayer: any
    public static leftTeam: any
    public static rightTeam: any
    
    public static setBattleState(state: BattleState) {
        FightSceneTwo.battleState = state
    }
    public static getBattleState() {
        return FightSceneTwo.battleState
    }
    public static getRound() {
        return FightSceneTwo.round
    }
    public static nextRound() {
        FightSceneTwo.round += 1
    }

    start () {
        FightSceneTwo.battleState = BattleState.RoundStart
        FightSceneTwo.round = 1
    }

    onLoad() {
        FightSceneTwo.battleState = BattleState.LoadBattle
        FightSceneTwo.round = 0
        //FightSceneTwo.leftPlayer = JSON.parse(cc.sys.localStorage.getItem("left_player") as string)
        //FightSceneTwo.rightPlayer = JSON.parse(cc.sys.localStorage.getItem("right_player") as string)
        FightSceneTwo.leftPlayer = user_zyf
        FightSceneTwo.rightPlayer = user_lkx
        FightSceneTwo.leftTeam = new Array()
        FightSceneTwo.rightTeam = new Array()
        let lt = FightSceneTwo.leftPlayer.team
        let rt = FightSceneTwo.rightPlayer.team
        for (let )
        //cc.sys.localStorage.setItem("left_player", JSON.stringify(user_zyf))
        //cc.sys.localStorage.setItem("right_player", JSON.stringify(user_lkx))
    }

    update (deltaTime: number) {
        if (FightSceneTwo.battleState == BattleState.BattleFinish) {
            cc.director.loadScene("GameScene")
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
