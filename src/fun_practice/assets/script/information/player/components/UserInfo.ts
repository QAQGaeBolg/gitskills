import PokemonUserInfo from "../../pokemon/PokemonUserInfo"
import * as cc from "cc"
import * as user from "../data/user10001.json"
import * as enemy from "../data/enemy10001.json"

export function loadJson(player: "user" | "enemy", userId: string) {
    let json_url = `../data/${player}${userId}.json`
    return new Promise((resolve, reject) => {
        cc.resources.load(json_url, (err, data: cc.JsonAsset) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.json);
            }
        });
    });
}

export class UserInfo {
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
        let data: any = loadJson("user", userId)
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
        cc.assert(this.name !== "" && this.pokemons !== [] && this.team !== [])
    }
}