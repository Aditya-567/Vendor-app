import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import coursepic from "../../assets/course.png";
import hero from "../../assets/hero.png";
import homepic from "../../assets/home.png";
import logo from "../../assets/logo.png";

export default function HeroSection() {
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

  return (
    <div className="flex flex-col min-h-[100dvh] bg-cream">
      <div className="mx-10">
        <main className="flex-1">
          <section className="w-full py-12 sm:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      VENDOR.hub - The Complete Platform for Designers, Vendors, and Admins
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Discover, connect, and manage your vendor relationships with VENDOR.hub. Empower designers, validate
                      vendor details, and streamline your supply chain.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-red-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-300 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Get Started
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-full border border-gray-300 bg-white px-8 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
                <img
                  src={hero}
                  width="550"
                  height="550"
                  alt="Hero"
                  style={{ borderRadius: "40px" }}
                  className="shadow-4xl"
                />
              </div>
            </div>
          </section>

          {/* slider---> */}
          <div className="flex flex-col items-center mt-10">
            <Slider {...sliderSettings} className="w-4/5">
              <div >
                <div className="flex flex-row items-center space-x-8">
                  <img src={homepic} alt="Logo" className="h-80 w-80" />
                  <div className="text-left">
                    <h1 className="text-5xl font-bold">Welcome to Our School.in</h1>
                    <p className="text-lg mt-2">
                      We are a school dedicated to helping you achieve your goals.
                      <br />
                      Explore our wide range of courses tailored to your needs.
                      <br />
                      Join us and start your journey to success today!
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex flex-row items-center space-x-8">
                  <img src={coursepic} alt="Logo" className="h-80 w-80" />
                  <div className="text-left">
                    <h1 className="text-5xl font-bold">Welcome to Our School.in</h1>
                    <p className="text-lg mt-2">
                      We are a school dedicated to helping you achieve your goals.
                      <br />
                      Explore our wide range of courses tailored to your needs.
                      <br />
                      Join us and start your journey to success today!
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex flex-row items-center space-x-8">
                  <img src={logo} alt="Logo" className="h-80 w-98" />
                  <div className="text-left">
                    <h1 className="text-5xl font-bold">Welcome to Our School.in</h1>
                    <p className="text-lg mt-2">
                      We are a school dedicated to helping you achieve your goals.
                      <br />
                      Explore our wide range of courses tailored to your needs.
                      <br />
                      Join us and start your journey to success today!
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          {/* slider */}

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                      Designer, Vendor, and Admin Features
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Empower Designers, Vendors, and Admins to Discover, Connect, and Manage
                    </h2>
                    <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Designers can easily search, filter, and view vendor profiles, portfolios, and capabilities. Vendors
                      can manage their profiles and submit details for validation. Admins can review and approve or reject
                      vendor submissions.
                    </p>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center">
                      <img src="/placeholder.svg" alt="Check" className="mr-2 h-4 w-4" />
                      Comprehensive vendor profiles with detailed information.
                    </li>
                    <li className="flex items-center">
                      <img src="/placeholder.svg" alt="Check" className="mr-2 h-4 w-4" />
                      Advanced search and filtering to find the perfect vendor.
                    </li>
                    <li className="flex items-center">
                      <img src="/placeholder.svg" alt="Check" className="mr-2 h-4 w-4" />
                      Seamless communication and collaboration tools.
                    </li>
                    <li className="flex items-center">
                      <img src="/placeholder.svg" alt="Check" className="mr-2 h-4 w-4" />
                      Vendor management and validation features.
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-red-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-300 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Explore Features
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-full border border-gray-300 bg-white px-8 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="space-y-4">
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Hear from designers, vendors, and admins who have transformed their supply chain with VENDOR.hub.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <blockquote className="space-y-2">
                      <p className="text-lg font-medium leading-relaxed">
                        "VENDOR.hub has been a game-changer for our design team. The comprehensive vendor profiles and
                        advanced search tools have made it so much easier to find the perfect partners for our projects."
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200" />
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">Jane Doe</p>
                          <p className="text-sm text-gray-600">Designer, Acme Inc.</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <blockquote className="space-y-2">
                      <p className="text-lg font-medium leading-relaxed">
                        "As a vendor, VENDOR.hub has made it so much easier to manage my profile and submit details for
                        validation. The platform's vendor management tools have streamlined our entire supply chain
                        process."
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200" />
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">John Smith</p>
                          <p className="text-sm text-gray-600">Vendor, Widgets Inc.</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <blockquote className="space-y-2">
                      <p className="text-lg font-medium leading-relaxed">
                        "As an admin, VENDOR.hub has been a lifesaver. The vendor validation and approval process is so
                        much more efficient, and the platform's reporting tools give us valuable insights into our supply
                        chain."
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200" />
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">Sarah Johnson</p>
                          <p className="text-sm text-gray-600">Admin, Acme Corp.</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col gap-4 items-center">
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Get in touch with our team to learn more about VENDOR.hub.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-red-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-300 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Sales
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-full border border-gray-300 bg-white px-8 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Schedule a Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-600">&copy; 2024 VENDOR.hub. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
