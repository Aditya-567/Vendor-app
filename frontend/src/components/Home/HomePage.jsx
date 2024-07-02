import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import coursepic from "../../assets/course.png";
import featurepic from "../../assets/feature.png";
import homepic from "../../assets/home.png";
import logo from "../../assets/logo.png";

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Ensure autoplay is enabled
    autoplaySpeed: 3000, // Set the speed for autoplay
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-10">
      <header id="top" className="flex flex-col items-center bg-blue-600 text-white py-12 text-center">
        <Slider {...sliderSettings} className="w-4/5">
          <div className="mx-40">
            <div className="flex flex-row items-center space-x-8">
              <img src={homepic} alt="Logo" className="h-96 w-96" />
              <div className=" text-left">
                <h1 className="text-5xl font-bold">Welcome to Our School.in</h1>
                <p className=" text-lg mt-2">
                  We are a school dedicated to helping you achieve your goals.
                  <br />
                  Explore our wide range of courses tailored to your needs.
                  <br />
                  Join us and start your journey to success today!
                </p>
                <div className="mt-4">
                  <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    <Link to="/register">Sign Up</Link>
                  </button>
                  <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="/login">Login</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-40">
            <div className="flex flex-row items-center space-x-8">
              <img src={coursepic} alt="Logo" className="h-96 w-96" />
              <div className=" text-left">
                <h1 className="text-5xl font-bold">Welcome to Our School.in</h1>
                <p className=" text-lg mt-2">
                  We are a school dedicated to helping you achieve your goals.
                  <br />
                  Explore our wide range of courses tailored to your needs.
                  <br />
                  Join us and start your journey to success today!
                </p>
                <div className="mt-4">
                  <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    <Link to="/register">Sign Up</Link>
                  </button>
                  <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="/login">Login</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-30">
            <div className="flex flex-row items-center space-x-8">
              <img src={logo} alt="Logo" className="h-96 w-108" />
              <div className=" text-left">
                <h1 className="text-5xl font-bold">Welcome to Our School.in</h1>
                <p className=" text-lg mt-2">
                  We are a school dedicated to helping you achieve your goals.
                  <br />
                  Explore our wide range of courses tailored to your needs.
                  <br />
                  Join us and start your journey to success today!
                </p>
                <div className="mt-4">
                  <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    <Link to="/register">Sign Up</Link>
                  </button>
                  <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="/login">Login</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </header>
      <section id="features" className="py-10 text-center">
        <h1 className=" text-5xl font-bold mb-4">Features</h1>
        <div className="courses-container flex flex-col md:flex-row items-center justify-center">
          <div className="">
            <div className="feature bg-white shadow-lg p-8 mb-4 w-full max-w-md hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-500/50">
              <h3 className="text-xl font-semibold">
                Introduction to Web Development
              </h3>
              <p>
                Learn HTML, CSS, and JavaScript to create your own websites.
                Ideal for beginners.
              </p>
            </div>
            <div className="feature bg-white shadow-lg p-8 mb-4 w-full max-w-md hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-500/50">
              <h3 className="text-xl font-semibold">
                Advanced JavaScript Techniques
              </h3>
              <p>
                Enhance your JavaScript skills with modern frameworks and
                advanced concepts.
              </p>
            </div>
            <div className="feature bg-white shadow-lg p-8 mb-4 w-full max-w-md hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-500/50">
              <h3 className="text-xl font-semibold">
                Responsive Web Design
              </h3>
              <p>
                Create mobile-friendly websites using CSS and media queries.
                Perfect for improving user experience.
              </p>
            </div>
          </div>
          <div className="pl-8">
            <img src={featurepic} alt="Courses" className="h-[500px] w-[500px]" />
          </div>
        </div>
      </section>
      <section id="about" className="py-10 text-center">
        <h1 className=" text-5xl font-bold mb-4">About Us</h1>
      </section>
      <section id="testimonials" className="py-10 text-center bg-gradient-to-b from-white to-blue-500">
        <h2 className=" text-5xl font-bold mb-4">Testimonials</h2>
        <div className="mt-8 items-center mx-64">
          <Slider {...testimonialSliderSettings}>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-lg mx-2 hover:shadow-lg hover:shadow-blue-900/50" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1)' }}>
              <p>
                "This course was amazing! The instructors were knowledgeable and
                the content was easy to follow. I went from knowing nothing about
                web development to building my own websites in just a few weeks!"
              </p>
              <p>- Jane</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-lg mx-2 hover:shadow-lg hover:shadow-blue-900/50" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1)' }}>
              <p>
                "I highly recommend this course to anyone looking to advance their
                JavaScript skills. The hands-on projects and real-world examples
                were incredibly helpful. I've already started applying what I
                learned to my job."
              </p>
              <p>- John</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-lg hover:shadow-lg hover:shadow-blue-900/50 mx-2" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1)' }}>
              <p>
                "I highly recommend this course to anyone looking to advance their
                JavaScript skills. The hands-on projects and real-world examples
                were incredibly helpful. I've already started applying what I
                learned to my job."
              </p>
              <p>- John</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-lg mx-2 hover:shadow-lg hover:shadow-blue-900/50" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1)' }}>
              <p>
                "I highly recommend this course to anyone looking to advance their
                JavaScript skills. The hands-on projects and real-world examples
                were incredibly helpful. I've already started applying what I
                learned to my job."
              </p>
              <p>- John</p>
            </div>
          </Slider>
        </div>
      </section>
      <section id="contact" className="bg-blue-500 text-white text-center py-10">
        <h1 className=" text-5xl font-bold mb-4">Contact Us</h1>
        <p>Sign up today and start experiencing the benefits!</p>
        <button className=" bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4">
          Sign Up Now
        </button>
      </section>
      <footer className="text-center py-4 bg-gray-200">
        <p>Copyright © 2024 School.in</p>
      </footer>
    </div>
  );
};

export default HeroSection;
