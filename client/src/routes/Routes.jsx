import Home from "../pages/Home";
import Home2 from "../pages/Home2";
import PageNotFound from "../pages/PageNotFound";

export const navigationroutes =[
    {
        path:'/',
        element:<Home></Home>
    }
    ,
    {
        path:'*',
        element :<PageNotFound></PageNotFound>
    },
    {
    path:'/home2',
    element:<Home2></Home2>
    }
]