import { createBrowserRouter } from "react-router-dom";
import Exam from "../../Component/Pages/Exam/Exam";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Component/Pages/Home/Home/Home";



export const routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,        
        children: [
            {
                path: '/',
                element:<Home/>,
            },
            {
                path: '/exam',
                element: <Exam/>
            }
        ]

    }

])