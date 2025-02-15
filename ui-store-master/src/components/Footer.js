import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png"
import { useState } from "react"; // Import useState from React

const Footer = () => {

  //chatgpt
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Event listener to check if the user scrolled down enough to show the back-to-top button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  // Add scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
//chatgpt




  return (
    <>
    {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </div>
      )}
      {/* <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Our Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <footer className="upper py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                Shri Ramdeo baba college, 
                  <br /> Nagpur, Maharashtra
                  <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel: +91 7779904345"
                  className="mt-3 d-block mb-2 text-white"
                >
                  +91 7779904345
                </a>
                <a
                  href="mailto:anistm@rknec.edu "
                  className="mt-2 d-block mb-1 text-white"
                >
                  anistm@rknec.edu
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://linkedin.com">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="https://instagram.com">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="https://github.com">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="https://youtube.com">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to='/term-conditions' className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Tofu</Link>
                <Link className="text-white py-2 mb-1">Soy Milk</Link>
                {/* <Link className="text-white py-2 mb-1">Tables</Link>
                <Link className="text-white py-2 mb-1">Watch</Link> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="lower py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by AVA soy Nutrients 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
