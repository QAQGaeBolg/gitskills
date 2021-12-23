export enum Race {
    None = 0,
    Fire = 1,
    Water = 2,
    Grass = 3,
    Prison = 4,
    Normal = 5,
    Fly = 6,
    Electricity = 7,
    Super = 8,
    Evil = 9,
    Fight = 10,
    Ground = 11,
    Rock = 12,
    Insect = 13,
    Ghost = 14,
    Steel = 15,
    Ice = 16,
    Dragon = 17,
    Fairy = 18
}

export default class RaceInfo {
    private race: Race
    private name: string
    private strength: Race[]
    private weak: Race[]
    private noEffect: Race[]

    constructor(race: Race, name: string, strength: Race[], weak: Race[], noEffect: Race[]) {
        this.race = race
        this.name = name
        this.strength = strength
        this.weak = weak
        this.noEffect = noEffect
    }

    public getRace(): Race {
        return this.race
    }
    public getName(): string {
        return this.name
    }
    public getStrength(): Race[] {
        return this.strength
    }
    public getWeak(): Race[] {
        return this.weak
    }
    public getNoEffect(): Race[] {
        return this.noEffect
    }
}

export var RaceColor: Map<Race, string> = new Map([
    [Race.None, "E4E2DE"],
    [Race.Fire, "fe3700"],
    [Race.Water, "0093e4"],
    [Race.Grass, "91be19"],
    [Race.Prison, "bd78bd"],
    [Race.Normal, "9f9f9f"],
    [Race.Fly, "79bbd6"],
    [Race.Electricity, "e3b600"],
    [Race.Super, "db78c7"],
    [Race.Evil, "646464"],
    [Race.Fight, "c75500"],
    [Race.Ground, "cda042"],
    [Race.Rock, "9f7850"],
    [Race.Insect, "32b332"],
    [Race.Ghost, "8b78ef"],
    [Race.Steel, "95b3db"],
    [Race.Ice, "0b6ed"],
    [Race.Dragon, "3c64c7"],
    [Race.Fairy, "fe7eb7"]
])

export var RaceName: Map<Race, string> = new Map([
    [Race.None, "无"],
    [Race.Fire, "火"],
    [Race.Water, "水"],
    [Race.Grass, "草"],
    [Race.Prison, "毒"],
    [Race.Normal, "一般"],
    [Race.Fly, "飞行"],
    [Race.Electricity, "电"],
    [Race.Super, "超"],
    [Race.Evil, "恶"],
    [Race.Fight, "格斗"],
    [Race.Ground, "地面"],
    [Race.Rock, "岩石"],
    [Race.Insect, "虫"],
    [Race.Ghost, "幽灵"],
    [Race.Steel, "钢"],
    [Race.Ice, "冰"],
    [Race.Dragon, "龙"],
    [Race.Fairy, "妖精"]
])

export var RaceMap: Map<Race, RaceInfo> = new Map([
    [Race.None, new RaceInfo(Race.None, "无", [], [], [])],
    [Race.Fire, new RaceInfo(Race.Fire, "火", [Race.Insect, Race.Steel, Race.Grass, Race.Ice], [Race.Rock, Race.Fire, Race.Water, Race.Dragon], [])],
    [Race.Water, new RaceInfo(Race.Water, "水", [Race.Ground, Race.Rock, Race.Fire], [Race.Water, Race.Grass, Race.Dragon], [])],
    [Race.Grass, new RaceInfo(Race.Grass, "草", [Race.Ground, Race.Rock, Race.Water], [Race.Fly, Race.Prison, Race.Insect, Race.Steel, Race.Fire, Race.Grass, Race.Dragon], [])],
    [Race.Prison, new RaceInfo(Race.Prison, "毒", [Race.Grass, Race.Fairy], [Race.Prison, Race.Ground, Race.Rock, Race.Ghost], [Race.Steel])],
    [Race.Normal, new RaceInfo(Race.Normal, "普通", [], [Race.Rock, Race.Steel], [Race.Ghost])],
    [Race.Fly, new RaceInfo(Race.Fly, "飞行", [Race.Fight, Race.Insect, Race.Grass], [Race.Rock, Race.Steel, Race.Electricity], [])],
    [Race.Electricity, new RaceInfo(Race.Electricity, "电", [Race.Fly, Race.Water], [Race.Grass, Race.Electricity, Race.Dragon], [Race.Ground])],
    [Race.Super, new RaceInfo(Race.Super, "超能力", [Race.Fight, Race.Prison], [Race.Steel, Race.Super], [Race.Evil])],
    [Race.Evil, new RaceInfo(Race.Evil, "恶", [Race.Ghost, Race.Super], [Race.Fight, Race.Evil, Race.Fairy], [])],
    [Race.Fight, new RaceInfo(Race.Fight, "格斗", [Race.Normal, Race.Rock, Race.Steel, Race.Ice, Race.Evil], [Race.Fly, Race.Prison, Race.Insect, Race.Super, Race.Fairy], [Race.Ghost])],
    [Race.Ground, new RaceInfo(Race.Ground, "地面", [Race.Prison, Race.Rock, Race.Steel, Race.Fire, Race.Electricity], [Race.Insect, Race.Grass], [Race.Fly])],
    [Race.Rock, new RaceInfo(Race.Rock, "岩石", [Race.Fly, Race.Insect, Race.Fire, Race.Ice], [Race.Fight, Race.Ground, Race.Steel], [])],
    [Race.Insect, new RaceInfo(Race.Insect, "虫", [Race.Grass, Race.Super, Race.Evil], [Race.Fight, Race.Fly, Race.Prison, Race.Ghost, Race.Steel, Race.Fire, Race.Fairy], [])],
    [Race.Ghost, new RaceInfo(Race.Ghost, "幽灵", [Race.Ghost, Race.Super], [Race.Evil], [Race.Normal])],
    [Race.Steel, new RaceInfo(Race.Steel, "钢", [Race.Rock, Race.Ice, Race.Fairy], [Race.Steel, Race.Fire, Race.Water, Race.Electricity], [])],
    [Race.Ice, new RaceInfo(Race.Ice, "冰", [Race.Fly, Race.Ground, Race.Grass, Race.Dragon], [Race.Steel, Race.Fire, Race.Water, Race.Ice], [])],
    [Race.Dragon, new RaceInfo(Race.Dragon, "龙", [Race.Dragon], [Race.Steel], [Race.Fairy])],
    [Race.Fairy, new RaceInfo(Race.Fairy, "妖精", [Race.Fight, Race.Dragon, Race.Evil], [Race.Prison, Race.Steel, Race.Fire], [])],
])