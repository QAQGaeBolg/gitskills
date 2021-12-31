
import * as cc from 'cc';
import EnemyInfo from '../information/player/components/EnemyInfo';
import { UserInfo } from '../information/player/components/UserInfo';
const { ccclass, property } = cc._decorator;
 
@ccclass('SceneData')
export class SceneData extends cc.Component {
    public redUser: UserInfo = new UserInfo("10001");
    public blueUser: UserInfo | EnemyInfo = new EnemyInfo("10001");

    start () {
        // [3]
    }

    onLoad () {
        cc.game.addPersistRootNode(this.node)
        console.log("redUser is " + this.redUser.name)
        console.log("blueUser is " + this.blueUser.name)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
