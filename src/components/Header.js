import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
const Header = () => {
  const [showBasic, setShowBasic] = useState(false)
  return (
    <>
      <MDBNavbar
        expand='lg'
        style={{
          paddingBottom: '11px',
          paddingTop: '10px'
        }}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://res.cloudinary.com/teb/image/upload/v1677657516/IMG_2199_fbwgna.png'
              alt='logo'
              width={300}
              // height={100}
            />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <Link to='/'>Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/about'>About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/projects'>Project</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='#'>Contact</Link>
              </MDBNavbarItem>
              {/* 
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem> */}

              {/* <MDBNavbarItem>
                <MDBNavbarLink
                  disabled
                  href='#'
                  tabIndex={-1}
                  aria-disabled='true'
                >
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header
