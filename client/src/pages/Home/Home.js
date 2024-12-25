import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/16564779/pexels-photo-16564779/free-photo-of-married-couple-looking-at-each-other.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100 carousel-img"
              alt="Matrimony Image 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Find Your Perfect Match</h5>
              <p>Join our matrimony platform today and start your journey.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1920x600?text=Matrimony+App+Image+2"
              className="d-block w-100 carousel-img"
              alt="Matrimony Image 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Trusted and Secure</h5>
              <p>Your privacy and security are our top priority.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1920x600?text=Matrimony+App+Image+3"
              className="d-block w-100 carousel-img"
              alt="Matrimony Image 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Thousands of Success Stories</h5>
              <p>Meet people who found love and happiness.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container my-5">
        <h2 className="text-center">Why Choose Our Matrimony App?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Feature 1"
              />
              <div className="card-body">
                <h5 className="card-title">Safe and Secure</h5>
                <p className="card-text">We prioritize your safety and privacy. Enjoy a worry-free experience.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Feature 2"
              />
              <div className="card-body">
                <h5 className="card-title">Smart Matchmaking</h5>
                <p className="card-text">Our algorithm suggests perfect matches based on your preferences.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Feature 3"
              />
              <div className="card-body">
                <h5 className="card-title">Wide Range of Profiles</h5>
                <p className="card-text">Explore thousands of profiles and find the one that's right for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta text-center py-5 bg-secondary text-white">
        <h3>Ready to Find Your Match?</h3>
        <Link to="/signup" className="btn btn-primary btn-lg">Sign Up Now</Link>
      </div>
    </div>
  );
};

export default Home;
