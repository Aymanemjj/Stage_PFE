import {createBrowserRouter} from "react-router";
import App from './pages/App.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
]);


export default router;