
import * as cc from 'cc';
import PokemonBattleInfo from '../information/pokemon/PokemonBattleInfo';
import { PokemonMap, PokemonNameMap } from '../information/pokemon/PokemonInfo';
import SceneBaseInfo from './SceneBaseInfo';
const { ccclass, property } = cc._decorator;
 
@ccclass('Framework')
export class Framework extends cc.Component {
    public sceneBaseInfo!: SceneBaseInfo
    public side!: "red" | "blue"

    start () {
        
    }

    onload () {

    }

    reload () {
        var currentPokemon = this.node.getChildByName("CurrentPokemon") as cc.Node
        var secendPokemon = this.node.getChildByName("SecondPokemon") as cc.Node
        var thirdPokemon = this.node.getChildByName("ThirdPokemon") as cc.Node
        var HP = this.node.getChildByName("HP") as cc.Node
        var race = this.node.getChildByName("Race") as cc.Node
        var level = this.node.getChildByName("Level") as cc.Node
        var ATK = this.node.getChildByName("Attack") as cc.Node
        var DEF = this.node.getChildByName("Defence") as cc.Node
        var SP = this.node.getChildByName("Speed") as cc.Node
        let sbi = this.sceneBaseInfo
        cc.resources.load(
            `../../image/playerBackground_${this.side}.png`, 
            cc.SpriteFrame, 
            function (err, spriteFrame) {
                (currentPokemon.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame;
                (secendPokemon.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame;
                (thirdPokemon.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame;
                (HP.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame;
                (race.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame;
                (level.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame;
                (ATK.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame;
                (DEF.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame;
                (SP.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame;
            }
        )
        var node = currentPokemon.getChildByName("Sprite") as cc.Node
        var red: PokemonBattleInfo | null = sbi.currentRedPokemon, blue: PokemonBattleInfo | null = sbi.currentBluePokemon
        var png = `../../image/${PokemonMap.get((sbi.getItem(this.side, red, blue) as PokemonBattleInfo).pokemonBaseInfo.pokemonId)?.name}.png`
        cc.resources.load(
            png, 
            cc.SpriteFrame, 
            function (err, spriteFrame) {
                (node.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame
            }
        )
        node = secendPokemon.getChildByName("Sprite") as cc.Node
        red = sbi.redPokemons.length > 1 ? sbi.redPokemons[1] : null
        blue = sbi.bluePokemons.length > 1 ? sbi.bluePokemons[1] : null
        var item = sbi.getItem(this.side, red, blue)
        if (item !== null) {
            png = `../../image/${PokemonMap.get((item as PokemonBattleInfo).pokemonBaseInfo.pokemonId)?.name}.png`
            cc.resources.load(
                png, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    (node.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame
                }
            )            
        }
        node = thirdPokemon.getChildByName("Sprite") as cc.Node
        red = sbi.redPokemons.length > 2 ? sbi.redPokemons[2] : null
        blue = sbi.bluePokemons.length > 2 ? sbi.bluePokemons[2] : null
        item = sbi.getItem(this.side, red, blue)
        if (item !== null) {
            png = `../../image/${PokemonMap.get((item as PokemonBattleInfo).pokemonBaseInfo.pokemonId)?.name}.png`
            cc.resources.load(
                png, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    (node.getComponent(cc.Sprite) as cc.Sprite).spriteFrame = spriteFrame
                }
            )  
        }
        node = race.getChildByName("FirstRace") as cc.Node
        red = sbi.currentRedPokemon
        blue = sbi.currentBluePokemon
        item = sbi.getItem(this.side, red, blue)
        
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

