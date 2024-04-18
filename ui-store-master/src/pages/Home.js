import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img 
              src="images/main-banner.jpg"
              className='img-fluid rounded-3' 
              alt="main banner" 
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>An array of <br/>
                  flavours to choose<br/>from</h5>
                <p>From only  <span style={{ color: '#bf4800',fontWeight:600, fontSize: '22px' }}>₹60</span></p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
            <div className="small-banner position-relative">
              <img 
              src="images/left-banner-up.jpg"
              className='img-fluid rounded-3' 
              alt="main banner" 
              />
              <div className="small-banner-content position-absolute">
                <h4>BEST SALE</h4>
                <h6>Vegan Tofu <br/> products</h6>
                <p>From only  <br/><span style={{ color: '#bf4800',fontWeight:600, fontSize: '18px' }}>₹100</span> </p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img 
              src="images/right-banner-up.jpg"
              className='img-fluid rounded-3' 
              alt="main banner" 
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h6>Almond <br/>flavoured<br/>soy Milk</h6>
                <p>From only <br/><span style={{ color: '#bf4800',fontWeight:600, fontSize: '18px' }}>₹60</span></p>              
              </div>
            </div>
            <div className="small-banner position-relative">
              <img 
              src="images/left-banner-down.jpg"
              className='img-fluid rounded-3' 
              alt="main banner" 
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h6>Desi <br/>flavoured<br/>Tofu</h6>
                <p>From only <br/><span style={{ color: '#bf4800',fontWeight:600, fontSize: '18px' }}>₹100</span></p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img 
              src="images/right-banner-down.jpg"
              className='img-fluid rounded-3' 
              alt="main banner" 
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h6>High <br/>protein <br/>Tofu</h6>
                <p>From only <br/><span style={{ color: '#bf4800',fontWeight:600, fontSize: '18px' }}>₹100</span></p>              
                </div>
            </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between">
            {
              services?.map((i, j)=>{
                return(
                  <div className='services d-flex align-items-center gap-15' key={j}>
                    <img src={i.image} alt="services" />
                  <div>
                  <h6>{i.title}</h6>
                  <p className="mb-0">{i.tagline}</p>
                  </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </Container>
    {/* <Container class1="home-wrapper-2 py-5">
    <div className="row">
        <div className="col-sm-12">
          <div className="categories d-flex justify-content-between flex-wrap align-items-center">
          <div className='d-flex gap align-items-center'>
            <div>
              <h6>Music & Gaming</h6>
              <p>10 Items</p>
            </div>
            <img src="images/gamepad.webp" alt="camera" />
          </div>
          <div className='d-flex gap align-items-center'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src="images/camera.jpg" alt="camera" />
          </div>
          <div className='d-flex gap align-items-center'>
            <div>
              <h6>Smart Tv</h6>
              <p>10 Items</p>
            </div>
            <img src="images/Tv.jpg" alt="camera" />
          </div>
          <div className='d-flex gap align-items-center'>
            <div>
              <h6>SmartWatches</h6>
              <p>10 Items</p>
            </div>
            <img src="images/smartwatch.webp" alt="camera" />
          </div>
          <div className='d-flex gap align-items-center'>
            <div>
              <h6>Computers & Laptop</h6>
              <p>10 Items</p>
            </div>
            <img src="images/laptop.jpg" alt="camera" />
          </div>
          <div className='d-flex gap align-items-center'>
            <div>
              <h6>Mobiles & Tablets</h6>
              <p>10 Items</p>
            </div>
            <img src="images/m&t.webp" alt="camera" />
          </div>
          <div className='d-flex gap align-items-center'>
            <div>
              <h6>Headphones</h6>
              <p>10 Items</p>
            </div>
            <img src="images/headphone.jpg" alt="camera" />
          </div>
          <div className='d-flex gap align-items-center'>
            <div>
              <h6>Accessories</h6>
              <p>10 Items</p>
            </div>
            <img src="images/asseccories.webp" alt="camera" />
          </div>
          </div>
        </div>
      </div>
    </Container> */}
     <Container class1='featured-wrapper py-5 home-wrapper-2'>
    <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Featured Collection</h3>
        </div>
        <ProductCard />
        {/* <ProductCard /> */}
       {/*  <ProductCard />
        <ProductCard /> */}
      </div>
    </Container>
    <Container class1='famous-wrapper py-5 home-wrapper-2'>
    <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-01.jpg"
                  className='img-fluid'
                  alt="subbanner" />
            <div className="famous-content position-absolute">
            <h5>Tofu</h5>
            <h6>High source of protien </h6>
            <p>From ₹100</p>
            </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-02.jpg"
                  className='img-fluid'
                  alt="subbanner" />
            <div className="famous-content position-absolute">
            <h5 className='text-dark'>Soy Milk</h5>
            <h6 className='text-dark'>An Array of flavours</h6>
            <p className='text-dark'>Also comes in sugar free</p>
            </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-03.jpg"
                  className='img-fluid'
                  alt="subbanner" />
            <div className="famous-content position-absolute">
            <h5 className='text-dark'>Tofu</h5>
            <h6 className='text-dark'>Fully Gluten free</h6>
            <p className='text-dark'>From ₹100</p>
            </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-04.jpg"
                  className='img-fluid' 
                  alt="subbanner" />
            <div className="famous-content position-absolute">
            <h5 className='text-dark'>Tofu</h5>
            <h6 className='text-dark'>Versatile vegan delight</h6>
            <p className='text-dark'>works well in multiple recipes</p>
            </div>
            </div>
          </div>
        </div>
    </Container> 
    
    {/* <Container class1="special-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <h3 className="section-heading">Special Products</h3>
        </div>
      </div>
      <div className="row">
        <SpecialProduct />
        <SpecialProduct />
        <SpecialProduct />
        <SpecialProduct />
      </div>
    </div>
    </Container> */}
    {/* <Container class1="popular-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Popular Products</h3>
        </div>

      </div>
      <div className="row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container> */}
    <Container class1="marque-wrapper home-wrapper-2 py-2"> 
      <div className="row">
        <div className="col-sm-12">
          <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src="images/1.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/2.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/3.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/4.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/5.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/6.png" alt="brand" />
              </div>
              {/* <div className='mx-4 w-25'>
                <img src="images/brand-07.png" alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src="images/brand-08.png" alt="" />
              </div> */}
            </Marquee>
          </div>
        </div>
      </div>
    </Container>

    <Container class1="blog-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Checkout these recipies</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
        <BlogCard />
        </div>
        <div className="col-3">
        <BlogCard />
        </div>
        <div className="col-3">
        <BlogCard />
        </div>
        <div className="col-3">
        <BlogCard />
        </div>
      </div>
    </Container>
    </>
  )
}

export default Home