import { Navigate, Outlet } from "react-router-dom"


export default function Protected({ children, user, redirect }) {

    if (!user) return <Navigate replace={true} to={redirect} />

    return children ? children : <Outlet />

}
