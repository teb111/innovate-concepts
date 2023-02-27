import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Slider = () => {
  return (
    <div
      style={{
        marginTop: '25px'
      }}
    >
      <Carousel>
        <div>
          <img src='https://picsum.photos/id/237/200' />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src='https://picsum.photos/seed/picsum/200' />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src='https://picsum.photos/200' />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Slider
