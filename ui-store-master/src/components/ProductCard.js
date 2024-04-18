import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch-11.webp";
import watch2 from "../images/watch-22.webp";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import watch3 from "../images/watch.jpg";
import image from "../images/images.avif";

const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }  `}
      >
        <Link
         to={`${
          location.pathname === "/"
            ? "product/:id" 
            :location.pathname === "/product/:id"
            ? "/product/:id"
            : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src="images/Mango_1.jpg" className="img-fluid" alt="product" />
            <img src="images/Mango_2.png" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">SoYeah</h6>
            <h5 className="product-title">
              Mango flavoured soy milk
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              fuga. Eius blanditiis cum facilis, ea voluptatem beatae! Provident
              doloribus consequuntur culpa! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Placeat, delectus!
            </p>
            <p className="price"> ₹100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }  `}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/:id" 
              :location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
            }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src="images/Rose_1.jpg" className="img-fluid" alt="product" />
            <img src="images/Rose_2.png" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">SoYeah</h6>
            <h5 className="product-title">
              Rose flavoured soy milk
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              tempore perspiciatis deleniti dolore fuga. Eius blanditiis cum
              facilis, ea voluptatem beatae! Provident doloribus consequuntur
              culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa, magni?
            </p>
            <p className="price">₹100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              {/* <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button> */}
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }  `}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/:id" 
              :location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
            }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src="images/Almond_1.jpg" className="img-fluid" alt="product" />
            <img src="images/Almond_2.jpg" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">SoYeah</h6>
            <h5 className="product-title">
              Almond flavoured soy milk
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              tempore perspiciatis deleniti dolore fuga. Eius blanditiis cum
              facilis, ea voluptatem beatae! Provident doloribus consequuntur
              culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa, magni?
            </p>
            <p className="price">₹100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              {/* <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button> */}
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }  `}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "product/:id" 
              :location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
            }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src="images/Strawberry_1.jpg" className="img-fluid" alt="product" />
            <img src="images/strawberry_2.jpg" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">SoYeah</h6>
            <h5 className="product-title">
              Strawberry flavoured soy milk
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              tempore perspiciatis deleniti dolore fuga. Eius blanditiis cum
              facilis, ea voluptatem beatae! Provident doloribus consequuntur
              culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa, magni?
            </p>
            <p className="price">₹100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              {/* <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button> */}
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
