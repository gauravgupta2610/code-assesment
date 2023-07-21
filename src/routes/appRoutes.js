import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROLES } from "../constant/constant";
import { ProtectedRoute } from "./protectedRoutes";
import Login from "../login";
import Admin from "../admin";
import User from "../user";
import NotFound from "../others/notFound";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<ProtectedRoute role={ROLES.ADMIN} />} >
                    <Route path="/admin" element={<Admin />} />
                </Route>
                <Route element={<ProtectedRoute role={ROLES.USER} />} >
                    <Route path="/user" element={<User />} />
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;