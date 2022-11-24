import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import PhoneCategoryDetails from "../Home/PhoneCategoryDetails/PhoneCategoryDetails";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/phonedeails/:id',
                element: <PhoneCategoryDetails></PhoneCategoryDetails>,
                loader: (props) => fetch(`http://localhost:5010/allPhoneDeails/${props.params.id}`)

            }
        ]
    }
])