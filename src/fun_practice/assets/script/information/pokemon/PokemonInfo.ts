import { Race } from "./Race"
import Skill from "../skill/Skill"
import Evolution from "../../object/Evaluation"

export class PokemonInfo {
    public name: string
    public pokemonId: string
    public firstRace: Race
    public secondRace: Race
    public nextEvolution: number
    public baseHP: number
    public baseATK: number
    public baseDEF: number
    public baseSP: number
    public HPIncrement: number
    public ATKIncrement: number
    public DEFIncrement: number
    public SPIncrement: number

    constructor(
        name: string,
        pokemonId: string,
        firstRace: Race,
        secondRace: Race,
        nextEvolution: number,
        baseHP: number,
        baseATK: number,
        baseDEF: number,
        baseSP: number,
        HPIncrement: number,
        ATKIncrement: number,
        DEFIncrement: number,
        SPIncrement: number,
    ) {
        this.name = name
        this.pokemonId = pokemonId
        this.firstRace = firstRace
        this.secondRace = secondRace
        this.nextEvolution = nextEvolution
        this.baseHP = baseHP
        this.baseATK = baseATK
        this.baseDEF = baseDEF
        this.baseSP = baseSP
        this.HPIncrement = HPIncrement
        this.ATKIncrement = ATKIncrement
        this.DEFIncrement = DEFIncrement
        this.SPIncrement = SPIncrement
    }
}

const maxLevel = 100
export var PokemonNameMap: Map<string, string> = new Map(
    [
        ["妙蛙种子", "001"],
        ["妙蛙草", "002"],
        ["妙蛙花", "003"],
        ["超级妙蛙花", "004"],
        ["超级巨化妙蛙花", "005"],
        ["皮丘", "006"],
        ["皮卡丘", "007"],
        ["雷丘", "008"],
        ["超雷丘", "009"],
        ["小火龙", "010"],
        ["火恐龙", "011"],
        ["喷火龙", "012"],
        ["超级喷火龙X", "013"],
        ["超级喷火龙Y", "014"],
        ["超级巨化喷火龙", "015"],
        ["妙蛙花", "003"],
    ]
)
export var PokemonMap: Map<string, PokemonInfo> = new Map(
    [
        ["001", new PokemonInfo("妙蛙种子", "001", Race.Grass, Race.Prison, 12, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["002", new PokemonInfo("妙蛙草", "002", Race.Grass, Race.Prison, 20, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["003", new PokemonInfo("妙蛙花", "003", Race.Grass, Race.Prison, maxLevel + 1, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["004", new PokemonInfo("超级妙蛙花", "004", Race.Grass, Race.Prison, maxLevel + 1, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["005", new PokemonInfo("超级巨化妙蛙花", "005", Race.Grass, Race.Prison, maxLevel + 1, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["006", new PokemonInfo("皮丘", "006", Race.Electricity, Race.None, 14, 22, 12, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["007", new PokemonInfo("皮卡丘", "007", Race.Electricity, Race.None, 28, 22, 12, 10, 7, 2.5, 1.8, 1.6, 0.9)],
        ["008", new PokemonInfo("雷丘", "008", Race.Electricity, Race.None, maxLevel + 1, 22, 12, 10, 7, 3, 2.1, 1.9, 1.2)],
        ["009", new PokemonInfo("超雷丘", "009", Race.Electricity, Race.Super, maxLevel + 1, 25, 17, 17, 14, 3.1, 2.2, 1.95, 1.23)],
        ["010", new PokemonInfo("小火龙", "010", Race.Fire, Race.None, 19, 20, 14, 13, 6, 2, 2, 1.5, 1)],
        ["011", new PokemonInfo("火恐龙", "011", Race.Fire, Race.None, 19, 20, 14, 13, 6, 2.2, 2.4, 1.9, 1.1)],
        ["012", new PokemonInfo("喷火龙", "012", Race.Fire, Race.Fly, 19, 20, 14, 13, 6, 2.4, 2.5, 2, 1.2)],
        ["013", new PokemonInfo("超级喷火龙X", "013", Race.Fire, Race.Dragon, 19, 20, 14, 13, 6, 2.6, 2.6, 2.2, 1.3)],
        ["014", new PokemonInfo("超级喷火龙Y", "014", Race.Fire, Race.Fly, 19, 20, 14, 13, 6, 2.6, 2.6, 2.2, 1.3)],
        ["015", new PokemonInfo("超级巨化喷火龙", "015", Race.Fire, Race.Fly, 19, 20, 14, 13, 6, 2.67, 2.67, 2.27, 1.4)],
        ["016", new PokemonInfo("超雷丘", "009", Race.Electricity, Race.Super, maxLevel + 1, 25, 17, 17, 14, 3.1, 2.2, 1.95, 1.23)],
        ["017", new PokemonInfo("超雷丘", "009", Race.Electricity, Race.Super, maxLevel + 1, 25, 17, 17, 14, 3.1, 2.2, 1.95, 1.23)],
        ["018", new PokemonInfo("超雷丘", "009", Race.Electricity, Race.Super, maxLevel + 1, 25, 17, 17, 14, 3.1, 2.2, 1.95, 1.23)],

    ]
)