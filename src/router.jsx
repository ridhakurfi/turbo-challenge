import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Add from "./pages/Add";
import List from "./pages/List";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path:'/add',
        element: <Add></Add>
    },
    {
        path:'/list',
        element: <List></List>
    }

])
export default router