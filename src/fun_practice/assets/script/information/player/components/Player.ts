import Pokemon from "../../pokemon/Pokemon"
import { user_lkx, user_zyf } from "../data/userData"
import Team from "./Team"

export enum CurrentPlayer {
    Left,
    Right
}

export default class Player {
    private pokemons: Pokemon[]
    private team: Team

    constructor(pokemons: Pokemon[], team: Team) {
        this.pokemons = new Array()
        for (let i = 0; i < pokemons.length; i++) {
            this.pokemons.push(pokemons[i])
        }
        this.team = team
    }
    
    public getPokemons() {
        return this.pokemons
    }
    public getTeams() {
        return this.team
    }
}