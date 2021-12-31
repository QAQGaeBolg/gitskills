import PokemonUserInfo from "../../pokemon/PokemonUserInfo"
import * as cc from "cc"
/*
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
*/

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
        //let data = user
        //let data: any = loadJson("user", userId)
        let _this = this
        cc.resources.load(`json/user${userId}`, cc.JsonAsset, function (err, object0) {
            if (err) {
                console.log(err)
                return
            }
            let object: any = object0.json
            console.log(object)
            _this.userId = object.userId
            _this.name = object.name
            for (let i = 0; i < object.pokemons.length; i++) {
                _this.pokemons.push(
                    new PokemonUserInfo(object.pokemons[i].pokemonId, object.pokemons[i].level, object.pokemons[i].skillList, object.pokemons[i].exp)
                )
            }
            for (let i = 0; i < object.team.length; i++) {
                _this.team.push(
                    new PokemonUserInfo(object.team[i].pokemonId, object.team[i].level, object.team[i].skillList, object.team[i].exp)
                )
            }
        })

        /*
        for (let i = 0; i < data.pokemons.length; i++) {
            this.pokemons.push(
                new PokemonUserInfo(data.pokemons[i].pokemonId, data.pokemons[i].level, data.pokemons[i].skillList, data.pokemons[i].exp)
            )
        }
        this.team = []
        for (let i = 0; i < data.team.length; i++) {
            this.team.push(
                new PokemonUserInfo(data.team[i].pokemonId, data.team[i].level, data.team[i].skillList, data.team[i].exp)
            )
        }
        */
        cc.assert(this.name !== "" && this.pokemons !== [] && this.team !== [])
        
    }
}