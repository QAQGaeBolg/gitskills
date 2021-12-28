import PokemonFactory from "../factory/PokemonFactory";
import UserInfo from "../information/player/components/UserInfo";
import PokemonBattleInfo from "../information/pokemon/PokemonBattleInfo";
import { BattleState } from "../object/BattleState";

export default class SceneBaseInfo {
    public redUser!: UserInfo
    public blueUser!: UserInfo
    public redPokemons: PokemonBattleInfo[] = []
    public bluePokemons: PokemonBattleInfo[] = []
    public currentRedPokemon!: PokemonBattleInfo;
    public currentBluePokemon!: PokemonBattleInfo;
    public state: BattleState = BattleState.LoadScene
    public sceneBaseInfo!: SceneBaseInfo
    public attacker!: PokemonBattleInfo
    public defencer!: PokemonBattleInfo
    public order!: PokemonBattleInfo[]

    public userObserver: any[] = []
    public pokemonsObserver: any[] = []

    public setUser(redUser: UserInfo, blueUser: UserInfo) {
        this.redUser = redUser
        this.blueUser = blueUser
        for (let i = 0; i < this.userObserver.length; i++) {
            this.userObserver[i].change = true
        }
    }

    public setPokemons(redPokemons: PokemonBattleInfo[], bluePokemons: PokemonBattleInfo[]) {
        this.redPokemons = redPokemons
        this.bluePokemons = bluePokemons
        this.
        for (let i = 0; i < this.pokemonsObserver.length; i++) {
            this.pokemonsObserver[i].change = true
        }
    }
}