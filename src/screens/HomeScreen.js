import { MDBBtn, MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit"
import React from "react"
import Header from "../components/Header"
import Carousel from "react-bootstrap/Carousel"
import { Link } from "react-router-dom"

const Slide = ({ number }) => (
  <div>
    <img src={`https://via.placeholder.com/328x164.png?text=Slide ${number}`} />
  </div>
)

const HomeScreen = () => {
  const architecture = {
    img: "https://res.cloudinary.com/teb/image/upload/v1716741190/Architecture_x7upbc.jpg",
    title: "Architecture",
    lists: [
      "Brief Formulation",
      "Feasibility Studies",
      "Concept Design",
      "Preliminary Drawing",
      "Production Information",
      "Contract Administration and Supervision"
    ]
  }
  const engineering = {
    img: "https://res.cloudinary.com/teb/image/upload/v1716741189/Engineering_lit3do.jpg",
    title: "Engineering",
    lists: [
      "Power Distribution System Design",
      "Power Quality Testing & Monitoring",
      "Systems Commissioning",
      "Lighting Design",
      "Plumbing (Water Supply System, Public Health)",
      "Rainwater, Drainage and Suppression",
      "Production Information",
      "Borehole and Water Treatment Systems",
      "Sewage Treatment Systems",
      "Swimming Pools",
      "Fountains & Water Display Features",
      "HVAC design",
      "Fire Protection & Suppression Systems",
      "Escalator, Elevator & Travelator",
      "Concept Design",
      "Detailed Engineering Design",
      "Concrete and Steel structures",
      "Construction supervision",
      "Evaluation of structural integrity of defective buildings",
      "Highway and drainage designs",
      "Fire Detection and Alarm Systems",
      "Burglar Alarms",
      "CCTV",
      "Access Control",
      "Voice & Data Systems"
    ]
  }

  const projectManagement = {
    img: "https://res.cloudinary.com/teb/image/upload/v1716741191/Project_mgt_llp1yp.jpg",
    title: "Project Management",
    lists: [
      "Project Feasibility & Inception",
      "Project Guidance & Pre-Contract",
      "Concept Design",
      "Value Engineering & Analysis",
      "Cost Control & Content Analysis + Recommendations",
      "Quality Control and Monitoring & Control of Construction Processes",
      "Content Framework",
      "HSE Awareness"
    ]
  }

  const construction = {
    img: "https://res.cloudinary.com/teb/image/upload/v1716741198/Construction_wgk6vg.jpg",
    title: "Construction"
  }
  return (
    <>
      <div className="page-container">
        <Header />
        <div className="page-banner">
          <div className="banner-header">
            <p>
              Leading Architecture and Design firm creating thriving spaces
              across <span className="animating-text">Africa</span>
            </p>
          </div>
          <div className="banner-text">
            <p>
              At Innovate concepts ltd, we use data and dialogue to design
              places that perform with functional, technical,and aesthetic
              excellence.
            </p>
          </div>

          <div className="mt-4">
            <img
              src={
                "https://res.cloudinary.com/teb/image/upload/v1714805814/Engineering_ymh9zd.jpg"
              }
              className="d-block w-100"
              alt="work"
            />
          </div>
          {/* 
          <div>
            <MDBCarousel dark interval={3000}>
              <MDBCarouselItem
                key={1}
                src={
                  "https://res.cloudinary.com/teb/image/upload/v1714808844/Architecture_fwmdym.jpg"
                }
                alt={"..."}
                className="d-block w-100"
                style={{ borderRadius: "5px" }}
                itemId={1}
              ></MDBCarouselItem>
              <MDBCarouselItem
                key={2}
                style={{ borderRadius: "5px" }}
                src={
                  "https://res.cloudinary.com/teb/image/upload/v1714805814/Engineering_ymh9zd.jpg"
                }
                alt={"...."}
                className="d-block w-100"
                itemId={2}
              ></MDBCarouselItem>
            </MDBCarousel>
          </div> */}

          <div className="mt-4 slider">
            <p className="sponsor-text">Trusted by Top African Businesses</p>
            <section class="slide-option">
              <div id="infinite" class="highway-slider">
                <div class="container-2 highway-barrier">
                  <ul class="highway-lane">
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939348/innovate-concepts/ba3af36b96323f4958d1b1cc6727ebb543a6f301_d0iikb.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939347/innovate-concepts/7rl_uweren.jpg"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939348/innovate-concepts/54GENE-6_jjqedi.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/wok_h86idi.png"
                        width={150}
                        height={200}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/qshop_jmdwgw.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/nessco_mrixke.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/viathan_nwlmtb.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/ibile_qrbuel.jpg"
                        width={100}
                      />
                    </li>

                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939348/innovate-concepts/ba3af36b96323f4958d1b1cc6727ebb543a6f301_d0iikb.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939347/innovate-concepts/7rl_uweren.jpg"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939348/innovate-concepts/54GENE-6_jjqedi.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/wok_h86idi.png"
                        width={150}
                        height={200}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/qshop_jmdwgw.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/nessco_mrixke.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/viathan_nwlmtb.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/ibile_qrbuel.jpg"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939348/innovate-concepts/ba3af36b96323f4958d1b1cc6727ebb543a6f301_d0iikb.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939347/innovate-concepts/7rl_uweren.jpg"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939348/innovate-concepts/54GENE-6_jjqedi.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/wok_h86idi.png"
                        width={150}
                        height={200}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/qshop_jmdwgw.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/nessco_mrixke.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/viathan_nwlmtb.png"
                        width={100}
                      />
                    </li>
                    <li class="highway-car">
                      <img
                        src="https://res.cloudinary.com/teb/image/upload/v1678939349/innovate-concepts/ibile_qrbuel.jpg"
                        width={100}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="service-title">
            <p>Our Services</p>
          </div>
          <div className="service-container">
            <Link state={{ from: architecture }} to="/single-service">
              <div className="service-box">
                <div className="box-border">
                  <p className="box-text">Architecture</p>
                </div>
              </div>
            </Link>
            <Link state={{ from: engineering }} to="/single-service">
              <div className="service-box">
                <div className="box-border">
                  <p className="box-text">Engineering</p>
                </div>
              </div>
            </Link>
            <Link state={{ from: projectManagement }} to="/single-service">
              <div className="service-box">
                <div className="box-border">
                  <p className="box-text">Project Management</p>
                </div>
              </div>
            </Link>
            <Link state={{ from: construction }} to="/single-service">
              <div className="service-box">
                <div className="box-border">
                  <p className="box-text">Construction</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div style={{ height: "400px" }}> */}
      {/* <MDBCarousel fade showControls interval={3000}>
        <MDBCarouselItem
          key={1}
          src={"https://mdbootstrap.com/img/new/slides/041.jpg"}
          alt={"jUST A PICTURE"}
          className="img"
          itemId={1}
        ></MDBCarouselItem>
        <MDBCarouselItem
          key={2}
          src={"https://mdbootstrap.com/img/new/slides/042.jpg"}
          alt={"jUST A PICTURE"}
          className="img"
          itemId={2}
        ></MDBCarouselItem>
      </MDBCarousel> */}
      {/* </div> */}
    </>
  )
}

export default HomeScreen
