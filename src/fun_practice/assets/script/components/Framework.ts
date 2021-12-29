
import * as cc from 'cc';
import PokemonBattleInfo from '../information/pokemon/PokemonBattleInfo';
const { ccclass, property } = cc._decorator;
 
@ccclass('Framework')
export class Framework extends cc.Component {
    public pokemons: PokemonBattleInfo[] = []
    public currentPokemon!: PokemonBattleInfo;

    start () {
        // [3]
    }

    onload () {

    }

    reload () {

    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

