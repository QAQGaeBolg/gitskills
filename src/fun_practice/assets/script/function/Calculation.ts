import PokemonBattleInfo from "../information/pokemon/PokemonBattleInfo"
import { PokemonMap } from "../information/pokemon/PokemonInfo"
import { Race, RaceMap } from "../information/pokemon/Race"
import Skill from "../information/skill/Skill"

export function calculateDamage(attacker: PokemonBattleInfo, defencer: PokemonBattleInfo, skill: Skill): number {
    let damage: number = attacker.pokemonBaseInfo.ATK / defencer.pokemonBaseInfo.DEF
    damage *= skill.power / 100
    damage *= attacker.pokemonBaseInfo.level / defencer.pokemonBaseInfo.level
    let attackerFirstRace = PokemonMap.get(attacker.pokemonBaseInfo.pokemonId)?.firstRace as unknown as Race
    let attackerSecondRace = PokemonMap.get(attacker.pokemonBaseInfo.pokemonId)?.secondRace as unknown as Race
    let defencerFirstRace = PokemonMap.get(defencer.pokemonBaseInfo.pokemonId)?.firstRace as unknown as Race
    let defencerSecondRace = PokemonMap.get(defencer.pokemonBaseInfo.pokemonId)?.secondRace as unknown as Race
    let result = Math.round(damage)
    let firstStrength = RaceMap.get(attackerFirstRace)?.getStrength() as unknown as Race[]
    let secondStrength = RaceMap.get(attackerSecondRace)?.getStrength() as unknown as Race[]
    let firstWeak = RaceMap.get(attackerFirstRace)?.getWeak() as unknown as Race[]
    let secondWeak = RaceMap.get(attackerSecondRace)?.getWeak() as unknown as Race[]
    let firstNoEffect = RaceMap.get(attackerFirstRace)?.getNoEffect() as unknown as Race[]
    let secondNoEffect = RaceMap.get(attackerSecondRace)?.getNoEffect() as unknown as Race[]
    if (
        firstStrength.indexOf(defencerFirstRace) != -1
        || firstStrength.indexOf(defencerSecondRace) != -1
        ) {
        result += damage
    }
    if (
        secondStrength.indexOf(defencerFirstRace) != -1
        || secondStrength.indexOf(defencerSecondRace) != -1
        ) {
        result += damage
    }
    if (
        firstWeak.indexOf(defencerFirstRace) != -1
        || firstWeak.indexOf(defencerSecondRace) != -1
        ) {
        if (result > damage) {
            result -= damage
        } else {
            result /= 2
        }
    }
    if (
        secondWeak.indexOf(defencerFirstRace) != -1
        || secondWeak.indexOf(defencerSecondRace) != -1
        ) {
        if (result > damage) {
            result -= damage
        } else {
            result /= 2
        }
    }
    if (
        firstNoEffect.indexOf(defencerFirstRace) != -1
        || firstNoEffect.indexOf(defencerSecondRace) != -1
        || secondNoEffect.indexOf(defencerFirstRace) != -1
        || secondNoEffect.indexOf(defencerSecondRace) != -1
        ) {
        result = 0
    }
    return Math.round(result)
}