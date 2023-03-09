import React from 'react'
import Header from '../components/Header'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import PhoneIcon from '@mui/icons-material/Phone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import {
  ArrowForward,
  ArrowForwardIos,
  CheckOutlined
} from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

const ServiceScreen = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  return (
    <>
      <Header />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='icon label tabs example'
      >
        <Tab
          icon={<CheckOutlined sx={{ fontSize: 40 }} />}
          label='Architecture'
        />
        <Tab
          icon={<CheckOutlined sx={{ fontSize: 40 }} />}
          label='Engineering'
        />
        <Tab
          icon={<CheckOutlined sx={{ fontSize: 40 }} />}
          label='Project Management'
        />
        <Tab
          icon={<CheckOutlined sx={{ fontSize: 40 }} />}
          label='Construction'
          {...a11yProps(0)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className='content-body'>
          <div>
            <h2>Architecture</h2>
            <div className='seperator'></div>
          </div>

          <div className='content-inner'>
            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Brief Formulation
                </li>
                <li>
                  <ArrowRightIcon />
                  Feasibility Studies
                </li>
                <li>
                  <ArrowRightIcon />
                  Concept Design
                </li>
              </ul>
            </div>
            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Preliminary Drawing
                </li>
                <li>
                  <ArrowRightIcon />
                  Production Information
                </li>
                <li>
                  <ArrowRightIcon />
                  Contract Administration and Supervision
                </li>
              </ul>
            </div>
            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Project Handover and Closeout
                </li>
                <li>
                  <ArrowRightIcon />
                  Post Occupancy Evaluation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='content-body'>
          <div>
            <h2>Engineering</h2>
            <div className='seperator'></div>
          </div>

          <div className='content-inner'>
            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Power Distribution System Design
                </li>
                <li>
                  <ArrowRightIcon />
                  Power Quality Testing & Monitoring
                </li>
                <li>
                  <ArrowRightIcon />
                  Systems Commissioning
                </li>
                <li>
                  <ArrowRightIcon />
                  Lighting Design
                </li>
              </ul>
            </div>
            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Plumbing (Water Supply System, Public Health, Rainwater
                  Drainage and Suppression)
                </li>
                <li>
                  <ArrowRightIcon />
                  Borehole and Water Treatment Systems
                </li>
                <li>
                  <ArrowRightIcon />
                  Sewage Treatment Systems
                </li>
                <li>
                  <ArrowRightIcon />
                  Swimming Pools, Fountains & Water Display Features
                </li>
                <li>
                  <ArrowRightIcon />
                  HVAC design
                </li>
                <li>
                  <ArrowRightIcon />
                  Fire Protection & Suppression Systems
                </li>
                <li>
                  <ArrowRightIcon />
                  Escalator, Elevator & Travelator
                </li>
              </ul>
            </div>
            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Concept Design
                </li>
                <li>
                  <ArrowRightIcon />
                  Detailed Engineering Design(Concrete and Steel structures)
                </li>
                <li>
                  <ArrowRightIcon />
                  Construction supervision{' '}
                </li>
                <li>
                  <ArrowRightIcon />
                  Evaluation of structural integrity of defective buildings
                </li>
                <li>
                  <ArrowRightIcon />
                  Highway and drainage designs
                </li>
              </ul>
            </div>
            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Fire Detection and Alarm Systems
                </li>
                <li>
                  <ArrowRightIcon />
                  Burglar Alarms
                </li>
                <li>
                  <ArrowRightIcon />
                  CCTV
                </li>
                <li>
                  <ArrowRightIcon />
                  Access Control
                </li>
                <li>
                  <ArrowRightIcon />
                  Voice & Data Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='content-body'>
          <div>
            <h2>Project Management</h2>
            <div className='seperator'></div>
          </div>

          <div className='content-inner'>
            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Project Feasibility & Inception
                </li>
                <li>
                  <ArrowRightIcon />
                  Project Guidance & Pre-Contract
                </li>
                <li>
                  <ArrowRightIcon />
                  Concept Design
                </li>
              </ul>
            </div>

            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Value Engineering & Analysis
                </li>
                <li>
                  <ArrowRightIcon />
                  Cost Control & Content Analysis + Recommendations
                </li>
                <li>
                  <ArrowRightIcon />
                  Quality Control and Monitoring & Control of Construction
                  Processes
                </li>
              </ul>
            </div>
            <div className='content-list'>
              <ul>
                <li>
                  <ArrowRightIcon />
                  Content Framework
                </li>
                <li>
                  <ArrowRightIcon />
                  HSE Awareness
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabPanel>
    </>
  )
}

export default ServiceScreen
