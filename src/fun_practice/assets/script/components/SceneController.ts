
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
    public sceneBaseInfo: SceneBaseInfo = new SceneBaseInfo()
    public pokemonFactory: PokemonFactory = new PokemonFactory()
    public action: { skill: Skill } | null = null
    public order!: PokemonBattleInfo[]
    public change: boolean = false

    start () {
        var data: any = this.node.getChildByName('Data')
        this.sceneBaseInfo.setUser(data.redUser, data.blueUser)
        this.loadScene()        
    }

    onLoad () {
        var pokemon, pokemonFrame, framework, sprite, label
        var canvas = this.node.getChildByName("Canvas") as cc.Node
        var leftScene = canvas.getChildByName("LeftScnene") as cc.Node
        pokemon = leftScene.getChildByName("Pokemon") as cc.Node
        sprite = pokemon.getChildByName("Sprite") as cc.Node
        this.sceneBaseInfo.currentPokemonObserver.push(sprite)
        var rightScene = canvas.getChildByName("RightScene") as cc.Node
        var skill = canvas.getChildByName("Skill") as cc.Node

    }

    loadScene () {
        let redPokemons: PokemonBattleInfo[] = [], bluePokemons: PokemonBattleInfo[] = []
        for (let i = 0; i < this.sceneBaseInfo.redUser.team.length; i++) {
            redPokemons.push(this.pokemonFactory.createPokemonBattleInfo(this.sceneBaseInfo.redUser.team[i]))
        }
        for (let i = 0; i < this.sceneBaseInfo.blueUser.team.length; i++) {
            bluePokemons.push(this.pokemonFactory.createPokemonBattleInfo(this.sceneBaseInfo.blueUser.team[i]))
        }
        this.sceneBaseInfo.setPokemons(redPokemons, bluePokemons)        
        let leftScene = this.node.getChildByName("LeftScene")?.getComponent(Scene)
        cc.assert(leftScene !== null && leftScene !== undefined)
        leftScene.scaleX = 1
        let rightScene = this.node.getChildByName("RightScene")?.getComponent(Scene)
        cc.assert(rightScene !== null && rightScene !== undefined)
        rightScene.scaleX = -1
        this.sceneBaseInfo.setState(BattleState.RoundStart)
    }

    roundStart () {
        this.order = []
        if (this.sceneBaseInfo.currentRedPokemon.pokemonBaseInfo.SP >= this.sceneBaseInfo.currentBluePokemon.pokemonBaseInfo.SP) {
            this.order.push(this.sceneBaseInfo.currentRedPokemon)
            this.order.push(this.sceneBaseInfo.currentBluePokemon)
            this.order.push(this.sceneBaseInfo.currentBluePokemon)
            this.order.push(this.sceneBaseInfo.currentRedPokemon)
        } else {
            this.order.push(this.sceneBaseInfo.currentBluePokemon)
            this.order.push(this.sceneBaseInfo.currentRedPokemon)
            this.order.push(this.sceneBaseInfo.currentRedPokemon)
            this.order.push(this.sceneBaseInfo.currentBluePokemon)
        }
    }

    beforeMove () {
        this.sceneBaseInfo.attacker = this.order[0]
        this.order.pop()
        this.sceneBaseInfo.defencer = this.order[0]
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
        switch (this.sceneBaseInfo.state) {
            case BattleState.LoadScene: {
                this.loadScene()
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

