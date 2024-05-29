import React from "react"
import { useLocation } from "react-router-dom"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import Header from "../components/Header"

const SingleServiceScreen = () => {
  const location = useLocation()
  const { from } = location?.state

  return (
    <>
      <div className="page-container">
        <Header />
        <div style={{ padding: "10px" }}>
          <div className="single-service-container">
            <div className="single-service-image">
              <img src={from?.img} className="w-100" alt="work" />
            </div>
            <div className="content-inner">
              <div className="content-list">
                <h1 className="content-header">{from?.title}</h1>
                <ul style={{ marginTop: 0 }}>
                  {from?.lists?.map((list, i) => (
                    <li key={i} style={{ marginLeft: 0 }}>
                      <ArrowRightIcon />
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleServiceScreen
