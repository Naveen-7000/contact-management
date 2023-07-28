import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContactForm from "./routes/contactForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {QueryClient,QueryClientProvider} from 'react-query';
import { store } from "../src/redux/store";
import { Provider } from "react-redux";
import "./index.css";
import EditContactForm from "./routes/editContactForm";
import Chart from "./routes/chart";
import CountryMap from "./components/CountryMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App title={"Contacts"} />,
  },
  {
    path: "/charts",
    element: <Chart />,
  },
  {
    path: "/contact/add",
    element: <ContactForm title="Add Contact" />,
  },
  {
    path: "/contact/edit/:id",
    element: <EditContactForm />,
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
