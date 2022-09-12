import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../lib/AppContext";

export default function AuthenticatedRoute({ children }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${pathname}${search}`} />;
  }

  return children;
}