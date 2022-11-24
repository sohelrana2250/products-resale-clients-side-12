import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import PhoneCategoryDetails from "../Home/PhoneCategoryDetails/PhoneCategoryDetails";
import Register from "../Register/Register";
import Login from "../Login/Login"

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/login', element: <Login></Login>
            },

            {
                path: '/singup', element: <Register></Register>
            },
            {
                path: '/phonedeails/:id',
                element: <PhoneCategoryDetails></PhoneCategoryDetails>,
                loader: (props) => fetch(`http://localhost:5010/allPhoneDeails/${props.params.id}`)

            }
        ]
    }
])