import React from 'react'
import Header from '../components/Header'
import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import { useLocation } from 'react-router-dom'

const SingleProjectScreen = () => {
  const location = useLocation()
  const { from } = location?.state
  console.log(from)
  return (
    <>
      <Header />
      <h2>{from?.heading}</h2>
      <div className='single-project'>
        <div className='single-project-info'>
          {from?.textBox?.map((t) => (
            <div className='project-heading'>
              <p>
                <strong>{t?.title}</strong>:<span>{t?.Body}</span>
              </p>
            </div>
          ))}

          <p>{from?.textBody1}</p>
          <p>{from?.textBody2}</p>
        </div>
        <div className='single-project-gallery'>
          <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            {from?.images?.map((i) => (
              <a href={i?.url}>
                <img alt={i?.alt} src={i?.url} className='img-galley' />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </>
  )
}

export default SingleProjectScreen
