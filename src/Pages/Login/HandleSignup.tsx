import React from "react";
import { toast } from "react-toastify";

const handleSignup = (formData: {
  Fullname: string;
  email: string;
  password: string;
}) => {
  const registeredUsers: {
    Fullname: string;
    email: string;
    password: string;
  }[] = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

  const isExisting = registeredUsers.some(
    (user) => user.email === formData.email
  );

  if (isExisting) {
    toast.error("Email already exists. Please use a different email.");
    return false;
  }

  registeredUsers.push(formData);

  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

  return true;
};

export default handleSignup;