import Layout from "./layout/layout";
import Home from "./pages/home";
import Services from "./pages/services";
import Approach from "./pages/approach";
import Projects from "./pages/projects";
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
                            {path: "projects", Component: Projects},
                            {path: "approach", Component: Approach},

                              
                        ],                    
                       },
                       {path: "contact", Component: Contact},
                       {path: "*", Component:NoPageFound}                    
                    ]);
export default router;