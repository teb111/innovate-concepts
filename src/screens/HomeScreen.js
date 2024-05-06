import { MDBBtn, MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import React from "react";
import Header from "../components/Header";
import Carousel from "react-bootstrap/Carousel";

const Slide = ({ number }) => (
  <div>
    <img src={`https://via.placeholder.com/328x164.png?text=Slide ${number}`} />
  </div>
);

const HomeScreen = () => {
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

          <h5
            // style={{
            //   display: "flex",
            //   justifyContent: "start",
            //   alignItems: "center",
            //   marginBottom: "2rem",
            //   fontSize: "3.5rem",
            // }}
            id="about"
          >
            About Us
          </h5>

          <div className="banner-header">
            <p style={{ letterSpacing: 1.1 }}>
              {" "}
              We are utilizing technology to &nbsp;
              <span className="animating-text">create</span> solutions to
              spatial and programmatic problems
            </p>
          </div>

          <div className="our-story pt-5">
            <h6 className="">our story</h6>
            <h5>Who we are</h5>
            <p>
              INNOVATE CONCEPTS LTD is a firm of Chartered Architects, Interior
              Designers, Project Managers and Builders which provide
              Architectural and Civil Engineering Consultancy Services.
            </p>

            <p>
              The company was established in 1987 and has gained a wealth of
              experience from its diverse body of work in Nigeria and Overseas
              to further enhance the growing indigenous participation in the
              construction industry.
            </p>
            <p>
              For us, design is the means to create solutions to spatial and
              programmatic problems. Today, design is being redefined by
              sustainability. We are continually evolving our organization and
              design processes to deliver innovation aimed at helping clients
              and communities become more resourceful, resilient and
              regenerative.
            </p>
          </div>
          <div className="our-story pt-5">
            <h6 className="">our team</h6>
            <p>
              At Innovate Concepts, each studio is led by responsive,
              experienced principals actively engaged in project work. They love
              what they do, and that kind of enthusiasm is contagious. On
              average, our principals have invested 15 years of their careers in
              the Construction Industry, a testament to our commitment to
              cultivate seasoned leaders with values of service, foresight, and
              design excellence.
            </p>
          </div>

          <div className="mission-vision">
            <div className="mission">
              <h4>Our Mission</h4>
              <p>
                Create thriving spaces and edifices by leveraging on technology
                and data to improve design and processes.
              </p>
            </div>
            <div className="vission">
              <h4>Core Values</h4>
              <p>
                <span>Integrity </span> We speak, stand for, and honor the truth
              </p>
              <p>
                <span>Passion</span>
                We’re driven by personal and professional ambition
              </p>
              <p>
                <span>Excellence</span>
                We imagine fully and execute completely, or not at all
              </p>
              <p>
                <span> Curiosity</span>
                We believe the best sentences start with “I wonder…” and “What
                if…
              </p>
            </div>
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
  );
};

export default HomeScreen;
