
import * as cc from 'cc';
import PokemonFactory from '../factory/PokemonFactory';
import { calculateDamage } from '../function/Calculation';
import PokemonBattleInfo from '../information/pokemon/PokemonBattleInfo';
import Skill from '../information/skill/Skill';
import { BattleState } from '../object/BattleState';
import { BattleLog } from './BattleLog';
import { Framework } from './Framework';
import { HPController } from './HPController';
import { Scene } from './Scene';
import SceneBaseInfo from './SceneBaseInfo';
import { SkillList } from './SkillList';
const { ccclass, property } = cc._decorator;
const redColor: string = "#FA083D"
const blueColor: string = "#043cf4"

@ccclass('SceneController')
export class SceneController extends cc.Component {
    
    public sceneBaseInfo: SceneBaseInfo = new SceneBaseInfo()
    public pokemonFactory: PokemonFactory = new PokemonFactory()
    public action!: { skill: Skill | null, wait: boolean, quit: boolean }
    public order!: PokemonBattleInfo[]
    public change: boolean = false
    public PVP!: boolean

    start () {
        var data: any = this.node.getChildByName('Data')
        this.sceneBaseInfo.setUser(data.redUser, data.blueUser)
        this.loadScene()
    }

    onLoad () {
        this.reload()
    }

    reload () {
        var pokemonFrame, framework, scene, hp, hpController
        var canvas = this.node
        var leftScene = canvas.getChildByName("LeftScene") as cc.Node
        console.log(`this is ${leftScene.name}`)
        scene = leftScene.getComponent(Scene) as Scene
        this.sceneBaseInfo.addObsercer(this.sceneBaseInfo.observer, scene)
        pokemonFrame = leftScene.getChildByName("Framework") as cc.Node
        framework = pokemonFrame.getComponent(Framework) as Framework
        this.sceneBaseInfo.addObsercer(this.sceneBaseInfo.observer, framework)
        hp = pokemonFrame.getChildByName("HP") as cc.Node
        hpController = hp.getComponent(HPController) as HPController
        this.sceneBaseInfo.addObsercer(this.sceneBaseInfo.observer, hpController)

        var rightScene = canvas.getChildByName("RightScene") as cc.Node
        scene = rightScene.getComponent(Scene) as Scene
        this.sceneBaseInfo.addObsercer(this.sceneBaseInfo.observer, scene)
        pokemonFrame = leftScene.getChildByName("Framework") as cc.Node
        framework = pokemonFrame.getComponent(Framework) as Framework
        this.sceneBaseInfo.addObsercer(this.sceneBaseInfo.observer, framework)
        hp = pokemonFrame.getChildByName("HP") as cc.Node
        hpController = hp.getComponent(HPController) as HPController
        this.sceneBaseInfo.addObsercer(this.sceneBaseInfo.observer, hpController)
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
        let time = 30
        let _this = this
        this.schedule(function () {
            time--;
            if (time == 0) {
                _this.sceneBaseInfo.state = BattleState.AfterMove
            }
        }, 1, 30)
    }

    afterMove () {
        var nodeBattleLog = this.node.getChildByName("Canvas")?.getChildByName("Skill")?.getChildByName("Log")
        var battleLog: BattleLog = nodeBattleLog?.getComponent(BattleLog) as BattleLog
        let attackerName = this.sceneBaseInfo.attacker.pokemonBaseInfo.pokemonInfo.name
        let defencerName = this.sceneBaseInfo.defencer.pokemonBaseInfo.pokemonInfo.name        
        if (this.action.skill !== null) {
            let dmg = calculateDamage(this.sceneBaseInfo.attacker, this.sceneBaseInfo.defencer, this.action.skill)
            let skillName = this.action.skill.name
            battleLog.battleLog = `【战斗】${attackerName}对${defencerName}使用了${skillName}，造成了${dmg}伤害。`
        } else if (this.action.wait) {
            battleLog.battleLog = `【战斗】${attackerName}在等待时机。`
        } else if (this.action.quit) {
            var userName
            if (this.sceneBaseInfo.attacker == this.sceneBaseInfo.currentRedPokemon) {
                userName = this.sceneBaseInfo.redUser.name
            } else {
                userName = this.sceneBaseInfo.blueUser.name
            }
            battleLog.battleLog = `【战斗】${userName}退出了战斗。`
        }
        this.sceneBaseInfo.setState(BattleState.RoundFinish)
    }

    roundFinish () {
        if (this.order.length == 0) {
            this.sceneBaseInfo.setState(BattleState.RoundStart)
        } else {
            this.sceneBaseInfo.setState(BattleState.BeforeMove)
        }
    }

    battleFinish () {
        var canvas = this.node
        let node = new cc.Node("Message")
        node.setPosition(0, 0, 0)
        canvas.addChild(node)
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

