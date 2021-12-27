import { assert } from "cc";
import PokemonUserInfo from "../../pokemon/PokemonUserInfo";

export default class EnemyInfo {
    public enemyId: string
    public team: PokemonUserInfo[]

    constructor (enemyId: string) {
        this.enemyId = enemyId
        this.team = []
        let _this = this
        $.getJSON(`../data/enemy${enemyId}.json`, function (data) {
            for (let i = 0; i < data.team.length; i++) {
                _this.team.push(
                    new PokemonUserInfo(data.team[i].pokemonId, data.team[i].level, data.team[i].skillList, data.team[i].exp)
                )
            }
        })
        assert(this.team !== [])
    }
}