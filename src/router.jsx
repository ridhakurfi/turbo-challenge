import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Add from "./pages/Add";
import List from "./pages/List";
import Protect from "./components/Protected";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/add',
        element:
            (
                <Protect>
                    <Add />
                </Protect>
            )
    },
    {
        path: '/list',
        element:
            (
                <Protect>
                    <List />
                </Protect>
            )
    }

])
export default router