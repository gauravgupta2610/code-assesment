import { Outlet } from "react-router-dom"

export const ProtectedRoute = ({ role }) => {
    const currentrole = localStorage.getItem('loginRole')
    const status = localStorage.getItem('loginStatus')

    if (status) {
        if (!(currentrole === role)) {
            window.location.pathname = '/notFound'
        }
    } else {
        window.location.pathname = '/'
    }

    return (
        <Outlet />
    )
}
