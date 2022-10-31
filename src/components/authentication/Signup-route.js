import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../../contexts/AuthContext";
function index() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}

export default index;
