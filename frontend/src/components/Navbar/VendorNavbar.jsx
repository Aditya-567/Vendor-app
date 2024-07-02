import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { logoutAction } from "../../redux/slice/authSlice";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const VendorNavbar = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutAction());
        localStorage.removeItem("userInfo");
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="mx-20">
                <div className="flex h-16 justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 pl-1">
                            <img src={logo} alt="logo" className="h-18 w-24" />
                        </div>
                    </div>
                    <div className="hidden md:flex md:space-x-8">
                        <NavLink
                            to="/vendor"
                            className={({ isActive }) =>
                                isActive
                                    ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-[18px] font-medium text-gray-900 "
                                    : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[18px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            }
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-[18px] font-medium text-gray-900"
                                    : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[18px] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            }
                        >
                            Profile
                        </NavLink>
                    </div>
                    <div className="flex justify-end items-center pr-1">
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
        </nav>
    );
};

export default VendorNavbar;
