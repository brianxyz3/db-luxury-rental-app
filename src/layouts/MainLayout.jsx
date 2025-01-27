import { Outlet } from "react-router"
import Navbar from "../components/navbar";
import Footer from "../components/Footer";


const MainLayout = () => {

    return (
        <section className="h-dvh">
            <Navbar />
            <Outlet />
            <Footer />
        </section>
    )
}

export default MainLayout;