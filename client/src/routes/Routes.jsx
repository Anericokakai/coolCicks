import Home from "../pages/Home";
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
    }
]