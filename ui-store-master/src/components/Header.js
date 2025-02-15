import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
const Header = () => {
  return (
    <>
    {/* <header className="header-top-strip py-3">
        <div className="container-sm">
            <div className="row">
                <div className="col-6">
                    <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                </div>
                <div className="col-6">
                    <p className='text-end text-white mb-0'>
                        Hotline: 
                        <a className='text-white' href="tel:+22 456378298">
                            +22 456378298</a>
                    </p>
                </div>
            </div>
        </div>
    </header> */}
    <header className="header-upper">
        <div className="container-sm">
            <div className="row align-items-center">
                <div className="col-sm-2">{/* logo size */}
                <h2 class="logo">
                    <Link to="/">
                        <img src="/images/AVA Logo.png"className='py-2' alt="logo"/>
                    </Link>
                </h2>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <input 
                        type="text" 
                        className="form-control py-1" 
                        placeholder="Search Product Here..." 
                        aria-label="Search Product Here..." 
                        aria-describedby="basic-addon2" 
                        />
                        <span className="input-group-text p-3" id="basic-addon2">
                        <BsSearch className='fs-8'/>
                        </span>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="header-upper-links d-flex align-items-center justify-content-between">
                        {/* <div>
                            <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                            <img src={compare} alt="compare" />
                            <p className='sm mb-0'>
                                Compare <br /> Products
                            </p>
                            </Link>
                        </div> */}
                        <div>
                            <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                            <img src={wishlist} alt="wishlist" />
                            <p className='mb-0'>
                                Favourite <br /> wishlist
                            </p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                            <img src={user} alt="wishlist" />
                            <p className='mb-0'>
                                Log in <br /> My Account
                            </p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                            <img src={cart} alt="cart" />
                            <div className='d-flex flex-column gap-10'>
                            <span className="badge bg-white text-dark">0</span>
                            <p className='mb-0'>₹ 500</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header className="header-bottom">
        <div className="container-sm">
            <div className="row">
                <div className="col-sm-12">
                    <div className="menu-bottom d-flex align-items-center gap-30">
                        <div>
                        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15  d-flex align-items-center" 
  type="button" id="dropdownMenuButton1" 
  data-bs-toggle="dropdown" 
  aria-expanded="false">
    <img src={menu} alt="menu" />
    <span className='me-5 d-inline-block '>Shop Categories</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li>
        <Link className="dropdown-item text-white" to="">Tofu Products</Link>
        </li>
    <li>
        <Link className="dropdown-item text-white" to="">Soy Milk</Link>
        </li>
    <li>
        <Link className="dropdown-item text-white" to="">other</Link>
        </li>
  </ul>
</div>
                        </div>
                        <div className="menu-links">
                            <div className="d-flex align-items-center gap-15">
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/product'>OurStore</NavLink>
                                <NavLink to='/blogs'>Recipes</NavLink>
                                <NavLink to='/contact'>Contact</NavLink>
                            </div>
                        </div>
                        <div className="col-6">
                    <p className='text-end text-white mb-0'>
                        Hotline: 
                        <a className='text-white' href="tel:+22 456378298">
                            +91 9997789876</a>
                    </p>
                </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header