import React from "react";
import { Link } from "react-router-dom";
import { SiCommerzbank } from "react-icons/si";
import { PiCardsThreeFill, PiTrophyFill } from "react-icons/pi";
import { GiPapers } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";

function dashboardnav() {
  return (
    <div  className='nav-content'>
      <h2><SiCommerzbank size={50} />Bank</h2> 
      <br />
      <div className="links">
        <Link to="/statements" style={{color:"white"}}> <GiPapers />  Statements</Link>
        <Link to="/rewards" style={{color:"white"}}>< PiTrophyFill />  Rewards</Link>
        <Link to="/notifications" style={{color:"white"}}><FaBell />  Notifications</Link>
        <Link to="/settings" style={{color:"white"}}><MdOutlineSettings />  Settings</Link>
      </div>
    </div>
  );
}

export default dashboardnav;
