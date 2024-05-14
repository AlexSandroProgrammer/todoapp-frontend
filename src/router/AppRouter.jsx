import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth";
import {
  IndexPage,
  ListaCarros,
  ListaParques,
  RegisterCarPage,
  RegisterParkPage,
} from "../admin";
import { CheckingPage } from "../auth/404";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <CheckingPage />;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<IndexPage />} />
          <Route path="/car" element={<ListaCarros />} />
          <Route path="/car/register" element={<RegisterCarPage />} />
          <Route path="/park" element={<ListaParques />} />
          <Route path="/park/register" element={<RegisterParkPage />} />
        </>
      )}
    </Routes>
  );
};
