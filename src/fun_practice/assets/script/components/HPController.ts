
import * as cc from 'cc';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
import SceneBaseInfo from './SceneBaseInfo';
const { ccclass, property } = cc._decorator;


 
@ccclass('HPController')
export class HPController extends cc.Component {
    public sceneBaseInfo!: SceneBaseInfo
    public user!: cc.Node
    public pokemonName!: cc.Node
    public maxHP!: number
    public currentHP!: number
    public hp_column!: cc.Node
    public hp_number!: cc.Node
    public change: boolean = false
    public side!: "red" | "blue"

    start () {
        this.user = this.node.getChildByName("User") as cc.Node
        this.pokemonName = this.node.getChildByName("PokemonName") as cc.Node
        this.hp_column = this.node.getChildByName("HPColumn") as cc.Node
        this.hp_number = this.node.getChildByName("CPNumber") as cc.Node
        this.reload()
    }

    onload() {

    }

    reload () {
        var label = this.user.getComponent(cc.Label) as cc.Label
        label.string = this.side == "red" 
        ? `${this.sceneBaseInfo.redUser.name}` 
        : `${this.sceneBaseInfo.blueUser.name}`
        label = this.pokemonName.getComponent(cc.Label) as cc.Label
        label.string = this.side == "red" 
        ? this.sceneBaseInfo.currentRedPokemon.pokemonBaseInfo.pokemonInfo.name 
        : this.sceneBaseInfo.currentBluePokemon.pokemonBaseInfo.pokemonInfo.name
        label = this.hp_number.getComponent(cc.Label) as cc.Label
        label.string = `${this.currentHP}/${this.maxHP}`

    }

    update(dt: number) {
        if (FightSceneTwo.battleState == BattleState.AfterMove) {
            let sprite = this.hp_column.getComponent(cc.Sprite) as cc.Sprite
            if (sprite.fillRange - sprite.fillStart - this.currentHP/this.maxHP > 0.01) {
                if (this.side == "red") {
                    sprite.fillRange -= 0.01
                } else {
                    sprite.fillStart += 0.01
                }
            }
        }
    }

}
