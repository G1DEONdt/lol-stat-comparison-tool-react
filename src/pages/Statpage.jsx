import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import Stat from '../components/Stat';

function createChampionObject(champion) {
    function calculateStat(baseStat, growthFactor) {
        let array = [];
    
        for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
            if (currentLevel == 1){
                array.push(baseStat);
            } else {
                array.push(baseStat + growthFactor * (currentLevel - 1) * ((0.7025 + 0.0175 * (currentLevel - 1))));
            }
        }
    
        return array;
    };

    function calculateAttackSpeed(baseStat, growthFactor){
        let array = [];
    
        for (let currentLevel = 1; currentLevel <= 18; currentLevel++){
            if (currentLevel == 1) {
                array.push(baseStat);
            } else {
                array.push(baseStat * (1 + ((growthFactor * (currentLevel - 1) * ((0.7025 + 0.0175 *(currentLevel - 1)))) / 100)));
            }
        }
    
        return array;
    }

    return {
        name: champion.id,
        image: champion.image.full,
        attack: calculateStat(champion.stats.attackdamage, champion.stats.attackdamageperlevel),
        attackSpeed: calculateAttackSpeed(champion.stats.attackspeed, champion.stats.attackspeedperlevel),
        attackRange: champion.stats.attackrange,
        hp: calculateStat(champion.stats.hp, champion.stats.hpperlevel),
        hpRegen: calculateStat(champion.stats.hpregen, champion.stats.hpregenperlevel),
        armour: calculateStat(champion.stats.armor, champion.stats.armorperlevel),
        magicResist: calculateStat(champion.stats.spellblock, champion.stats.spellblockperlevel),
    }
}


export default function Statpage() {
  const location = useLocation();
  const c1 = createChampionObject(location.state.c1);
  const c2 = createChampionObject(location.state.c2);
  console.log(c1);
  console.log(c2);

  return (
    <>
        <Header />
        <div className='row-start-3 col-start-2 col-end-5 border border-white border-dotted'>
            <div className='stat-container'>
                <Stat images={[c1.image, c2.image]} stats={[c1.attack, c2.attack]}></Stat>
            </div>
        </div>
    </>
  )
}
