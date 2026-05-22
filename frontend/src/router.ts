import {createBrowserRouter} from "react-router";
import LeaderBoard from "./pages/LeaderBoard.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import Profile from "./pages/Profile.tsx";
import Missions from "./pages/Missions.tsx";
import Achievements from "./pages/Achievements.tsx";
import League from "./pages/League.tsx";
import Progress from "./pages/Progress.tsx";
import Rewards from "./pages/Rewards.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {index:true, Component:LeaderBoard},
            {path:"/profile", Component:Profile},
            {path:"/missions", Component:Missions},
            {path:"/achievements", Component:Achievements},
            {path:"/league", Component:League},
            {path:"/progress", Component:Progress},
            {path:"/rewards", Component:Rewards},


        ]
    }
]);


export default router;