import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/main";
import { dashboardRouter } from "../modules/dashboad/router";

export default createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            ...dashboardRouter,
        ]
        
    },
])