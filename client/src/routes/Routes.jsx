import EachCategory from "../components/EachCategory";
import InspectPage from "../components/InspectPage";

import Home2 from "../pages/Home2";
import PageNotFound from "../pages/PageNotFound";

export const navigationroutes =[
    {
        path:'/',
        element:<Home2></Home2>
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
        path:'/inspect',
        element:<InspectPage></InspectPage>
    }
    
]