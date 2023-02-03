import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainComponent from "./components/main/MainComponent";
import Portfolio from "./components/portfolio/PortfolioComponent";
import ContactComponent from "./components/contact/ContactComponent";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainComponent/>
    },
    {
        path: "/home",
        element: <MainComponent/>
    },
    {
        path: "/portfolio",
        element: <Portfolio/>
    },
    {
        path: "/contact",
        element: <ContactComponent/>
    }
])

export default Router