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

const skill_妙蛙种子: Skill[] = [
    new Skill("迷昏拳", "有节奏地出拳攻击对手。有时会使对手混乱。", 70, 3, 3, Effect.Attack, 100, 1),
	new Skill("替身", "削减少许自己的HP，制造分身。分身将成为自己的替身。", 0, 1, 1, Effect.Attack, 0, 3),
	new Skill("必杀门牙", "用锋利的门牙牢牢地咬住对手进行攻击。有时会使对手畏缩。", 80, 3, 3, Effect.Attack, 90, 9),
	new Skill("超音波", "从身体发出特殊的音波，从而使对手混乱。", 0, 1, 1, Effect.Attack, 55, 30),
	new Skill("角撞", "用尖锐的角攻击对手。", 65, 2, 2, Effect.Attack, 100, 39),
	new Skill("飞叶快刀", "飞出叶片，切斩对手进行攻击。容易击中要害。", 55, 1, 1, Effect.Attack, 95, 45),
	new Skill("聚宝功", "向对手的身体投掷小金币进行攻击。战斗后可以拿到钱。", 40, 2, 2, Effect.Attack, 100, 72),
	new Skill("音爆", "将冲击波撞向对手进行攻击。必定会给予２０的伤害。", 20, 1, 1, Effect.Attack, 90, 79),
	new Skill("变身", "变身成对手宝可梦的样子，能够使用和对手完全相同的招式。", 0, 3, 3, Effect.Attack, 0, 94),
]
const skill_小火龙: Skill[] = [
    new Skill("替身", "削减少许自己的HP，制造分身。分身将成为自己的替身。", 0, 3, 3, Effect.Attack, 0, 1),
	new Skill("模仿", "可以将对手最后使用的招式，在战斗内变成自己的招式。", 0, 3, 3, Effect.Attack, 0, 12),
	new Skill("抓", "用坚硬且无比锋利的爪子抓对手进行攻击。", 40, 3, 3, Effect.Attack, 100, 16),
	new Skill("超音波", "从身体发出特殊的音波，从而使对手混乱。", 0, 2, 2, Effect.Attack, 55, 37),
	new Skill("聚宝功", "向对手的身体投掷小金币进行攻击。战斗后可以拿到钱。", 40, 1, 1, Effect.Attack, 100, 47),
	new Skill("忍耐", "在２回合内忍受攻击，受到的伤害会２倍返还给对手。", 0, 2, 2, Effect.Attack, 0, 48),
	new Skill("舍身冲撞", "拼命地猛撞向对手进行攻击。自己也会受到不小的伤害。", 120, 3, 3, Effect.Attack, 100, 65),
	new Skill("角撞", "用尖锐的角攻击对手。", 65, 2, 2, Effect.Attack, 100, 70),
	new Skill("撞击", "用整个身体撞向对手进行攻击。", 40, 2, 2, Effect.Attack, 100, 75),
	new Skill("大爆炸", "引发大爆炸，攻击自己周围所有的宝可梦。使用后自己会陷入濒死。", 250, 2, 2, Effect.Attack, 100, 79),
]
const skill_臭臭泥: Skill[] = [
    new Skill("头锤", "将头伸出，笔直地扑向对手进行攻击。有时会使对手畏缩。", 70, 2, 2, Effect.Attack, 100, 1),
	new Skill("炸蛋", "向对手用力投掷大大的蛋进行攻击。", 100, 3, 3, Effect.Attack, 75, 2),
	new Skill("必杀门牙", "用锋利的门牙牢牢地咬住对手进行攻击。有时会使对手畏缩。", 80, 1, 1, Effect.Attack, 90, 32),
	new Skill("居合斩", "用镰刀或爪子等切斩对手进行攻击。", 50, 1, 1, Effect.Attack, 95, 40),
	new Skill("猛撞", "以惊人的气势撞向对手进行攻击。自己也会受到少许伤害。", 90, 3, 3, Effect.Attack, 85, 44),
	new Skill("定身法", "阻碍对手行动，之前使出的招式将在４回合内无法使用。", 0, 2, 2, Effect.Attack, 100, 63),
	new Skill("跃起", "也不攻击只是一蹦一蹦地跳，什么都不会发生……", 0, 1, 1, Effect.Attack, 0, 71),
	new Skill("抓", "用坚硬且无比锋利的爪子抓对手进行攻击。", 40, 3, 3, Effect.Attack, 100, 78),
]
const skill_比比鸟: Skill[] = [
    new Skill("撞击", "用整个身体撞向对手进行攻击。", 40, 2, 2, Effect.Attack, 100, 1),
	new Skill("角撞", "用尖锐的角攻击对手。", 65, 2, 2, Effect.Attack, 100, 9),
	new Skill("拍击", "使用长长的尾巴或手等拍打对手进行攻击。", 40, 2, 2, Effect.Attack, 100, 27),
	new Skill("抓", "用坚硬且无比锋利的爪子抓对手进行攻击。", 40, 3, 3, Effect.Attack, 100, 31),
	new Skill("头锤", "将头伸出，笔直地扑向对手进行攻击。有时会使对手畏缩。", 70, 1, 1, Effect.Attack, 100, 47),
	new Skill("聚气", "深深地吸口气，集中精神。自己的攻击会变得容易击中要害。", 0, 2, 2, Effect.Attack, 0, 69),
	new Skill("音爆", "将冲击波撞向对手进行攻击。必定会给予２０的伤害。", 20, 1, 1, Effect.Attack, 90, 71),
	new Skill("猛撞", "以惊人的气势撞向对手进行攻击。自己也会受到少许伤害。", 90, 2, 2, Effect.Attack, 85, 88),
]
const skill_杰尼龟: Skill[] = [
    new Skill("角撞", "用尖锐的角攻击对手。", 65, 2, 2, Effect.Attack, 100, 1),
	new Skill("音爆", "将冲击波撞向对手进行攻击。必定会给予２０的伤害。", 20, 2, 2, Effect.Attack, 90, 18),
	new Skill("炸蛋", "向对手用力投掷大大的蛋进行攻击。", 100, 1, 1, Effect.Attack, 75, 30),
	new Skill("水枪", "向对手猛烈地喷射水流进行攻击。", 40, 1, 1, Effect.Attack, 100, 44),
	new Skill("模仿", "可以将对手最后使用的招式，在战斗内变成自己的招式。", 0, 2, 2, Effect.Attack, 0, 50),
	new Skill("断头钳", "用大钳子或剪刀等夹断对手进行攻击。只要命中就会一击濒死。", 200, 2, 2, Effect.Attack, 40, 58),
	new Skill("超音波", "从身体发出特殊的音波，从而使对手混乱。", 0, 2, 2, Effect.Attack, 55, 63),
	new Skill("水炮", "向对手猛烈地喷射大量水流进行攻击。", 110, 2, 2, Effect.Attack, 80, 69),
]
const skill_皮卡丘: Skill[] = [
    new Skill("迷昏拳", "有节奏地出拳攻击对手。有时会使对手混乱。", 70, 3, 3, Effect.Attack, 100, 1),
	new Skill("自爆", "引发爆炸，攻击自己周围所有的宝可梦。使用后陷入濒死。", 200, 2, 2, Effect.Attack, 100, 6),
	new Skill("破坏光线", "向对手发射强烈的光线进行攻击。下一回合自己将无法动弹。", 150, 2, 2, Effect.Attack, 90, 18),
	new Skill("超音波", "从身体发出特殊的音波，从而使对手混乱。", 0, 2, 2, Effect.Attack, 55, 28),
	new Skill("聚气", "深深地吸口气，集中精神。自己的攻击会变得容易击中要害。", 0, 2, 2, Effect.Attack, 0, 37),
	new Skill("高速星星", "发射星形的光攻击对手。攻击必定会命中。", 60, 2, 2, Effect.Attack, 0, 40),
	new Skill("音爆", "将冲击波撞向对手进行攻击。必定会给予２０的伤害。", 20, 2, 2, Effect.Attack, 90, 44),
	new Skill("角撞", "用尖锐的角攻击对手。", 65, 2, 2, Effect.Attack, 100, 64),
	new Skill("抓", "用坚硬且无比锋利的爪子抓对手进行攻击。", 40, 2, 2, Effect.Attack, 100, 69),
	new Skill("拍击", "使用长长的尾巴或手等拍打对手进行攻击。", 40, 3, 3, Effect.Attack, 100, 77),
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