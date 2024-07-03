import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/Auth/AuthRoute";
import HomePage from "./components/Home/HomePage";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import AdminDashboard from "./components/Users/AdminDashboard";
import DesignerDashboard from "./components/Users/DesignerDashboard";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import VendorDashboard from "./components/Users/vendordash";
function App() {
  const user = useSelector((state) => state.auth.user);

  const renderDashboard = () => {
    if (user?.role === "vendor") {
      return <VendorDashboard />;
    } else if (user?.role === "designer") {
      return <DesignerDashboard />;
    } else if (user?.role === "admin") {
      return <AdminDashboard />;
    } else {
      return null;
    }
  };

  return (
    <BrowserRouter>
      {user ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/vendor"
          element={
            <AuthRoute>
              {renderDashboard()}
            </AuthRoute>
          }
        />
        <Route
          path="/designer"
          element={
            <AuthRoute>
              {renderDashboard()}
            </AuthRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AuthRoute>
              {renderDashboard()}
            </AuthRoute>
          }
        />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
