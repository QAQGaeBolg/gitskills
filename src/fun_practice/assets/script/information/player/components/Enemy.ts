import Player from "./Player";
import Pokemon from "../../pokemon/Pokemon";
import Team from "./Team";

export default class Enemy extends Player{
    public name: string
    constructor(name: string, pokemons: Pokemon[], team: Team) {
        super(pokemons, team)
        this.name = name
    }
}