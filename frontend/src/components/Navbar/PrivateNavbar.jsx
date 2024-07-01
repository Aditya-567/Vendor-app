import React from "react";
import { useSelector } from "react-redux";
import AdminNavbar from "./AdminNavbar";
import DesignerNavbar from "./DesignerNavbar";
import VendorNavbar from "./VendorNavbar";

const PrivateNavbar = () => {
  const user = useSelector((state) => state.auth.user);

  if (user?.role === "vendor") {
    return <VendorNavbar />;
  } else if (user?.role === "designer") {
    return <DesignerNavbar />;
  } else if (user?.role === "admin") {
    return <AdminNavbar />;
  } else {
    return null;
  }
};

export default PrivateNavbar;
