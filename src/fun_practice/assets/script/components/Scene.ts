
import * as cc from 'cc';
import PokemonBattleInfo from '../information/pokemon/PokemonBattleInfo';
import { PokemonMap, PokemonNameMap } from '../information/pokemon/PokemonInfo';
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
        this.reload()
    }

    onLoad () {
        
    }

    reload () {
        if (this.side == "red") {
            this.currentPokemons = this.sceneBaseInfo.redPokemons
            this.currentPokemon = this.sceneBaseInfo.currentRedPokemon
        } else {
            this.currentPokemons = this.sceneBaseInfo.bluePokemons
            this.currentPokemon = this.sceneBaseInfo.currentBluePokemon
        }
        var background, pokemon: any, framework: any
        pokemon = this.node.getChildByName("Pokemon")
        console.log(this.currentPokemon.pokemonBaseInfo.pokemonId)
        var png = `image/${PokemonMap.get(this.currentPokemon.pokemonBaseInfo.pokemonId)?.name}`
        console.log(`png = ${png}`)
        cc.resources.load(
            png, 
            cc.ImageAsset, 
            function (err, imageAsset) {
                if (err) {
                    console.log(err)
                    return
                }
                pokemon.getComponent(cc.Sprite).spriteFrame = cc.SpriteFrame.createWithImage(imageAsset)
            }
        )
        framework = this.node.getChildByName("Framework")
        framework.pokemons = this.currentPokemons
        framework.currentPokemon = this.currentPokemon
    }
}
