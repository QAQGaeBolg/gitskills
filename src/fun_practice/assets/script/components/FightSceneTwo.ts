
import * as cc from 'cc';
import Enemy from '../information/player/components/Enemy';
import User from '../information/player/components/User';
import { user_lkx, user_zyf } from '../information/player/data/userData';
import Pokemon from '../information/pokemon/Pokemon';
import { PokemonNameMap } from '../information/pokemon/PokemonInfo';
import { BattleState } from '../object/BattleState';
import { CurrentPokemonLeft } from './CurrentPokemonLeft';
import { CurrentPokemonRight } from './CurrentPokemonRight';
import { PokemonTeam } from './PokemonTeam';
const { ccclass, property } = cc._decorator;
 
@ccclass('FightSceneTwo')
export class FightSceneTwo extends cc.Component {
    public static battleState: BattleState
    public static round: number = 0
    public static currentPlayer: "left_player" | "right_player" | null
    public static playOrder: ("left_player" | "right_player")[]
    public static leftPlayer: any
    public static rightPlayer: any
    public static leftTeam: Pokemon[]
    public static rightTeam: Pokemon[]

    public static lose(player: "left_player" | "right_player") {
        if (player == "left_player") {
            FightSceneTwo.leftTeam.pop()
        } else {
            FightSceneTwo.rightTeam.pop()
        }
        FightSceneTwo.battleState = BattleState.LoadBattle_1
    }

    public getPlayOrder() {
        console.log(this.node.getChildByName("Left_component").getComponent(PokemonTeam).pokemonTeam)
        console.log(this.node.getChildByName("Right_component").getComponent(PokemonTeam).pokemonTeam)
        console.log(FightSceneTwo.leftTeam)
        console.log(FightSceneTwo.rightTeam)
        let leftPokemon = this.node.getChildByName("Left_component").getChildByName("Current_pokemon")
        let rightPokemon = this.node.getChildByName("Right_component").getChildByName("Current_pokemon")
        if (leftPokemon.getComponent(CurrentPokemonLeft).pokemon.battleSP >= rightPokemon.getComponent(CurrentPokemonRight).pokemon.battleSP) {
            FightSceneTwo.playOrder = ["left_player", "right_player"]
        } else {
            FightSceneTwo.playOrder = ["right_player", "left_player"]
        }
    }

    start () {
        FightSceneTwo.round = 1
    }

    onLoad() {
        FightSceneTwo.battleState = BattleState.LoadBattle_1
        FightSceneTwo.round = 0
        //FightSceneTwo.leftPlayer = JSON.parse(cc.sys.localStorage.getItem("left_player") as string)
        //FightSceneTwo.rightPlayer = JSON.parse(cc.sys.localStorage.getItem("right_player") as string)
        FightSceneTwo.leftPlayer = user_zyf
        FightSceneTwo.rightPlayer = user_lkx
        FightSceneTwo.leftTeam = new Array()
        FightSceneTwo.rightTeam = new Array()
        let lp = FightSceneTwo.leftPlayer.pokemons
        let rp = FightSceneTwo.rightPlayer.pokemons
        let lt = FightSceneTwo.leftPlayer.team.team
        let rt = FightSceneTwo.rightPlayer.team.team
        for (let i = 0; i < lt.length; i++) {
            FightSceneTwo.leftTeam.push(
                new Pokemon(
                    PokemonNameMap.get(lp[lt[i]].name),
                    FightSceneTwo.leftPlayer.username !== null || FightSceneTwo.leftPlayer.username !== undefined,
                    lp[lt[i]].level,
                    lp[lt[i]].battleSkillList,
                    (lp[lt[i]].exp === null || lp[lt[i]].exp === undefined ? 0 : lp[lt[i]].exp),
                    (lp[lt[i]].expCanGet === null || lp[lt[i]].expCanGet === undefined ? 0 : lp[lt[i]].expCanGet)
                )
            )
            FightSceneTwo.leftTeam[i].onBattle()
        }
        for (let i = 0; i < rt.length; i++) {
            FightSceneTwo.rightTeam.push(
                new Pokemon(
                    PokemonNameMap.get(rp[rt[i]].name),
                    FightSceneTwo.rightPlayer.username !== null
                    || FightSceneTwo.rightPlayer.username !== undefined,
                    rp[rt[i]].level,
                    rp[rt[i]].battleSkillList,
                    (rp[rt[i]].exp === null || rp[rt[i]].exp === undefined ? 0 : rp[rt[i]].exp),
                    (rp[rt[i]].expCanGet === null || rp[rt[i]].expCanGet === undefined ? 0 : rp[rt[i]].expCanGet)
                )
            )
            FightSceneTwo.rightTeam[i].onBattle()
        }
    }

    update (deltaTime: number) {
        if (FightSceneTwo.battleState == BattleState.LoadBattle_1) {
            let Left_component = this.node.getChildByName("Left_component")
            let Right_component = this.node.getChildByName("Right_component")
            Left_component.getComponent(PokemonTeam).pokemonTeam = FightSceneTwo.leftTeam
            Right_component.getComponent(PokemonTeam).pokemonTeam = FightSceneTwo.rightTeam
            console.log(Left_component.getComponent(PokemonTeam).pokemonTeam)
            console.log(Right_component.getComponent(PokemonTeam).pokemonTeam)
            FightSceneTwo.battleState = BattleState.LoadBattle_2
        } else if (FightSceneTwo.battleState == BattleState.RoundStart) {
            this.getPlayOrder()
            FightSceneTwo.currentPlayer = null
        } else if (FightSceneTwo.battleState == BattleState.BeforeMove) {
            if (FightSceneTwo.currentPlayer === null) {
                FightSceneTwo.currentPlayer = FightSceneTwo.playOrder[0]
            } else {
                FightSceneTwo.currentPlayer = FightSceneTwo.playOrder[1]
            }
        } else if (FightSceneTwo.battleState == BattleState.WaitMove) {

        } else if (FightSceneTwo.battleState == BattleState.AfterMove) {
            if (FightSceneTwo.currentPlayer == FightSceneTwo.playOrder[0]) {
                FightSceneTwo.battleState = BattleState.BeforeMove
            } else {
                FightSceneTwo.battleState = BattleState.RoundFinish
            }
        } else if (FightSceneTwo.battleState == BattleState.RoundFinish) {
            FightSceneTwo.battleState = BattleState.RoundStart
        } else if (FightSceneTwo.battleState == BattleState.BattleFinish) {
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
