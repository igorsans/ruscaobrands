import React from 'react'
import StyledMore from './Style.js'
import me from '/me.png'

const More = () => {
  return (
    <StyledMore>
        <img src={me}/>
        <div className='content'>
            <h3>Far beyond your products and services, your customers are looking for an emotional and true connection with your company. They don't just buy your product, they buy your story. It's not about what you sell, it's about who you are.</h3>
            <h3>A powerful visual identity project is capable of changing the history of your company forever.</h3>
        </div>
        <div className='content'>
            <h3>Strengthens the image, amplifies communication with the public and enhances the consumer's power of choice and purchase, which can directly affect your company's revenue.</h3>
            <h3 className='strong'>This all requires attitude and, of course, courageous design work.</h3>
        </div>
    </StyledMore>
  )
}

export default More