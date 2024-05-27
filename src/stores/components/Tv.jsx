




import React from 'react'
import {tvData} from '../data/tv'

const Tv = () => {
    const firstfiveimages=tvData.slice(0,4)
  return (
    <>
    <div className="proTitle">
        <h2>Tv's</h2>
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

export default Tv