
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import { Outlet, createBrowserRouter } from "react-router-dom"
import Contact from "./Contact"
import About from "./About"
import Error from "./Error"

import Cart from "./Cart"

const AppLayout = ( ) => {


    return(
       
            <div>
            <Header />
        <Outlet />
        <Footer />
            </div>
        
       
    )
}

export const appRouter = createBrowserRouter([{
    path:"/",
    element: <AppLayout />,
children: [
{
    path:'/',
    element:<Body/>
},

    {
        path:"/contact",
        element: <Contact />,
    },
    {
        path:"/about",
        element: <About />,
    },
    {
        path:"/cart",
        element:<Cart />

    }
 ],

    errorElement: <Error /> 
},


]


)

export default AppLayout;