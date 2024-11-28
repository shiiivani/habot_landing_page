import React, { useState } from "react";
import logo from "../assets/logo.png";
import briefcase from "../assets/briefcase.png";
import pin from "../assets/pin.png";
import rightArrow from "../assets/right-arrow.png";
import checked from "../assets/checked.png";
import vector from "../assets/vector.png";
import videoImg from "../assets/video-img.jpeg";
import "../css/LandingPage.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";
import img5 from "../assets/img-5.png";
import img6 from "../assets/img-6.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
import footerLogo from "../assets/footer-logo.png";

function LandingPage() {
  const [selected, setSelected] = useState("Buyer");

  return (
    <div class="landing-page">
      <div class="navbar">
        <div class="left-nav">
          <img src={logo} alt="Logo" width="125px" />
        </div>
        <div class="right-nav">
          <p>Find Suppliers</p>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
              <KeyboardArrowDownIcon />
            </button>

            <ul
              class="dropdown-menu dropdown-menu-light"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a class="dropdown-item active" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <button class="login">Login/Sign Up</button>
        </div>
      </div>

      <div class="first-section text-center">
        <h1 class="fw-bold text-white">
          Are You a Supplier?
          <br />
          <span class="fw-normal">Explore Matching Opportunities.</span>
        </h1>
        <div class="search-container flex">
          <div class="input-section flex">
            <img src={briefcase} alt="Icon" width="20px" />
            <input
              type="text"
              name="service"
              placeholder="Search your required service here"
            />
          </div>
          <div class="input-section flex">
            <img src={pin} alt="Icon" width="20px" />
            <input
              type="text"
              name="service"
              placeholder="Search your required service here"
            />
          </div>
          <button class="search">Search</button>
        </div>
        <div class="flex justify-content-center mt-10">
          <p class="fw-bold text-white">Are you a buyer? </p>
          <a class="text-white ml-2 cursor-pointer">
            Click here if you are looking to post a requirements
          </a>
        </div>
      </div>

      <div class="second-section flex">
        <div class="left-container containers">
          <h2 class="fw-bold mb-4">Ready to dive into HABOT?</h2>
          <p class="fw-light mb-4 leading-6">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button class="flex fw-semibold">
            Sign up Today !
            <span>
              <img src={rightArrow} alt="Icon" width="25px" class="ml-10" />
            </span>
          </button>
        </div>
        <div class="right-container containers text-center">
          <div class="flex justify-content-center">
            <p>
              Abu Dhabi{" "}
              <span>
                <img src={rightArrow} alt="Icon" width="25px" class="ml-5" />
              </span>
            </p>
            <p>
              Dubai{" "}
              <span>
                <img src={rightArrow} alt="Icon" width="25px" class="ml-10" />
              </span>
            </p>
          </div>
          <div class="flex justify-content-center">
            <p>
              Sharjah & Ajman{" "}
              <span>
                <img src={rightArrow} alt="Icon" width="25px" class="ml-10" />
              </span>
            </p>
            <p>
              Fujairah{" "}
              <span>
                <img src={rightArrow} alt="Icon" width="25px" class="ml-10" />
              </span>
            </p>
          </div>
          <div class="flex justify-content-center">
            <p>
              Ras Al Khaimah{" "}
              <span>
                <img src={rightArrow} alt="Icon" width="25px" class="ml-10" />
              </span>
            </p>
            <p>
              Umm Al Quwain{" "}
              <span>
                <img src={rightArrow} alt="Icon" width="25px" class="ml-10" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="third-section px-15">
        <div class="container flex justify-content-center">
          <div class="video mr-20 position-relative">
            <a
              href="https://www.youtube.com/watch?v=IZLp-TZyDkQ&ab_channel=HabotConnectDMCC"
              target="_blank"
            >
              <img src={videoImg} class="video-img" alt="Video" width="300px" />
              <img src={vector} class="play-btn" alt="Video" />
            </a>
          </div>
          <div class="content">
            <div class="flex heading justify-content-around">
              <h3
                class={selected === "Buyer" ? "active" : ""}
                onClick={() => setSelected("Buyer")}
              >
                Buyer
              </h3>
              <h3
                class={selected === "Supplier" ? "active" : ""}
                onClick={() => setSelected("Supplier")}
              >
                Supplier
              </h3>
            </div>
            {selected === "Buyer" ? (
              <ul class="mt-10">
                <li class="flex items-center">
                  <span>
                    <img src={checked} alt="Icon" width="20px" class="mr-3" />
                  </span>
                  Post your requirements.
                </li>
                <li class="flex items-center">
                  <span>
                    <img src={checked} alt="Icon" width="20px" class="mr-3" />
                  </span>
                  Sit back for multiple suppliers to contact you.
                </li>
                <li class="flex items-center">
                  <span>
                    <img src={checked} alt="Icon" width="20px" class="mr-3" />
                  </span>
                  Choose among the suppliers based on the ratings and reviews.
                </li>
              </ul>
            ) : (
              <ul class="mt-10">
                <li class="flex items-center">
                  <span>
                    <img src={checked} alt="Icon" width="20px" class="mr-3" />
                  </span>
                  Complete your profile and get verified.
                </li>
                <li class="flex items-center">
                  <span>
                    <img src={checked} alt="Icon" width="20px" class="mr-3" />
                  </span>
                  Select service tags for relevant opportunities.
                </li>
                <li class="flex items-center">
                  <span>
                    <img src={checked} alt="Icon" width="20px" class="mr-3" />
                  </span>
                  Reach out ot buyers and expand your business.
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div class="fourth-section">
        <div class="flex items-center justify-between">
          <div class="left-container position-relative">
            <h4>Let Suppliers Find You</h4>
            <div class="underline"></div>
          </div>
          <button class="text-white fw-semibold">Get Verified</button>
        </div>
      </div>

      <div class="fifth-section">
        <h3 class="text-center fw-bold">How it works?</h3>
        <p class="short-para">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
        <div class="cards-container">
          <div class="card colored">
            <img src={img1} alt="Icon" width="60px" />
            <p>Select Your Role and Sign Up</p>
          </div>
          <div class="card">
            <img src={img2} alt="Icon" width="60px" />
            <p>Buyers Post Your Requirements</p>
          </div>
          <div class="card colored">
            <img src={img3} alt="Icon" width="60px" />
            <p> Review, Select, and Contact the Best Suppliers</p>
          </div>
          <div class="card">
            <img src={img4} alt="Icon" width="60px" />
            <p>
              {" "}
              Suppliers Complete your profile and get notified for opportunities
            </p>
          </div>
          <div class="card colored">
            <img src={img5} alt="Icon" width="60px" />
            <p>Contact to Buyers and Share your Quote for the service</p>
          </div>
          <div class="card">
            <img src={img6} alt="Icon" width="60px" />
            <p>
              Both the Parties can Connect and Make Business Leave a Feedback
            </p>
          </div>
        </div>
      </div>

      <div class="footer">
        <hr />
        <div class="container flex items-center justify-content-between">
          <div class="details-container flex items-flex-start">
            <div class="block">
              <img src={footerLogo} alt="logo" width=" 150px" class="mb-4" />
              <p>© R Singhania</p>
            </div>
            <div class="block ml-14">
              <h6>Company</h6>
              <p>About</p>
              <p>FAQ</p>
            </div>
            <div class="block ml-14">
              <h6>Terms</h6>
              <p>Data Privacy</p>
              <p>Terms</p>
              <p>Accessibility</p>
            </div>
            <div class="block ml-14">
              <h6>Related</h6>
              <p>Find Buyer</p>
              <p>Feedback</p>
            </div>
          </div>
          <div class="social-links flex">
            <div class="icon-container">
              <img src={linkedin} alt="LinkedIn logo" width="20px" />
            </div>
            <div class="icon-container">
              <img src={twitter} alt="Twitter logo" width="20px" />
            </div>
            <div class="icon-container">
              {" "}
              <img src={facebook} alt="Facebook logo" width="20px" />
            </div>
            <div class="icon-container">
              <img src={insta} alt="Instagram logo" width="20px" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default LandingPage;
