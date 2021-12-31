import * as cc from "cc";
import PokemonUserInfo from "../../pokemon/PokemonUserInfo";
//import { loadJson } from "./UserInfo";


export default class EnemyInfo {
    public enemyId: string
    public name: string
    public team: PokemonUserInfo[]

    constructor (enemyId: string) {
        this.enemyId = enemyId
        this.name = ""
        this.team = []
        //let data = enemy
        let _this = this
        cc.resources.load(`json/enemy${enemyId}`,cc.JsonAsset, function (err, object0) {
            if (err) {
                console.log(err)
                return
            }
            let object: any = object0.json
            console.log(object)
            _this.name = object.name
            for (let i = 0; i < object.team.length; i++) {
                _this.team.push(
                    new PokemonUserInfo(object.team[i].pokemonId, object.team[i].level, object.team[i].skillList, object.team[i].exp)
                )
            }
        })
        //let data: any = loadJson("enemy", enemyId)
        
        /*
        this.name = data.name
        for (let i = 0; i < data.team.length; i++) {
            
            this.team.push(
                new PokemonUserInfo(data.team[i].pokemonId, data.team[i].level, data.team[i].skillList, data.team[i].exp)
            )
        }
        */
        cc.assert(this.name !== "")
        cc.assert(this.team !== [])
        
    }
}