import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import PhoneCategoryDetails from "../Home/PhoneCategoryDetails/PhoneCategoryDetails";
import Register from "../Register/Register";
import Login from "../Login/Login"
import PrivateRouter from "./PrivateRouter";
import Orders from "../BuyerOrder/Orders";
import AddProduct from "../AddProduct/AddProduct";
import MyProducts from "../MyProduct/MyProducts";
import Payment from "../Payment/Payment";
import DisplayError from "../Shared/DisplayError";
import Dashboard from "../DashBoard/Dashboard";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import AllData from "../DashBoard/AllData/AllData";
import AllUsers from "../DashBoard/AllUsers/AllUsers";
import AllBuyer from "../DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../DashBoard/AllSaller/AllSeller";
import Report from "../DashBoard/Report/Report";
import Blog from "../Blog/Blog";




export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                element: <PrivateRouter><PhoneCategoryDetails></PhoneCategoryDetails></PrivateRouter>,
                loader: (props) => fetch(`https://b612-used-products-resale-server-side-mu.vercel.app/allPhoneDeails/${props.params.id}`)

            },
            {
                path: '/buyerOrser',
                element: <Orders></Orders>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myProduct',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>,
                loader: (props) => fetch(`https://b612-used-products-resale-server-side-mu.vercel.app/booking/${props.params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }


        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',

                element: <AllData></AllData>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/allSaller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/mydata',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/report',
                element: <Report></Report>
            }
        ]
    }
])