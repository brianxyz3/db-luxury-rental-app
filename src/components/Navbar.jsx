import { useState } from "react";
import { Link } from "react-router";
import { dbCarHireNavLogo } from "../assets/images";

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
            title: "Service",
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
        <nav className={`${showNavBar && "black_gradient text-[rgb(250,250,215)] h-dvh md:text-[rgb(250,250,215)] md:h-auto md:bg-none"} font-mono md:tracking-widest md:text-black w-screen fixed top-0 z-10 sm:px-8 px-2 py-1`}>
            <section className="flex justify-between p-3 md:p-1 rounded-2xl md:items-center h-full">
                <div className="flex items-center gap-6 lg:gap-4 h-8 text-nowrap font-semibold">
                    <Link to="/"><img src={dbCarHireNavLogo} alt="db car hire logo" className="h-12 w-14 bg-black border rounded-md md:ms-5 border-yellow-600 hover:border-2 duration-500 md:h-[3.5rem] md:w-[4.5rem]" /></Link>
                </div>
                <div className={`${showNavBar ? "opacity-100 -translate-x-52" : "h-0 opacity-0 translate-x-72 md:scale-100"} md:translate-x-0 duration-100 md:opacity-100 md:h-fit md:flex md:justify-evenly md:w-11/12`}>
                    <div className={"w-full flex justify-between"}>
                        <div className="flex justify-center h-3/4 nav_items md:h-auto mx-6 items-baseline text-center border-1 md:border-none py-3 absolute md:static top-12 left-0 flex-col md:flex-row w-full md:w-3/4 lg:w-[34rem] md:rounded-2xl lg:px-4 md:justify-evenly md:ms-auto">
                            {navItems.map((item, idx) => (
                                <Link to={`/${item.link}`} key={idx}
                                    className={`text-lg font-semibold hover:shadow-xl shadow-white hover:md:border-b-2 hover:border-white md:hover:-mt-1 whitespace-nowrap hover:cursor-pointer duration-300 ${showNavBar && "border border-white py-3 px-5 hover:translate-x-4 md:hover:translate-x-0 md:py-0 md:px-0 md:border-x-0 md:border-t-0"}`}
                                    onClick={
                                        (evt) => {
                                            evt.stopPropagation();
                                            if (showNavBar) {
                                                toggleNavBar()
                                            }
                                        }
                                    }
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <button className={`duration-500 flex p-[3px] size-8 justify-center items-center md:hidden bg-black hover:hover:bg-gray-700 border border-transparent rounded-md hover:border-[rgb(250,250,215)] ${showNavBar ? "rotate-180" : "-rotate-180"}`}
                        onClick={toggleNavBar}>
                        <div className={`w-full flex flex-col ${showNavBar ? "mr-1" : "gap-1"}`}>
                            <div className={`w-6 h-1 bg-[rgb(250,250,215)] rounded-lg ${showNavBar && "w-7 -rotate-45 origin-center"}`}></div>
                            <div className={`w-6 h-1 bg-[rgb(250,250,215)] rounded-lg ${showNavBar && "w-7 rotate-45 origin-center -mt-1"}`}></div>
                            <div className={`w-6 h-1 bg-[rgb(250,250,215)] rounded-lg ${showNavBar && "hidden"}`}></div>
                        </div>
                    </button>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;