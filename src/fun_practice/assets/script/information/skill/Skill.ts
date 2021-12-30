export enum Effect {
    Attack = 0,
    Strengthen = 1,
    Weaken = 2,
    Sleep = 3,
    Paralysis = 4,
    Bleed = 5
}

export default class Skill {
    public name: string
    public discription: string
    public power: number
    public coldingTime: number
    public cost: number
    public effect: Effect
    public probability: number
    public lockLevel: number

    constructor(
        name: string, 
        discription: string,
        power: number,
        coldingTime: number,
        cost: number,
        effect: Effect,
        probability: number,
        lockLevel: number) {
        this.name = name
        this.discription = discription
        this.power = power
        this.coldingTime = coldingTime
        this.cost = cost
        this.effect = effect
        this.probability = probability
        this.lockLevel = lockLevel
    }

    public getName(): string {
        return this.name
    }
    public getDiscription(): string {
        return this.discription
    }
    public getPower() {
        return this.power
    }
    public getColdingTime() {
        return this.coldingTime
    }
    public getCost() {
        return this.cost
    }
    public getEffect() {
        return this.effect
    }
    public getProbability() {
        return this.probability
    }
    public getLockLevel() {
        return this.lockLevel
    }
}

const skill_皮卡丘: Skill[] = [
    new Skill("电磁波", "向对手发出微弱的电击，从而让对手陷入麻痹状态。", 0, 3, 3, Effect.Paralysis, 90, 1),
    new Skill("踩踏", "用大脚踩踏对手进行攻击。有时会使对手畏缩。", 65, 2, 2, Effect.Attack, 100, 1),
    new Skill("吼叫", "放走对手，强制拉后备宝可梦上场。如果对手为野生宝可梦，战斗将直接结束。", 0, 1, 1, Effect.Attack, 100, 9),
    new Skill("瞪眼","用犀利的眼神使其害怕，从而降低对手的防御。", 0, 1, 1,Effect.Weaken,100,23),
    new Skill("跃起","也不攻击只是一蹦一蹦地跳，什么都不会发生……",0,2,2,Effect.Attack,0,39),
    new Skill("烟幕","向对手喷出烟或墨汁等，从而降低对手的命中率。",0,1,1,Effect.Weaken,100,46),
    new Skill("紧束","使用长长的身体或藤蔓等，在４～５回合内紧束对手进行攻击。",15,2,2,Effect.Bleed,90,57),
    new Skill("连环巴掌","用连环巴掌拍打对手进行攻击。连续攻击２～５次。",15,1,1,Effect.Bleed,85,68),
    new Skill("打雷","向对手劈下暴雷进行攻击。有时会让对手陷入麻痹状态。",110,2,2,Effect.Paralysis,70,79),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",130,1,1,Effect.Strengthen,100,82)
]

const skill_妙蛙种子: Skill[] = [
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1),
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1),
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1),
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1),
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1),
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1),
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1),
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1),
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1),
    new Skill("唱歌","让对手听舒适、美妙的歌声，从而陷入睡眠状态。",20,3,3,Effect.Attack,55,1)
]

const skill_杰尼龟: Skill[] = [
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1),
    new Skill("火箭头锤","第１回合把头缩进去，从而提高防御。第２回合攻击对手。",30,2,2,Effect.Attack,100,1)
]

const skill_小火龙: Skill[] = [
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11),
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11),
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11),
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11),
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11),
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11),
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11),
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11),
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11),
    new Skill("居合斩","用镰刀或爪子等切斩对手进行攻击。",30,1,1,Effect.Attack,95,11)
]

const skill_比比鸟: Skill[] = [
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1),
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1),
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1),
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1),
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1),
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1),
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1),
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1),
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1),
    new Skill("踩踏","用大脚踩踏对手进行攻击。有时会使对手畏缩。",25,1,1,Effect.Attack,100,1)
]

const skill_臭臭泥: Skill[] = [
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1),
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1),
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1),
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1),
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1),
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1),
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1),
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1),
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1),
    new Skill("闪光","使出耀眼光芒，从而降低对手的命中率。",30,2,2,Effect.Attack,100,1)
]

export var SkillListInfo: Map<string, Skill[]> = new Map(
    [
        ["001", skill_妙蛙种子],["002", skill_妙蛙种子],["003", skill_妙蛙种子],["004", skill_妙蛙种子],["005", skill_妙蛙种子],
        ["006", skill_皮卡丘],["007", skill_皮卡丘],["008", skill_皮卡丘],["009", skill_皮卡丘],
        ["010", skill_小火龙],["011", skill_小火龙],["012", skill_小火龙],["013", skill_小火龙],["014", skill_小火龙],["015", skill_小火龙],
        ["016", skill_杰尼龟],["017", skill_杰尼龟],["018", skill_杰尼龟],["019", skill_杰尼龟],["020", skill_杰尼龟],
        ["021", skill_比比鸟],["022", skill_比比鸟],["023", skill_比比鸟],["024", skill_比比鸟],
        ["025", skill_臭臭泥],["026", skill_臭臭泥],["027", skill_臭臭泥],["028", skill_臭臭泥]
    ]
)