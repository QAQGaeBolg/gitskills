
import * as cc from 'cc';
import Pokemon from '../information/pokemon/Pokemon';
import { PokemonMap, PokemonNameMap } from '../information/pokemon/PokemonInfo';
import { RaceColor, RaceName } from '../information/pokemon/Race';
import { BattleState } from '../object/BattleState';
import { FightSceneTwo } from './FightSceneTwo';
const { ccclass, property } = cc._decorator;

 
@ccclass('CurrentPokemonLeft')
export class CurrentPokemonLeft extends cc.Component {
    public pokemon: Pokemon
    public loadFinish: boolean = false

    start () {
        // [3]
    }

    onLoad() {
        
    }

    update (deltaTime: number) {
        if (FightSceneTwo.battleState == BattleState.LoadBattle_3) {
            let head = this.node.getChildByName("Head") as cc.Node
            let sprite = this.node.getChildByName("Sprite") as cc.Node
            let HP: cc.Node = this.node.getChildByName("HP")
            let race: cc.Node = this.node.getChildByName("Race")
            let level: cc.Node = this.node.getChildByName("Level")
            let atk: cc.Node = this.node.getChildByName("Attack")
            let def: cc.Node = this.node.getChildByName("Defence")
            let speed: cc.Node = this.node.getChildByName("Speed")
            cc.resources.load(
                `../../image/${PokemonNameMap.get(this.pokemon.getPokemonId())}.png`, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    head.getComponent(cc.Sprite).spriteFrame = spriteFrame
                }
            )
            cc.resources.load(
                `../../image/${PokemonNameMap.get(this.pokemon.getPokemonId())}.png`, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    sprite.getComponent(cc.Sprite).spriteFrame = spriteFrame
                }
            )
            cc.resources.load(
                `../../image/playerBackground_red.png`, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    HP.getComponent(cc.Sprite).spriteFrame = spriteFrame
                }
            )
            HP.getComponent(cc.UITransform).width = 240
            HP.getComponent(cc.UITransform).height = 80
            HP.setPosition(new cc.Vec3(205, 40))
            HP.getChildByName("user").getComponent(cc.Label).string = FightSceneTwo.leftPlayer.username
            HP.getChildByName("user").getComponent(cc.Label).color = new cc.Color("FA083D")
            HP.getChildByName("user").getComponent(cc.Label).fontSize = 30
            HP.getChildByName("user").setPosition(new cc.Vec3(-50, 20))
            HP.getChildByName("name").getComponent(cc.Label).string = PokemonMap.get(this.pokemon.getPokemonId()).name
            HP.getChildByName("name").getComponent(cc.Label).color = new cc.Color("000000")
            HP.getChildByName("name").getComponent(cc.Label).fontSize = 24
            HP.getChildByName("name").setPosition(new cc.Vec3(50, 20))
            HP.getChildByName("hp_number").getComponent(cc.Label).string = `${this.pokemon.getMaxHP()}/${this.pokemon.getMaxHP()}`
            HP.getChildByName("hp_number").getComponent(cc.Label).color = new cc.Color("000000")
            HP.getChildByName("hp_number").getComponent(cc.Label).fontSize = 20
            HP.getChildByName("hp_number").setPosition(new cc.Vec3(-70, 20))
            cc.resources.load(
                `../../texture/hp.png`,
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    HP.getChildByName("hp_column").getComponent(cc.Sprite).spriteFrame = spriteFrame
                }
            )
            HP.getChildByName("hp_column").getComponent(cc.UITransform).width = 120
            HP.getChildByName("hp_column").getComponent(cc.UITransform).height = 15
            HP.getChildByName("hp_column").setPosition(new cc.Vec3(40, -20))
            cc.resources.load(
                `../../image/playerBackground_red.png`, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    race.getComponent(cc.Sprite).spriteFrame = spriteFrame
                }
            )
            race.getComponent(cc.UITransform).width = 80
            race.getComponent(cc.UITransform).height = 40
            race.setPosition(new cc.Vec3(-40, -98))
            let First_Race = race.getChildByName("First_Race")
            let firstRace = PokemonMap.get(this.pokemon.getPokemonId()).firstRace
            First_Race.getComponent(cc.Label).string = RaceName.get(firstRace)
            First_Race.getComponent(cc.Label).color = new cc.Color(RaceColor.get(firstRace))
            First_Race.getComponent(cc.Label).fontSize = 20
            let Second_Race = race.getChildByName("First_Race")
            let secondRace = PokemonMap.get(this.pokemon.getPokemonId()).secondRace
            Second_Race.getComponent(cc.Label).string = RaceName.get(secondRace)
            Second_Race.getComponent(cc.Label).color = new cc.Color(RaceColor.get(secondRace))
            Second_Race.getComponent(cc.Label).fontSize = 20
            cc.resources.load(
                `../../image/playerBackground_red.png`, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    level.getComponent(cc.Sprite).spriteFrame = spriteFrame
                }
            )
            level.getChildByName("level").getComponent(cc.Label).string = `Lv ${this.pokemon.getLevel()}`
            level.getChildByName("level").getComponent(cc.Label).color = new cc.Color("000000")
            level.getChildByName("level").getComponent(cc.Label).fontSize = 24
            level.setPosition(new cc.Vec3(-40, 136))
            cc.resources.load(
                `../../image/playerBackground_red.png`, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    atk.getComponent(cc.Sprite).spriteFrame = spriteFrame
                }
            )
            atk.getChildByName("Label").getComponent(cc.Label).string = `攻击 ${this.pokemon.battleATK}`
            atk.getChildByName("Label").getComponent(cc.Label).color = new cc.Color("000000")
            atk.getChildByName("Label").getComponent(cc.Label).fontSize = 16
            atk.setPosition(new cc.Vec3(-40, -174))
            cc.resources.load(
                `../../image/playerBackground_red.png`, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    def.getComponent(cc.Sprite).spriteFrame = spriteFrame
                }
            )
            def.getChildByName("Label").getComponent(cc.Label).string = `防御 ${this.pokemon.battleDEF}`
            def.getChildByName("Label").getComponent(cc.Label).color = new cc.Color("000000")
            def.getChildByName("Label").getComponent(cc.Label).fontSize = 16
            def.setPosition(new cc.Vec3(-40, -212))
            cc.resources.load(
                `../../image/playerBackground_red.png`, 
                cc.SpriteFrame, 
                function (err, spriteFrame) {
                    speed.getComponent(cc.Sprite).spriteFrame = spriteFrame
                }
            )
            speed.getChildByName("Label").getComponent(cc.Label).string = `速度 ${this.pokemon.battleSP}`
            speed.getChildByName("Label").getComponent(cc.Label).color = new cc.Color("000000")
            speed.getChildByName("Label").getComponent(cc.Label).fontSize = 16
            speed.setPosition(new cc.Vec3(-40, -250))
            this.loadFinish = true
            FightSceneTwo.battleState = BattleState.RoundStart
        } else {
            this.loadFinish = false
        }
    }
}

