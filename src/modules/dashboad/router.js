import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";


export const dashboardRouter =[
{
    path:'/',
    element: <Home></Home>
},
{
    path:'products',
    element:<Products/>
},
{
    path:'services',
    element:<Services/>
},
]