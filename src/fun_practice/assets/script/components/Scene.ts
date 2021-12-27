
import * as cc from 'cc';
import PokemonBattleInfo from '../information/pokemon/PokemonBattleInfo';
const { ccclass, property } = cc._decorator;

/**
 * Predefined variables
 * Name = Scene
 * DateTime = Sun Dec 26 2021 16:21:06 GMT+0800 (GMT+08:00)
 * Author = QAQGaeBolg
 * FileBasename = Scene.ts
 * FileBasenameNoExtension = Scene
 * URL = db://assets/script/components/Scene.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Scene')
export class Scene extends cc.Component {
    public pokemons: PokemonBattleInfo[] = []
    public scaleX!: number;

    start () {
        
    }

    onLoad () {
        
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
