




import React from 'react'
import {speakerData} from '../data/speaker'

const Speakers = () => {
    const firstfiveimages=speakerData.slice(0,4)
  return (
    <>
    <div className="proTitle">
        <h2>Speakers</h2>
      </div>
    <div className='proSection'>
      {
      firstfiveimages.map((item)=>{
        return(
          <div className='imgBox'>
            <img className='proImg' src={item.image} alt=""/>
          </div>
        )

      })
      }
    </div>
    </>
  )
}

export default Speakers