import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/";
import { CarPage } from "../car";
import { ParkPage } from "../park";

export const AppRouter = () => {
  const authState = "not-authenticated";
  return (
    <Routes>
      {authState === "not-authenticated" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Routes path="/*">
          <Route path="/car/*" element={<CarPage />} />
          <Route path="/park/*" element={<ParkPage />} />
        </Routes>
      )}
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
