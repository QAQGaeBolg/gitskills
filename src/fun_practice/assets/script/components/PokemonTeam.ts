
import { _decorator, Component, Node } from 'cc';
import Pokemon from '../information/pokemon/Pokemon';
import { BattleState } from '../object/BattleState';
import { CurrentPokemonLeft } from './CurrentPokemonLeft';
import { CurrentPokemonRight } from './CurrentPokemonRight';
import { FightSceneTwo } from './FightSceneTwo';
import { PokemonOffBattle } from './PokemonOffBattle';
const { ccclass, property } = _decorator;

 
@ccclass('PokemonTeam')
export class PokemonTeam extends Component {
    public pokemonTeam: Pokemon[]
    public completeLoading: boolean = false

    start () {
        // [3]
    }

    update (dt) {
        if (FightSceneTwo.battleState == BattleState.LoadBattle_2) {
            if (!this.completeLoading) {
                let currentPokemon = this.node.getChildByName("Current_pokemon")
                let secondPokemon = this.node.getChildByName("Second_pokemon")
                let thirdPokemon = this.node.getChildByName("Third_pokemon")
                if (FightSceneTwo.currentPlayer == "left_player") {
                    currentPokemon.getComponent(CurrentPokemonLeft).pokemon = this.pokemonTeam[0]
                } else {
                    currentPokemon.getComponent(CurrentPokemonRight).pokemon = this.pokemonTeam[0]
                }
                secondPokemon.getComponent(PokemonOffBattle).pokemon = (this.pokemonTeam.length > 1) ? this.pokemonTeam[1] : null
                thirdPokemon.getComponent(PokemonOffBattle).pokemon = (this.pokemonTeam.length > 2) ? this.pokemonTeam[2] : null                
                this.completeLoading = true
                FightSceneTwo.battleState = BattleState.LoadBattle_3
            }
        } else {
            this.completeLoading = false
        }
    }
}

