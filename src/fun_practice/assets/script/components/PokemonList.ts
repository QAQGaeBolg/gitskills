
import { _decorator, Component, Node } from 'cc';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PokemonList
 * DateTime = Fri Nov 26 2021 11:24:56 GMT+0800 (中国标准时间)
 * Author = QAQGaeBolg
 * FileBasename = PokemonList.ts
 * FileBasenameNoExtension = PokemonList
 * URL = db://assets/script/components/PokemonList.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('PokemonList')
export class PokemonList extends Component {

    start () {
        // [3]
    }

    update (deltaTime: number) {
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
