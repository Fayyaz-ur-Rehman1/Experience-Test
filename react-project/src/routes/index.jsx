import { useRoutes } from "react-router-dom"
import Routes from "../constart/routes";
import RealTimeType from '../Pages/RealTimeType';
import Home from '../Pages/Home';
import LoginPage from "../Pages/LoginPage";
import TitleFetch from "../Component/Title/Title";

export function AppRoutes() {
    return useRoutes([
        {
            path: Routes.realTimeType,
            element: <RealTimeType />
        },
        {
            path: Routes.home,
            element: <Home />
        },
        {
            path: Routes.login,
            element: <LoginPage />
        },
        {
            path: Routes.title,
            element: <TitleFetch />
        }
    ]);
}