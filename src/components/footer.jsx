import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiCopyrightThin } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function footer() {
  return (
    <div>
        <div className="footer">
            <br />
           <div className=' footer-link'>
             <Link to="#"> 🔗About Us</Link>  
              <Link to="#">🔗Contact Us</Link> 
              <Link to="#">🔗Privacy Policy</Link> 
              <Link to="#">🔗Terms of Use</Link> 
              <Link to="#">🔗Careers</Link> 
              <Link to="#">🔗Sitemap</Link> 
              <Link to="#">🔗Feedback</Link>
           </div>
           <br/>
           <div className='footer-address'>
                <p>XYZ Bank</p>
                <p>123 Main Street</p>
                <p>Anytown, USA 12345</p>
                <p style={{ display: 'flex', alignItems: 'center' }}><IoCallOutline />: 1-800-123-4567</p>
                <p style={{ display: 'flex', alignItems: 'center' }}><MdOutlineMailOutline />: info@xyzbank.com</p> 
                <FaFacebookSquare  />
                <BsTwitterX />
                <FaSquareInstagram />
            <br/>
           </div>
           <br/>
           <div className='footer-text'>
              <p>Copyright <PiCopyrightThin/> 2023 XYZ Bank. All rights reserved.</p>
              <p>XYZ Bank is a registered trademark of XYZ Bank. All other trademarks are the property of their respective owners.</p>
              <p>For customer support, please email us at support@xyzbank.com or call 1-800-123-4567.</p>
           </div>
           <br/>
        </div>
    </div>
  );
}

export default footer;
