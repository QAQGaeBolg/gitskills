
import * as cc from 'cc';
import { timers } from 'jquery';
import PokemonFactory from '../factory/PokemonFactory';
import UserInfo from '../information/player/components/UserInfo';
import PokemonBattleInfo from '../information/pokemon/PokemonBattleInfo';
import Skill from '../information/skill/Skill';
import { BattleState } from '../object/BattleState';
import { Scene } from './Scene';
import SceneBaseInfo from './SceneBaseInfo';
const { ccclass, property } = cc._decorator;

@ccclass('SceneController')
export class SceneController extends cc.Component {
    public sceneBaseInfo!: SceneBaseInfo
    public pokemonFactory: PokemonFactory = new PokemonFactory()
    public action: { skill: Skill } | null = null
    public init!: boolean

    start () {
        // [3]
    }

    onLoad () {
        var node: any = this.node.getParent()
        var data: any = node.getChildByName('Data')
        this.sceneBaseInfo.setUser(data.redUser, data.blueUser)
        this.init = true
        this.loadScene(this.init)
        this.init = false
    }

    loadScene (init: boolean) {
        if (init) {
            let redPokemons: PokemonBattleInfo[] = [], bluePokemons: PokemonBattleInfo[] = []
            for (let i = 0; i < this.sceneBaseInfo.redUser.team.length; i++) {
                redPokemons.push(this.pokemonFactory.createPokemonBattleInfo(this.sceneBaseInfo.redUser.team[i]))
            }
            for (let i = 0; i < this.sceneBaseInfo.blueUser.team.length; i++) {
                bluePokemons.push(this.pokemonFactory.createPokemonBattleInfo(this.sceneBaseInfo.blueUser.team[i]))
            }
            this.sceneBaseInfo.setPokemons(redPokemons, bluePokemons)        
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
        this.state = BattleState.RoundStart
    }

    roundStart () {
        this.order = []
        if (this.currentRedPokemon.pokemonBaseInfo.SP >= this.currentBluePokemon.pokemonBaseInfo.SP) {
            this.order.push(this.currentRedPokemon)
            this.order.push(this.currentBluePokemon)
            this.order.push(this.currentBluePokemon)
            this.order.push(this.currentRedPokemon)
        } else {
            this.order.push(this.currentBluePokemon)
            this.order.push(this.currentRedPokemon)
            this.order.push(this.currentRedPokemon)
            this.order.push(this.currentBluePokemon)
        }
    }

    beforeMove () {
        this.attacker = this.order[0]
        this.order.pop()
        this.defencer = this.order[0]
        this.order.pop()
    }

    waitMove () {
        let _this = this
        this.scheduleOnce(function () {
            _this.sceneBaseInfo.state = BattleState.AfterMove
        })
    }

    afterMove () {

    }

    roundFinish () {
        if (this.order.length == 0) {

        }
    }

    battleFinish () {

    }

    update (deltaTime: number) {
        switch (this.state) {
            case BattleState.LoadScene: {
                this.loadScene(this.init)
                break
            }
            case BattleState.RoundStart: {
                this.roundStart()
                break
            }
            case BattleState.BeforeMove: {
                this.beforeMove()
                break
            }
            case BattleState.WaitMove: {
                this.waitMove()
                break
            }
            case BattleState.AfterMove: {
                this.afterMove()
                break
            }
            case BattleState.RoundFinish: {
                this.roundFinish()
                break
            }
            case BattleState.BattleFinish: {
                this.battleFinish()
                break
            }
        }
    }
}

