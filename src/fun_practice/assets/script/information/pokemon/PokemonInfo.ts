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
        ["妙蛙种子", "001"], ["妙蛙草", "002"], ["妙蛙花", "003"], ["超级妙蛙花", "004"], ["超级巨化妙蛙花", "005"],
        ["皮丘", "006"], ["皮卡丘", "007"], ["雷丘", "008"], ["超雷丘", "009"],
        ["小火龙", "010"], ["火恐龙", "011"], ["喷火龙", "012"], ["超级喷火龙X", "013"], ["超级喷火龙Y", "014"], ["超级巨化喷火龙", "015"],
        ["杰尼龟", "016"], ["卡咪龟", "017"], ["水箭龟", "018"], ["超级水箭龟", "019"], ["超级巨化水箭龟", "020"],
        ["波波", "021"], ["比比鸟", "022"], ["大比鸟", "023"], ["超级大比鸟", "024"],
        ["臭泥", "025"], ["超级臭泥", "026"], ["臭臭泥", "027"], ["超级臭臭泥", "028"],

    ]
)
export var PokemonMap: Map<string, PokemonInfo> = new Map([
        ["001", new PokemonInfo("妙蛙种子", "001", Race.Grass, Race.Prison, 12, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["002", new PokemonInfo("妙蛙草", "002", Race.Grass, Race.Prison, 20, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["003", new PokemonInfo("妙蛙花", "003", Race.Grass, Race.Prison, 30, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["004", new PokemonInfo("超级妙蛙花", "004", Race.Grass, Race.Prison, 55, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["005", new PokemonInfo("超级巨化妙蛙花", "005", Race.Grass, Race.Prison, maxLevel + 1, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["006", new PokemonInfo("皮丘", "006", Race.Electricity, Race.None, 14, 22, 12, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["007", new PokemonInfo("皮卡丘", "007", Race.Electricity, Race.None, 28, 22, 12, 10, 7, 2.5, 1.8, 1.6, 0.9)],
        ["008", new PokemonInfo("雷丘", "008", Race.Electricity, Race.None, 44, 22, 12, 10, 7, 3, 2.1, 1.9, 1.2)],
        ["009", new PokemonInfo("超雷丘", "009", Race.Electricity, Race.Super, maxLevel + 1, 25, 17, 17, 14, 3.1, 2.2, 1.95, 1.23)],
        ["010", new PokemonInfo("小火龙", "010", Race.Fire, Race.None, 16, 20, 14, 13, 6, 2, 2, 1.5, 1)],
        ["011", new PokemonInfo("火恐龙", "011", Race.Fire, Race.None, 30, 20, 14, 13, 6, 2.2, 2.4, 1.9, 1.1)],
        ["012", new PokemonInfo("喷火龙", "012", Race.Fire, Race.Fly, 46, 20, 14, 13, 6, 2.4, 2.5, 2, 1.2)],
        ["013", new PokemonInfo("超级喷火龙X", "013", Race.Fire, Race.Dragon, 60, 20, 14, 13, 6, 2.6, 2.6, 2.2, 1.3)],
        ["014", new PokemonInfo("超级喷火龙Y", "014", Race.Fire, Race.Fly, 82, 20, 14, 13, 6, 2.6, 2.6, 2.2, 1.3)],
        ["015", new PokemonInfo("超级巨化喷火龙", "015", Race.Fire, Race.Fly, maxLevel + 1, 20, 14, 13, 6, 2.67, 2.67, 2.27, 1.4)],
        ["016", new PokemonInfo("杰尼龟", "016", Race.Water, Race.None, 20, 40, 12, 17, 4, 3.1, 1.2, 1.95, 0.63)],
        ["017", new PokemonInfo("卡咪龟", "017", Race.Water, Race.None, 40, 40, 12, 17, 4, 4.1, 1.4, 1.95, 0.83)],
        ["018", new PokemonInfo("水箭龟", "018", Race.Water, Race.None, 60, 40, 12, 17, 4, 4.5, 1.5, 2.35, 0.93)],
        ["019", new PokemonInfo("超级水箭龟", "019", Race.Water, Race.None, 80, 40, 12, 17, 4, 4.5, 1.7, 2.55, 1.13)],
        ["020", new PokemonInfo("超级巨化水箭龟", "020", Race.Water, Race.None, maxLevel + 1, 40, 12, 17, 4, 4.6, 1.55, 2.39, 1.22)],
        ["021", new PokemonInfo("波波", "021", Race.Normal, Race.Fly, 18, 20, 19, 10, 10, 1.5, 2.5, 1.35, 1.5)],
        ["022", new PokemonInfo("比比鸟", "022", Race.Normal, Race.Fly, 38, 20, 19, 10, 10, 1.7, 2.9, 1.85, 1.9)],
        ["023", new PokemonInfo("大比鸟", "023", Race.Normal, Race.Fly, 52, 20, 19, 10, 10, 1.9, 3.3, 2.05, 2.2)],
        ["024", new PokemonInfo("超级大比鸟", "024", Race.Normal, Race.Fly, maxLevel + 1, 20, 19, 10, 10, 1.96, 3.5, 2.35, 2.5)],
        ["025", new PokemonInfo("臭泥", "025", Race.Prison, Race.None, 25, 30, 15, 10, 8, 1.5, 2.5, 1.35, 1.93)],
        ["026", new PokemonInfo("超级臭泥", "026", Race.Prison, Race.Evil, 45, 30, 15, 10, 8, 1.5, 2.5, 1.35, 1.93)],
        ["027", new PokemonInfo("臭臭泥", "027", Race.Prison, Race.None, 59, 30, 15, 10, 8, 1.5, 2.5, 1.35, 1.93)],
        ["028", new PokemonInfo("超级臭臭泥", "028", Race.Prison, Race.Evil, maxLevel + 1, 30, 15, 10, 8, 1.5, 2.5, 1.35, 1.93)]
    ]
)