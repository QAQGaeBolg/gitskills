import PokemonBattleInfo from "../../pokemon/PokemonBattleInfo"
import PokemonUserInfo from "../../pokemon/PokemonUserInfo"
import "jquery"
import { assert } from "cc"

export default class UserInfo {
    userId: string
    name: string
    pokemons: PokemonUserInfo[]
    team: PokemonUserInfo[]

    constructor (userId: string) {
        this.userId = userId
        this.name = ""
        this.pokemons = []
        this.team = []
        let _this = this
        $.getJSON(`../data/user${userId}.json`, function (data) {
            _this.userId = data.userId
            _this.name = data.name
            _this.pokemons = []
            for (let i = 0; i < data.pokemons.length; i++) {
                _this.pokemons.push(
                    new PokemonUserInfo(data.pokemons[i].pokemonId, data.pokemons[i].level, data.pokemons[i].skillList, data.pokemons[i].exp)
                )
            }
            _this.team = []
            for (let i = 0; i < data.team.length; i++) {
                _this.team.push(
                    new PokemonUserInfo(data.team[i].pokemonId, data.team[i].level, data.team[i].skillList, data.team[i].exp)
                )
            }
        })
        assert(this.name !== "" && this.pokemons !== [] && this.team !== [])
    }
}