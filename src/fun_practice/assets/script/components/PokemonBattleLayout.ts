
import * as cc from 'cc'
import Pokemon from '../information/pokemon/Pokemon';
import { PokemonNameMap } from '../information/pokemon/PokemonInfo';
const { ccclass, property } = cc._decorator;

/**
 * Predefined variables
 * Name = PokemonBattleLayout
 * DateTime = Thu Nov 25 2021 01:45:21 GMT+0800 (GMT+08:00)
 * Author = QAQGaeBolg
 * FileBasename = PokemonBattleLayout.ts
 * FileBasenameNoExtension = PokemonBattleLayout
 * URL = db://assets/script/components/PokemonBattleLayout.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('PokemonBattleLayout')
export class PokemonBattleLayout extends cc.Component {
    public player: "left_player" | "right_player"
    public currentTeam: Pokemon[] = new Array()

    constructor(player: "left_player" | "right_player") {
        super()
        this.player = player
        let data = JSON.parse(cc.sys.localStorage.getItem(this.player) as string)
        let isEnemy = data.username === null || data.username === undefined
        let pokemons = data.pokemons
        let team = data.team
        for (let i = 0; i < team.length; i++) {
            this.currentTeam.push(
                new Pokemon(
                    PokemonNameMap.get(pokemons[team[i]].name) as string, 
                    isEnemy, 
                    pokemons[team[i]].level, 
                    pokemons[team[i]].battleSkillList,
                    (pokemons[team[i]].exp === null || pokemons[team[i]].exp === undefined ? 0 : pokemons[team[i]].exp),
                    (pokemons[team[i]].expCanGet === null || pokemons[team[i]].expCanGet === undefined ? 0 : pokemons[team[i]].expCanGet)
                )
            )
        }
    }

    public setCurrentTeam(team: Pokemon[]) {
        this.currentTeam = team
    }

    start () {
        // [3]
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
