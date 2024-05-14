import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    // crear un reducer que se encarga de poner al usuario en estado de chequeo
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    // crear un reducer que se encargara de loguear al usuario
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    // crear un reducer que se encargara de cerrar la sesion del usuario
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// exportacion de los reducers

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
