import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { IoIosHome } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";
import { GiMoneyStack , GiPiggyBank } from "react-icons/gi";
import { MdOutlineFamilyRestroom , MdOutlineAccountBalanceWallet} from "react-icons/md";
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore , IoSchoolSharp } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { RiBillLine } from "react-icons/ri";
import { ImHappy } from "react-icons/im";



const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className="home-content">
          <div className="home-content-left">
            <h2>Saving Account</h2>
            <img src="/saving.jpeg" alt="saving" />
            <p>Open a savings account to have some savings!</p>
          </div>
          <br />
          <div className="home-content-left">
            <h2>Tax Savings?</h2>
            <img src="/taxsaving.png" alt="saving" />
            <p>Open a XYZ account to reduce tax liability!</p>
          </div>
          <br />
          <div className="home-content-left">
            <h2>Credit Cards</h2>
            <img src="/creditcard.jpg" alt="saving" />
            <p>Find a credit card that fits your lifestyle.</p>
          </div>
        </div>

        <br />
        <div className="grid-container">
          <div className="col-md-5 grid-item">
            <IoIosHome className="icon" />
            <br />
            Mortgage
          </div>
          <div className="col-md-5 grid-item">
            <GiMoneyStack className="icon" />
            <br />
            Invests
          </div>
          <div className="col-md-5 grid-item">
            <FaMoneyCheck className="icon" />
            <br />
            Checking Account
          </div>
          <div className="col-md-5 grid-item">
            <GiPiggyBank className="icon" />
            <br />
            CD
          </div>
          <div className="col-md-5 grid-item">
            <MdOutlineFamilyRestroom className="icon" />
            <br />
            Personal Banking
          </div>
          <div className="col-md-5 grid-item">
            <IoSchoolSharp className="icon" />
            <br />
            Eduactional Loans
          </div>
        </div>
        <br />
        <h2>Access us where ever you go!</h2>
        <div className="mobile-app">
            <img src="/mobilebank.png" alt="mobile" />
            <div>
            <p>Download our mobile app to access your account on the go!</p>
            <ul>
              <p> <BiTransfer /> Transfer money between your accounts. </p>
              <p> <LiaMoneyCheckAltSolid />  Deposit checks.</p>
              <p> <RiBillLine /> Manage and pay bills.</p>
              <p> <MdOutlineAccountBalanceWallet /> Check your account balance.</p>
              <p> <ImHappy /> And much more!</p>
            </ul>
            <br />
            </div>

             <div>
                <button className="download-button"> <AiOutlineApple/>Download on the App Store</button> 
                <br/>
                <button className="download-button"> <IoLogoGooglePlaystore/>Download on Google Play</button>
             </div>
            
        </div>
        <br />
        <h2>Happening Now!</h2>
        <div className="happening-now">
            <div className="happening-now-item">
               <img src="/interestrate.jpg" alt="Interest Rate" />
               <p> New Interest Rates have been Announced!</p>
            </div>

            <div className="happening-now-item">
               <img src="/loanoffers.jpeg" alt="Loan Offers" />
               <p> Loan Offers of 2025!</p>
            </div>

            <div className="happening-now-item">
               <img src="/securebank.avif" alt="secure banking" />
               <p> Secure Online Banking Available Now!</p>
            </div>

            <div className="happening-now-item">
               <img src="/kidsavings.jpg" alt="Savings for Kids" />
               <p> Savings for Kids!</p>
            </div>

            <div className="happening-now-item">
               <img src="/creditrewards.avif" alt="Rewards" />
               <p> Earn Rewards with our Credit Card!</p>
            </div>
            <br />
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Home;
