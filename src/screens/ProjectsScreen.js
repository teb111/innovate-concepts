import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Header from '../components/Header'
import { proj1, proj2, proj3 } from '../data'

const ProjectsScreen = () => {
  return (
    <>
      <Header />
      <div className='projects-banner'>
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Commercial </Tab>
            <Tab>Hospitality </Tab>
            <Tab>Industrial</Tab>
          </TabList>

          <TabPanel>
            <div className='tab-grid-container'>
              <div className='container'>
                <img
                  src={proj1?.images[0]?.url}
                  alt={proj1?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj1?.heading}</span>
                  <Link to='/project' state={{ from: proj1 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj2?.images[0]?.url}
                  alt={proj2?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj2?.heading}</span>
                  <Link to='/project' state={{ from: proj2 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj3?.images[0]?.url}
                  alt={proj3?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj3?.heading}</span>
                  <Link to='/project' state={{ from: proj3 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any commercial</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any Hospitality</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any Industrial</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}

export default ProjectsScreen
