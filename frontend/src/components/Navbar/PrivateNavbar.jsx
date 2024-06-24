import { Disclosure } from "@headlessui/react";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { logoutAction } from "../../redux/slice/authSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PrivateNavbar() {
  // Dispatch
  const dispatch = useDispatch();
  // Logout handler
  const logoutHandler = () => {
    dispatch(logoutAction());
    // Remove the user from storage
    localStorage.removeItem("userInfo");
  };

  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-20">
            <div className="flex h-14 justify-between items-center">
              <div className="flex items-center">
                <div className="flex-shrink-0 pl-1">
                  {/* Logo */}
                  <img src={logo} alt="logo" className="h-7 w-18" />
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-8">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-[16px] font-medium text-gray-900"
                      : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-[16px] font-medium text-gray-900"
                      : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/designer"
                  className={({ isActive }) =>
                    isActive
                      ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-[16px] font-medium text-gray-900"
                      : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }
                >
                  Designer
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-[16px] font-medium text-gray-900"
                      : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/"
                  onClick={logoutHandler}
                  className={({ isActive }) =>
                    isActive
                      ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-[16px] font-medium text-gray-900"
                      : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[16px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }
                >
                  <IoLogOutOutline className="h-5 w-5" aria-hidden="true" />
                  <span>Logout</span>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
