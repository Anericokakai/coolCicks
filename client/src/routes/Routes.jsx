import EachCategory from "../components/EachCategory";
import InspectPage from "../components/InspectPage";

import Home2 from "../pages/Home2";
import LoginPage from "../pages/LoginPage";

import PageNotFound from "../pages/PageNotFound";
import Registration from "../pages/Registration";

export const navigationroutes =[
    {
        path:'/',
        element:<Home2></Home2>
    },
    {
        path:"/login",
        element:<LoginPage/>

    }
    ,
    {
        path:'*',
        element :<PageNotFound></PageNotFound>
    },
    {
        path:"/selectedCategory",
        element:<EachCategory/>
    },
    {
        path:"/register",
        element:<Registration/>
    },
    {
        path:'/inspect',
        element:<InspectPage></InspectPage>
    }
    
]