import Layout from "./layout/layout";
import Home from "./pages/home";
import Services from "./pages/services";
import Approach from "./pages/approach";
import Products from "./pages/products";
import About from "./pages/about";
import Contact from "./pages/contact";

import NoPageFound from "./pages/undefined";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
                    [
                       { path: "/", 
                        Component: Layout,
                        children: [
                            {index: true, Component: Home},
                            {path: "services", Component: Services},
                            {path: "about", Component: About},
                            {path: "products", Component: Products},
                            {path: "approach", Component: Approach},

                              
                        ],                    
                       },
                       {path: "contact", Component: Contact},
                       {path: "*", Component:NoPageFound}                    
                    ]);
export default router;