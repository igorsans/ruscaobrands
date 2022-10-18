import React from 'react'
import FormRequest from '../FormRequest/FormRequest.jsx'
import SContact from './Style.js'

const Contact = () => {
  return (
    <SContact>
        <div className='infoContact'>
            <h3>Say Hello,<br/> I wanna listen <br/>to your story.</h3>
            <p>Get in touch using the form on the side.<br/> If you prefer, send an email to <br/> <a href="mailto:hello@ruscaobrands.com">hello@ruscaobrands.com</a></p>
        </div>
        <div>
            <FormRequest/>
        </div>
    </SContact>
  )
}

export default Contact