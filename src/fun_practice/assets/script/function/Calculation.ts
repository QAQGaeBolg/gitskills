import Pokemon from "../information/pokemon/Pokemon"
import { PokemonMap } from "../information/pokemon/PokemonInfo"
import { RaceMap } from "../information/pokemon/Race"
import Skill from "../information/skill/Skill"

export function calculateDamage(attacker: Pokemon, skill: Skill,  defencer: Pokemon): number {
    let damage: number = attacker.getLevel()
    damage *= skill.getPower()
    damage *= attacker.battleATK
    damage /= defencer.battleDEF
    damage /= 100
    let attackerFirstRace = PokemonMap.get(attacker.getPokemonId()).firstRace
    let attackerSecondRace = PokemonMap.get(attacker.getPokemonId()).secondRace
    let defencerFirstRace = PokemonMap.get(defencer.getPokemonId()).firstRace
    let defencerSecondRace = PokemonMap.get(defencer.getPokemonId()).secondRace
    let result = Math.round(damage)
    let firstStrength = RaceMap.get(attackerFirstRace).getStrength()
    let secondStrength = RaceMap.get(attackerSecondRace).getStrength()
    let firstWeak = RaceMap.get(attackerFirstRace).getWeak()
    let secondWeak = RaceMap.get(attackerSecondRace).getWeak()
    let firstNoEffect = RaceMap.get(attackerFirstRace).getNoEffect()
    let secondNoEffect = RaceMap.get(attackerSecondRace).getNoEffect()
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