
import * as cc from 'cc';
import PokemonBattleInfo from '../information/pokemon/PokemonBattleInfo';
import { PokemonNameMap } from '../information/pokemon/PokemonInfo';
const { ccclass, property } = cc._decorator;
 
@ccclass('Scene')
export class Scene extends cc.Component {
    public pokemons: PokemonBattleInfo[] = []
    public currentPokemon!: PokemonBattleInfo
    public scaleX!: number

    start () {
        
    }

    onLoad () {
        this.reload()
    }

    reload () {
        var background, pokemon: any, framework: any
        pokemon = this.node.getChildByName("Pokemon")
        cc.resources.load(
            `../../image/${PokemonNameMap.get(this.currentPokemon.pokemonBaseInfo.pokemonId)}.png`, 
            cc.SpriteFrame, 
            function (err, spriteFrame) {
                pokemon.getComponent(cc.Sprite).spriteFrame = spriteFrame
            }
        )
        framework = this.node.getChildByName("Framework")
        framework.pokemons = this.pokemons
        framework.currentPokemon = this.currentPokemon
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
