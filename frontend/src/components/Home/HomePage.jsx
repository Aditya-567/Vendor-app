import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import coursepic from "../../assets/course.png";
import homepic from "../../assets/home.png";
import spin from "../../assets/l1.png";
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
    <div className="mt-4" >
      <div>
        <div className="relative w-full h-[90vh] overflow-hidden bg-blue-600 flex items-center justify-center">
          <div className="absolute top-0 w-full h-full bg-blue-700 rounded-tl-full rounded-bl-full overflow-hidden" style={{ left: '52%' }}>
            <div className="absolute top-0 left-0 w-full h-full bg-white" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="relative w-full h-full flex items-center justify-between">
              <div className="w-1/2 text-white text-left mt-20">
                <div>
                  <div className="flex items-center">
                    <p className="text-3xl font-bold mb-4">Welcome to &nbsp;</p>
                  </div>
                  <h1 className="text-8xl text-shadow-2xl font-bold" style={{ letterSpacing: '-0.02em' }}>VENDOR HUB</h1>
                  <p className="mb-10">Your Ultimate Partner in Business Excellence</p>
                  <p className="mb-20"> we understand the intricate dynamics of vendor management and the pivotal role<br />
                    it plays in driving business success. Our platform is designed to streamline and<br />
                    optimize your vendor interactions, ensuring a seamless and efficient procurement <br />
                    process</p>
                  <div className="flex relative">
                    <h1 className="text-3xl">
                      <Link to="top">what we offer :</Link>
                    </h1>

                  </div>
                </div>



              </div>
              <div className=" pl-20 w-1/2 h-full flex items-center justify-center" >
                <div className="w-[600px] h-[600px] rounded-full ">
                  <img
                    src={spin}
                    alt="logo"
                    className="w-full h-full object-cover animate-spin-slow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="top" className="flex flex-col items-center bg-blue-600 text-white py-12 text-center">
        <Slider {...sliderSettings} className="w-4/5">
          <div className="mx-40">
            <div className="flex flex-row items-center space-x-8">
              <img src={homepic} alt="Logo" className="h-80 w-80" />
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
              <img src={coursepic} alt="Logo" className="h-80 w-80" />
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
              <img src={logo} alt="Logo" className="h-80 w-98" />
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
      </div>
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
            <img src={spin} alt="Courses" className="h-[400px] w-[400px] animate-spin-slow" />
          </div>
        </div>
      </section>
      <section id="about" className="py-10 text-center">
        <h2 className=" text-5xl font-bold mb-4">About Us</h2>
      </section>
      <section id="testimonials" className="py-10 text-center bg-gradient-to-b from-white to-blue-500">
        <h2 className=" text-5xl font-bold mb-4">Testimonials</h2>
        <div className="mt-8 items-center mx-44">
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