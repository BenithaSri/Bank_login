import React from "react";
import { Link } from "react-router-dom";
import Nav from "./dashboardnav";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSendToMobile } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";

function Dashboard() {
  return (
    <div className="dashboard-container" style={{ display: "flex" }}>
      <div>
        <Nav />
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        <h1 style={{ marginLeft: "200px" }}>Welcome</h1>
        <div className="container">
          <div className="grid-container" style={{ marginLeft: "190px" }}>
            <div className="grid-item-dash">
              <p>
                Current Balance <br /> $123,456,000
              </p>
            </div>
            <div className="grid-item-dash">
              <p>
                Total Spending <br /> $123,456,000
              </p>
            </div>
            <div className="grid-item-dash">
              <p>
                Total Savings <br /> $123,456,000
              </p>
            </div>
          </div>
          <br />
          <div className="main-content">
            <p>
              Cash Flow <br /> $123,456,000
            </p>
          </div>
          <br />
          <div className="main-content">
            <p>
              Transactions <br /> $123,456,000
            </p>
          </div>
          <br />
          <div className="main-content">
            <p>
              Transfer <br /> $123,456,000
            </p>
          </div>
          <br />
        </div>
      </div>

      <div className="wallet">
        <h2>Wallet</h2>
        <p>Available Balance: $50,000</p>
        <div className="cards">
          <img src="card2.png" alt="card1" className=" card card1" />
          <img src="card3.png" alt="card2" className="card card2" />
          <img src="card4.png" alt="card3" className="card card3" />
        </div>

        <div className="wallet-links">
          <Link
            to="/send"
            className="grid-item"
            style={{
              width: "100px",
              height: "100px ",
              marginRight: "20px",
              color: "#1a365d",
            }}>
            <MdOutlineSendToMobile className="icon" /> <br />
            Send
          </Link>
          <Link
            to="/receive"
            className="grid-item"
            style={{
              width: "100px",
              height: "100px",
              marginRight: "20px",
              color: "#1a365d",
            }}>
            <GiReceiveMoney className="icon" />
            Receive
          </Link>
          <Link
            to="/invoice"
            className="grid-item"
            style={{ width: "100px", height: "100px", color: "#1a365d" }}>
            <TbFileInvoice className="icon" />
            Invoice{" "}
          </Link>
        </div>
        <h2 style={{ fontWeight: "100px" }}>Subscriptions:</h2>
        <ul>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              src="./netflix.png"
              alt="netflix"
              style={{ height: "30px", marginRight: "10px" }}
            />
            Netflix - $200
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              src="./prime.jpg"
              alt="netflix"
              style={{ height: "30px", marginRight: "10px" }}
            />
            Prime - $220
          </li>

          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              src="./youtube.png"
              alt="netflix"
              style={{ height: "30px", marginRight: "10px" }}
            />
            YouTube - $200
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
