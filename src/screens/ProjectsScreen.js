import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Header from '../components/Header'
import {
  proj2,
  proj3,
  proj4,
  proj5,
  proj6,
  proj7,
  proj8,
  proj9,
  proj10,
  proj11
} from '../data'

const ProjectsScreen = () => {
  return (
    <>
      <Header />
      <div className='projects-banner'>
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Residential</Tab>
            <Tab>Commercial </Tab>
          </TabList>

          <TabPanel>
            <div className='tab-grid-container'>
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
                  src={proj3?.images[2]?.url}
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
              <div className='container'>
                <img
                  src={proj4?.images[0]?.url}
                  alt={proj4?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj4?.heading}</span>
                  <Link to='/project' state={{ from: proj4 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj5?.images[0]?.url}
                  alt={proj5?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj5?.heading}</span>
                  <Link to='/project' state={{ from: proj5 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj6?.images[0]?.url}
                  alt={proj6?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj6?.heading}</span>
                  <Link to='/project' state={{ from: proj6 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj7?.images[0]?.url}
                  alt={proj7?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj7?.heading}</span>
                  <Link to='/project' state={{ from: proj7 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj8?.images[0]?.url}
                  alt={proj8?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj8?.heading}</span>
                  <Link to='/project' state={{ from: proj8 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj9?.images[0]?.url}
                  alt={proj9?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj9?.heading}</span>
                  <Link to='/project' state={{ from: proj9 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj10?.images[0]?.url}
                  alt={proj10?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj10?.heading}</span>
                  <Link to='/project' state={{ from: proj10 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj11?.images[0]?.url}
                  alt={proj11?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>
                    Wole Olanipekun & Co
                    <br />
                    Head Office
                  </span>
                  <Link to='/project' state={{ from: proj11 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='tab-grid-container'>
              <div className='container'>
                <img
                  src={proj6?.images[0]?.url}
                  alt={proj6?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj6?.heading}</span>
                  <Link to='/project' state={{ from: proj6 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj7?.images[0]?.url}
                  alt={proj7?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj7?.heading}</span>
                  <Link to='/project' state={{ from: proj7 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj9?.images[0]?.url}
                  alt={proj9?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj9?.heading}</span>
                  <Link to='/project' state={{ from: proj9 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='tab-grid-container'>
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
                  src={proj3?.images[2]?.url}
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
              <div className='container'>
                <img
                  src={proj4?.images[0]?.url}
                  alt={proj4?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj4?.heading}</span>
                  <Link to='/project' state={{ from: proj4 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj5?.images[0]?.url}
                  alt={proj5?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj5?.heading}</span>
                  <Link to='/project' state={{ from: proj5 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj7?.images[0]?.url}
                  alt={proj7?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj7?.heading}</span>
                  <Link to='/project' state={{ from: proj7 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj10?.images[0]?.url}
                  alt={proj10?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>{proj10?.heading}</span>
                  <Link to='/project' state={{ from: proj10 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
              <div className='container'>
                <img
                  src={proj11?.images[0]?.url}
                  alt={proj11?.images[0]?.alt}
                  className='image'
                />
                <div className='middle'>
                  <span>
                    Wole Olanipekun & Co
                    <br />
                    Head Office
                  </span>
                  <Link to='/project' state={{ from: proj11 }} className='text'>
                    Quick View
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}

export default ProjectsScreen
