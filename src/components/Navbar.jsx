import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    const toggleNavBar = () => {
        window.document.body.classList.toggle("disable_scroll");
        setShowNavBar(prevState => !prevState)
    };
    const navItems = [
        {
            title: "Home",
            link: ""
        },
        {
            title: "Services",
            link: "services"
        },
        {
            title: "About Us",
            link: "about"
        },
        {
            title: "Contact Us",
            link: "contact"
        },
    ];



    return (
        <nav id="top" className={`${showNavBar && "black_gradient text-white h-svh md:text-black md:h-auto md:bg-none"} w-full fixed top-0 z-10 sm:px-8 px-4 pb-2 pt-2`}>
            <div className="flex justify-between md:items-center h-full">
                <div className="text-2xl font-bold font-sans text-blue-800"><Link to="/"><span className="text-blue-300 bg-black p-1 border border-blue-900">DB</span>Luxury&Rental</Link></div>
                <div className={`${showNavBar ? "opacity-100" : "h-0 opacity-0 hidden"} duration-300 md:opacity-100 md:h-fit md:flex md:justify-evenly md:w-11/12`}>
                    <div className={"w-full flex justify-center"}>
                        <div className="flex justify-center h-3/4 mx-6 items-baseline text-center border-1 md:border-none py-3 md:gap-8  absolute md:static top-12 left-0 flex-col md:flex-row w-full md:w-full">
                            {navItems.map((item, idx) => (
                                <Link to={`/${item.link}`} key={idx} className={`text-lg font-semibold hover:shadow-xl shadow-white md:border-b-2 md:border-[#1009a0] hover:border-white [#112152] md:hover:-mt-1 whitespace-nowrap hover:cursor-pointer ${showNavBar && "border border-white px-5 hover:translate-x-4 duration-300 py-3"}`}>{item.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <button className={`duration-500 flex p-1 size-8 justify-center items-center md:hidden text-white bg-blue-800 hover:hover:bg-blue-600 border border-transparent rounded-md hover:border-white ${showNavBar ? "rotate-180" : "-rotate-180"}`} onClick={toggleNavBar}>
                        <div className={`w-full flex flex-col ${showNavBar ? "mr-1" : "gap-1"}`}>
                            <div className={`w-6 h-1 bg-white rounded-lg ${showNavBar && "w-7 -rotate-45 origin-center"}`}></div>
                            <div className={`w-6 h-1 bg-white rounded-lg ${showNavBar && "w-7 rotate-45 origin-center -mt-1"}`}></div>
                            <div className={`w-6 h-1 bg-white rounded-lg ${showNavBar && "hidden"}`}></div>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;