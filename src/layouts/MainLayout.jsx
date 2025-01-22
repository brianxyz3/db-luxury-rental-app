import { Outlet } from "react-router"
import Navbar from "../components/navbar";
import Copyright from "../components/Copyright";


const MainLayout = () => {

    return (
        <section className="h-svh">
            <Navbar />
            <Outlet />
            <Copyright />
        </section>
    )
}

export default MainLayout;