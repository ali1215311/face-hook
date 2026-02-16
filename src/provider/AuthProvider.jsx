import { useState } from "react";
import { AuthContext } from "../context";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return <AuthContext value={{ auth, setAuth }}>{children}</AuthContext>;
};
export default AuthProvider;
