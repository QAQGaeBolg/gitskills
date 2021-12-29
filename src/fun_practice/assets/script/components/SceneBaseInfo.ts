import * as assert from "assert";
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
    public attacker!: PokemonBattleInfo
    public defencer!: PokemonBattleInfo
    public state!: BattleState

    public observer: any[] = []
    public userObserver: any[] = []
    public pokemonsObserver: any[] = []
    public currentPokemonObserver: any[] = []
    public roleObserver: any[] = []

    public getItem(side: "red" | "blue", red: any, blue: any): any {
        if (side == "red") {
            return red
        }
        return blue
    }

    public addObsercer(observer: any[], item: any) {
        observer.push(item)
        this.notifyObserver()
    }

    public notifyObserver() {
        for (let i = 0; i < this.observer.length; i++) {
            this.observer[i].sceneBaseInfo = this
        }
    }

    public setUser(redUser: UserInfo, blueUser: UserInfo) {
        this.redUser = redUser
        this.blueUser = blueUser
        for (let i = 0; i < this.userObserver.length; i++) {
            this.userObserver[i].change = true
        }
        this.notifyObserver()
    }

    public setPokemons(redPokemons: PokemonBattleInfo[], bluePokemons: PokemonBattleInfo[]) {
        this.redPokemons = redPokemons
        this.bluePokemons = bluePokemons
        for (let i = 0; i < this.pokemonsObserver.length; i++) {
            this.pokemonsObserver[i].change = true
        }
        this.setCurrentPokemon()
    }

    public setCurrentPokemon() {
        assert(this.redPokemons.length > 0 && this.bluePokemons.length > 0)
        this.currentRedPokemon = this.redPokemons[0]
        this.currentBluePokemon = this.bluePokemons[0]
        for (let i = 0; i < this.currentPokemonObserver.length; i++) {
            this.currentPokemonObserver[i].change = true
        }
        this.notifyObserver()
    }

    public setRole(attacker: PokemonBattleInfo, defencer: PokemonBattleInfo) {
        this.attacker = attacker
        this.defencer = defencer
        for (let i = 0; i < this.roleObserver.length; i++) {
            this.roleObserver[i].change = true
        }
        this.notifyObserver()
    }

    public setState(state: BattleState) {
        this.state = state
        this.notifyObserver()
    }
}