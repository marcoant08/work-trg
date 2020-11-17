import React, { useContext } from "react";
import { AuthContext } from "./contexts/auth";
import Routes from "./routes";
import SecureRoutes from "./secureRoutes";

function RoutesIndex() {
  const { signed } = useContext(AuthContext);

  return !signed ? <Routes /> : <SecureRoutes />;
}

export default RoutesIndex;
