import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className='page-banner'>
        <div className='banner-header'>
          <p>
            Leading Architecture and Design firm creating thriving spaces across{' '}
            <span className='animating-text'>Africa</span>
          </p>
        </div>
        <div className='banner-text'>
          <p>
            At Innovate concepts ltd, we use data and dialogue to design places
            that perform with functional, technical,and aesthetic excellence.
          </p>
        </div>
        <div className='banner-button'>
          <MDBBtn className='btn' rounded>
            Get Started
          </MDBBtn>
        </div>
        <div className='mt-4'>
          <img
            src='https://res.cloudinary.com/teb/image/upload/v1678200155/innovate-concepts/Wole%20Olanipekun/_TM24347_3_copy_mo5xmq.png'
            className='img'
            alt='work'
          />
        </div>
        <div className='mt-4 slider'>
          <p className='sponsor-text'>Trusted by 3000+ African Businesses</p>
          <section class='slide-option'>
            <div id='infinite' class='highway-slider'>
              <div class='container highway-barrier'>
                <ul class='highway-lane'>
                  <li class='highway-car'>
                    <span class='fab fa-angular'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-js'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-node'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-html5'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-less'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-gulp'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-stack-overflow'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-codepen'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-aws'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-gitlab'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-chrome'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-google'></span>
                  </li>

                  <li class='highway-car'>
                    <span class='fab fa-angular'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-js'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-node'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-html5'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-less'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-gulp'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-stack-overflow'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-codepen'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-aws'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-gitlab'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-chrome'></span>
                  </li>
                  <li class='highway-car'>
                    <span class='fab fa-google'></span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
