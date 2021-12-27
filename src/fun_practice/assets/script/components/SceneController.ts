
import * as cc from 'cc';
import PokemonFactory from '../factory/PokemonFactory';
import UserInfo from '../information/player/components/UserInfo';
import PokemonBattleInfo from '../information/pokemon/PokemonBattleInfo';
import { BattleState } from '../object/BattleState';
import { Scene } from './Scene';
const { ccclass, property } = cc._decorator;

@ccclass('SceneController')
export class SceneController extends cc.Component {
    public static redUser: UserInfo | undefined = undefined
    public static blueUser: UserInfo | undefined = undefined
    public redPokemons: PokemonBattleInfo[] = []
    public bluePokemons: PokemonBattleInfo[] = []
    public pokemonFactory: PokemonFactory = new PokemonFactory()
    public currentRedPokemon!: PokemonBattleInfo
    public currentBluePokemon!: PokemonBattleInfo
    public currentPokemon!: PokemonBattleInfo;
    public order!: PokemonBattleInfo[];
    public static state: BattleState

    start () {
        // [3]
    }

    onLoad () {
        SceneController.state = BattleState.LoadScene
        this.loadScene(true)
    }

    loadScene (init: boolean) {
        if (init) {
            cc.assert(SceneController.redUser !== undefined && SceneController.blueUser !== undefined)
            for (let i = 0; i < SceneController.redUser.team.length; i++) {
                this.redPokemons.push(this.pokemonFactory.createPokemonBattleInfo(SceneController.redUser.team[i]))
            }
            for (let i = 0; i < SceneController.blueUser.team.length; i++) {
                this.bluePokemons.push(this.pokemonFactory.createPokemonBattleInfo(SceneController.blueUser.team[i]))
            }            
        }
        let leftScene = this.node.getChildByName("LeftScene")?.getComponent(Scene)
        cc.assert(leftScene !== null && leftScene !== undefined)
        leftScene.scaleX = 1
        leftScene.pokemons = this.redPokemons
        let rightScene = this.node.getChildByName("LeftScene")?.getComponent(Scene)
        cc.assert(rightScene !== null && rightScene !== undefined)
        rightScene.scaleX = -1
        rightScene.pokemons = this.redPokemons
        this.currentRedPokemon = this.redPokemons[0]
        this.currentBluePokemon = this.bluePokemons[0]
    }

    roundStart () {
        this.order = []
        if (this.currentRedPokemon.pokemonBaseInfo.SP >= this.currentBluePokemon.pokemonBaseInfo.SP) {
            this.order.push(this.currentRedPokemon)
            this.order.push(this.currentBluePokemon)
        } else {
            this.order.push(this.currentBluePokemon)
            this.order.push(this.currentRedPokemon)
        }
    }

    beforeMove () {
        this.currentPokemon = this.order[0]
        this.order.pop()
    }

    waitMove () {
        
    }

    afterMove () {

    }

    roundFinish () {
        if (this.order.length == 0) {

        }
    }

    battleFinish () {

    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

