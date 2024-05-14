import { Provider } from "react-redux";
import React from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/";

export const TodoApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
