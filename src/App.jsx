import Header from "./components/Header.jsx";
import Layout from "./pages/LayoutPage/Layout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import Seam from "./pages/seam/Seam.jsx";
import AllProduct from "./pages/all-product/AllProduct.jsx";

export default function App() {


    const route = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
                    path: "/seam",
                    element: <Seam/>
                },
                {
                    path: "/all-product",
                    element: <AllProduct/>
                }
            ]
        }
    ])
    return (
        <div className="max-w-[1920px] mx-auto">
            <RouterProvider router={route}/>
        </div>
    )
}