import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { registerAPI } from "../../services/users/userService.js";
import AlertMessage from "../Alert/AlertMessage";

// Validations
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirming your password is required"),
  role: Yup.string().oneOf(['vendor', 'admin', 'designer'], "Invalid role").required("Role is required")
});

const RegistrationForm = () => {
  // Navigate
  const navigate = useNavigate();
  // Mutation
  const { mutateAsync, isLoading, isError, error, isSuccess } = useMutation({
    mutationFn: registerAPI,
    mutationKey: ["register"],
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "vendor", // default role
    },
    // Validations
    validationSchema,
    // Submit
    onSubmit: (values) => {
      mutateAsync(values)
        .then((data) => {
          console.log(data);
          navigate("/login");
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-40 max-w-md mx-auto my-10 bg-white p-6 rounded-xl shadow-2xl space-y-6 border border-gray-200"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800">Sign Up</h2>
      {/* Display messages */}
      {isLoading && <AlertMessage type="loading" message="Loading...." />}
      {isError && <AlertMessage type="error" message={error.response.data.message} />}
      {isSuccess && <AlertMessage type="success" message="Registration success" />}
      <p className="text-sm text-center text-gray-500">Join our community now!</p>

      {/* Input Field - Username */}
      <div className="relative">
        <FaUser className="absolute top-3 left-3 text-gray-400" />
        <input
          id="username"
          type="text"
          {...formik.getFieldProps("username")}
          placeholder="Username"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.username && formik.errors.username && (
          <span className="text-[10px] text-red-500">{formik.errors.username}</span>
        )}
      </div>

      {/* Input Field - Email */}
      <div className="relative">
        <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Email"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.email && formik.errors.email && (
          <span className="text-[10px] text-red-500">{formik.errors.email}</span>
        )}
      </div>

      {/* Input Field - Password */}
      <div className="relative">
        <FaLock className="absolute top-3 left-3 text-gray-400" />
        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
          placeholder="Password"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.password && formik.errors.password && (
          <span className="text-[10px] text-red-500">{formik.errors.password}</span>
        )}
      </div>

      {/* Input Field - Confirm Password */}
      <div className="relative">
        <FaLock className="absolute top-3 left-3 text-gray-400" />
        <input
          id="confirmPassword"
          type="password"
          {...formik.getFieldProps("confirmPassword")}
          placeholder="Confirm Password"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span className="text-[10px] text-red-500">{formik.errors.confirmPassword}</span>
        )}
      </div>

      {/* Select Role */}
      <div className="relative">
        <select
          id="role"
          name="role"
          {...formik.getFieldProps("role")}
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="vendor">Vendor</option>
          <option value="admin">Admin</option>
          <option value="designer">Designer</option>
        </select>
        {formik.touched.role && formik.errors.role && (
          <span className="text-[10px] text-red-500">{formik.errors.role}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
