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
          <img
            src='https://res.cloudinary.com/teb/image/upload/v1678194746/innovate-concepts/7_dqpmqk.jpg'
            className='img'
            alt='work'
          />
        </div>
        <div className='our-story pt-5'>
          <h6 className=''>our story</h6>
          <h5>Who we are</h5>
          <p>
            INNOVATE CONCEPTS LTD is a firm of Chartered Architects, Interior
            Designers, Project Managers and Builders which provide Architectural
            and Civil Engineering Consultancy Services
          </p>

          <p>
            The company was established in 1987 and has gained a wealth of
            experience from its diverse body of work in Nigeria and Overseas to
            further enhance the growing indigenous participation in the
            construction industry
          </p>
          <p>
            For us, design is the means to create solutions to spatial and
            programmatic problems. Today, design is being redefined by
            sustainability. We are continually evolving our organization and
            design processes to deliver innovation aimed at helping clients and
            communities become more resourceful, resilient and regenerative.
          </p>
        </div>
        <div className='our-story pt-5'>
          <h6 className=''>our team</h6>
          <p>
            At Innovate Concept , each studio is led by responsive, experienced
            principals actively engaged in project work. They love what they do,
            and that kind of enthusiasm is contagious. On average, our
            principals have invested 15 years of their careers in the
            Construction Industry, a testament to our commitment to cultivate
            seasoned leaders with values of service, foresight, and design
            excellence.
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