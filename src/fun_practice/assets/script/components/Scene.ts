
import * as cc from 'cc';
import PokemonBattleInfo from '../information/pokemon/PokemonBattleInfo';
import { PokemonNameMap } from '../information/pokemon/PokemonInfo';
import SceneBaseInfo from './SceneBaseInfo';
const { ccclass, property } = cc._decorator;
 
@ccclass('Scene')
export class Scene extends cc.Component {
    public sceneBaseInfo!: SceneBaseInfo
    public currentPokemons!: PokemonBattleInfo[]
    public currentPokemon!: PokemonBattleInfo
    public scaleX!: number
    public change: boolean = false
    public side!: "red" | "blue"

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
        framework.pokemons = this.currentPokemons
        framework.currentPokemon = this.currentPokemon
    }
}
