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

  return (
      <>
        <div className='absolute inset-0 bg-gradient-to-b [--tw-gradient-from-position:90%] from-transparent to-amber-600/10 pointer-events-none'></div>
        <Header />
        <div className='relative mb-6 row-start-3 -row-end-1 col-start-2 col-end-8 flex flex-col gap-10 overflow-x-hidden overflow-y-scroll scrollbar-hide scroll-smooth'>
            <Stat title="Attack" images={[c1.image, c2.image]} stats={[c1.attack, c2.attack]}></Stat>
            <Stat title="Attack Speed" images={[c1.image, c2.image]} stats={[c1.attackSpeed, c2.attackSpeed]}></Stat>
            {/* <Stat title="Attack Range" images={[c1.image, c2.image]} stats={[c1.attack, c2.attack]}></Stat> */}
            <Stat title="HP" images={[c1.image, c2.image]} stats={[c1.hp, c2.hp]}></Stat>
            <Stat title="HP Regen (per second)" images={[c1.image, c2.image]} stats={[c1.hpRegen, c2.hpRegen]}></Stat>
            <Stat title="Armour" images={[c1.image, c2.image]} stats={[c1.armour, c2.armour]}></Stat>
            <Stat title="Magic Resist" images={[c1.image, c2.image]} stats={[c1.magicResist, c2.magicResist]}></Stat>
        </div>
    </>
  )
}
