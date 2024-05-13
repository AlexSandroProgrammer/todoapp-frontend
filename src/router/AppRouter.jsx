import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/";
import {
  IndexPage,
  ListaCarros,
  ListaParques,
  RegisterCarPage,
  RegisterParkPage,
} from "../admin";

export const AppRouter = () => {
  const authState = "authenticated";
  return (
    <Routes>
      {authState === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </>
      ) : (
        <>
          <Route path="/" element={<IndexPage />} />

          <Route path="/car" element={<ListaCarros />} />
          <Route path="/car/register" element={<RegisterCarPage />} />
          <Route path="/park/register" element={<RegisterParkPage />} />
          <Route path="/park" element={<ListaParques />} />
        </>
      )}
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
