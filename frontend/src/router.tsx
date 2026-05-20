import {createBrowserRouter} from "react-router";
import LeaderBoard from "./pages/LeaderBoard.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import Profile from "./pages/Profile.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {index:true, Component:LeaderBoard},
            {path:"/profile", Component:Profile}
        ]
    }
]);


export default router;