import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import watch from "../images/watch.jpg"
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">AVA soy Nutrients</h3>

                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark total-price " to='/cart'>Cart</Link>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item  total-price active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /   
                    <li className="breadcrumb-item  total-price active">Shipping</li>
                    &nbsp; /
                    <li className="breadcrumb-item  total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Tasleem Anis (Anistm@rknec.edu)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  {/* <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div> */}
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment, Suite, etc"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="ZipCode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                      <IoIosArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span style={{ top:"-10px", right: "2px" }} 
                    className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                    <img className="img-fluid" src="/images/rose_1.jpg" alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">watch</h5>
                    <p className="total-price">s / #kjgfefenj</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">₹ 100</h5>

                </div>
                </div>
              </div>
              <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p> 
                  <p className="total-price">₹ 1000</p>
                </div>
              <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p> 
                  <p className="mb-0 total-price">₹ 10000</p>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                  <h4 className="total">Total</h4>
                  <h5 className="total-price">₹ 1000</h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </>
  );
};

export default Checkout;
