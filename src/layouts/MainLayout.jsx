import { Outlet } from "react-router"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollWatcher from "../components/ScrollWatcher";


const MainLayout = () => {

    return (
        <section className="h-dvh" id="top">
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollWatcher />
        </section>
    )
}

export default MainLayout;