import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RiLoginCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo.png";

export default function PublicNavbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-md z-50">
      {({ open }) => (
        <>
          <div className="mx-20">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  {/* Logo */}
                  <img src={logo} alt="logo" className="h-15 w-20" />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    to="/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-gray-900 hover:border-indigo-500 cursor-pointer"
                  >
                    Home
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-gray-900 hover:border-indigo-500 cursor-pointer"
                  >
                    Features
                  </ScrollLink>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-gray-900 hover:border-indigo-500 cursor-pointer"
                  >
                    About Us
                  </ScrollLink>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <ScrollLink
                    to="testimonials"
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-gray-900 hover:border-indigo-500 cursor-pointer"
                  >
                    Testimonials
                  </ScrollLink>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-gray-900 hover:border-indigo-500 cursor-pointer"
                  >
                    Contact Us
                  </ScrollLink>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <Link
                    to="/register"
                    className="relative inline-flex items-center gap-x-1.5 rounded bg-blue-800 px-3 py-2 text-md font-semibold text-white shadow-md shadow-blue-200 hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:shadow-md hover:shadow-blue-900/50 transform transition-transform duration-200 hover:scale-105"
                  >
                    <FaRegUser className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Register
                  </Link> */}
                  <Link
                    to="/login"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-red-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-300 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <RiLoginCircleLine
                      className="-ml-0.5 h-5 w-5"
                      aria-hidden="true"
                    />
                    Login
                  </Link>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <button
                    type="button"
                    className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                About Us
              </ScrollLink>
              <ScrollLink
                to="testimonials"
                smooth={true}
                duration={500}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Testimonials
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Contact Us
              </ScrollLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
