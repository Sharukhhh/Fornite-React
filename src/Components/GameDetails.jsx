import React from 'react';
import fortnite2 from '../assets/fortnite2.png';
import map from '../assets/map.png';
import warfield from '../assets/warfield.png';
import GameCard from './GameCard';

const GameDetails = () => {
  return (
    <>
        <div className='bg-black text-white'>
            <div className='container mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

                    <GameCard image={warfield} para={'Explore large, destructible environments where no two games are ever the same.'}/>

                    <GameCard image={map} para={'Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale'}/>

                    <GameCard image={fortnite2} para={'Discover even more ways to play across thousands of creator-made game genres'}/>

                </div>
            </div>
        </div>
    </>
  )
}

export default GameDetails