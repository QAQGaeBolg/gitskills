import { Scene } from "../components/Scene";
import PokemonBattleInfo from "../information/pokemon/PokemonBattleInfo";

export default class SceneFactory {
    public createScene(scene: Scene, pokemonBattleInfo: PokemonBattleInfo){
        scene.pokemonBattleInfo = pokemonBattleInfo
    }
}