import React from 'react'
import Header from '../components/Header'

const AboutScreen = () => {
  return (
    <>
      <Header />
      <div className='about-us-banner'>
        <div className='about-us'>
          <div>
            <p>About us</p>
            <h3>
              We are leveraging technology to{' '}
              <span className='animating-text'>automate</span> Africa's food
              supply
            </h3>
          </div>
          <img src='./images/img.jpeg' className='img' alt='work' />
        </div>
        <div className='our-story pt-5'>
          <h6 className=''>our story</h6>
          <h5>Who we are</h5>
          <p>
            We are a diverse team committed to working together to create and
            deliver sustainable value for food businesses. We are connected by
            our shared core values which guide and shape our culture.
          </p>

          <p>
            At Vendease, we are adventurous people striving for excellence and
            transparency while respecting the individuals that make up our
            ecosystem. We understand ownership as taking responsibility for the
            growth in our roles and that of our customers' operations.
          </p>
        </div>
        <div className='mission-vision'>
          <div className='mission'>
            <h4>Our Mission</h4>
            <p>
              To solve food inflation and food wastage by automating Africa’s
              food supply.
            </p>
          </div>
          <div className='vission'>
            <h4>Our Mission</h4>
            <p>
              To solve food inflation and food wastage by automating Africa’s
              food supply.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutScreen
