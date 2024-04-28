import React from 'react'
import { StrikeData } from '../../assets/HomeData/cs2'
import GameCard from '../MarketPlace/GameCard'

const GridLayout = () => {
  return (
   <>

    <div className='CatalogPage-content bg-red w-full'>
     {/* header  */}
     <div className='text-white flex flex-col justify-between  px-3'>
      <div>
       {/* path  */}
       <p><span>Counter-Strik2 </span> <span>Pistols</span></p>
      </div>
      <div>
       {/* items count  */}
      </div>
      <div>
       {/* grid or flex layout and select filter */}
      </div>
     </div>
     <div className='CatalogPage-items CatalogPage-items--grid'>
      {/* dispalying items  */}
      {StrikeData.map((data, index) => (
            <GameCard key={index} data={data} className='clas' />
          ))}
     </div>
    </div>
    </>
  )
}

export default GridLayout