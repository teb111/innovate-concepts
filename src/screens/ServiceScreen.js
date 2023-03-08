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
          label='Construction'
          {...a11yProps(0)}
        />
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
      <TabPanel value={value} index={2}>
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
    </>
  )
}

export default ServiceScreen
