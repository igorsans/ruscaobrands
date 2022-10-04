import React from 'react'
import Style from './Style.js'
import Car from '/carrossel/car1.png'
import Car2 from '/carrossel/car2.png'


const Carousel = () => {
  return (
    <Style className='slider'>
        <div className='slide-track'>
            <div className='slide'>
                <img src={Car} alt="" />
            </div>
            <div className='slide'>
            <img src={Car2} alt="" />
            </div>
            <div className='slide'>
            </div>
            <div className='slide'>
            </div>
            <div className='slide'>
            </div>
            <div className='slide'>
            </div>
            <div className='slide'>
            </div>
            <div className='slide'>
            </div>
        </div>
    </Style>
  )
}

export default Carousel