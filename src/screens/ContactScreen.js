import React, { useState } from 'react'
import Header from '../components/Header'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Textarea from '@mui/joy/Textarea'
import { Button } from '@mui/material'
import { sendMail } from '../utils'

const ContactScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const reqBody = {
      name,
      email,
      subject,
      message
    }
    sendMail(reqBody)
  }
  return (
    <>
      <Header />
      <h2>Contact</h2>
      <div className='contact-container'>
        <div className='contact-info'>
          <h3>Company Contact Information</h3>

          <h4>Lagos</h4>
          <p className='text-wrap'>
            <p>33a Jay Jay Oladimeji Close,</p>
            <p> Lagos, Nigeria</p>
            <p>
              <span>Phone </span>: +234 818 582 8965
            </p>
            <p>
              {' '}
              <span>Email:</span>{' '}
              <a href='mailto:info@innovateconceptsltd.com'>
                info@innovateconceptsltd.com
              </a>
            </p>
            <p>
              {' '}
              <span>Email:</span>{' '}
              <a href='mailto:innovatearchitects@yahoo.com'>
                innovatearchitects@yahoo.com
              </a>
            </p>
          </p>
        </div>
        <div className='map-email'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus'
            className='map-frame'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
            title='map'
          ></iframe>
          <div className='form-wrapper'>
            <h4>Send us an email</h4>
            <p>
              Please tell us about your business. CCP representative will walk
              you through our services
            </p>
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' }
              }}
              noValidate
              autoComplete='off'
            >
              <div>
                <TextField
                  required
                  id='outlined-required'
                  label='Name'
                  placeholder='Enter Your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  id='outlined-required'
                  label='Email'
                  placeholder='Enter Your email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <TextField
                  required
                  id='outlined-required'
                  label='Address'
                  placeholder='Please enter your address'
                /> */}
                <TextField
                  required
                  id='outlined-required'
                  label='Subject'
                  placeholder='Please enter Email Subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <Textarea
                  minRows={2}
                  placeholder='Type Message…'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </Box>

            <Button
              variant='contained'
              color='primary'
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '10px'
              }}
              onClick={submitHandler}
            >
              Send Message…
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactScreen
