import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            title: "Home",
            link: ""
        },
        {
            title: "About Us",
            link: "about"
        },
        {
            title: "FAQ",
            link: "faq"
        },
        {
            title: "Contact Us",
            link: "contact"
        },
    ];

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // return (
    //     <nav id="top" className="w-full fixed top-0 z-1 px-3 text-blue-600 md:text-[#f4f4f4] py-2">
    //         <div className="flex justify-between flex-wrap md:flex-nowrap md:items-center">
    //             <div className="text-2xl font-bold font-sans text-blue-800"><Link to="/"><span className="text-blue-300">DB</span>Luxury&Rental</Link></div>
    //             <div className={`${isOpen ? "h-60 opacity-100" : "h-0 opacity-0 hidden"} duration-300 order-last md:order-none md:opacity-100 md:h-fit md:flex md:justify-evenly md:w-11/12 my-2`}>
    //                 <div className={"w-full flex justify-center"}>
    //                     <div className="flex justify-center text-left border-1 md:border-none py-3 gap-4 sticky md:static top-20 left-0 flex-col md:flex-row w-full md:w-full">
    //                         {navItems.map((item, idx) => (
    //                             <Link to={`/${item.link}`} key={idx} className="text-lg border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1 whitespace-nowrap">{item.title}</Link>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* <a href="#contact" className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1 whitespace-nowrap">CONTACT US</a> */}

    //             <div className="flex items-start justify-end gap-4 w-1/4 md:w-auto">
    //                 <button className={`duration-500 flex p-1 size-8 justify-center items-center md:hidden text-white bg-blue-600 hover:hover:bg-blue-500 border border-transparent rounded-md hover:border-white ${isOpen ? "rotate-180" : "-rotate-180"}`} onClick={toggleNavbar}>
    //                     <div className={`w-full flex flex-col ${isOpen ? "mr-1" : "gap-1"}`}>
    //                         <div className={`w-6 h-1 bg-white rounded-lg ${isOpen && "w-7 -rotate-45 origin-center"}`}></div>
    //                         <div className={`w-6 h-1 bg-white rounded-lg ${isOpen && "w-7 rotate-45 origin-center -mt-1"}`}></div>
    //                         <div className={`w-6 h-1 bg-white rounded-lg ${isOpen && "hidden"}`}></div>
    //                     </div>
    //                 </button>
    //             </div>
    //         </div>
    //     </nav>
    // )
    return (
        <nav id="top" className={`${isOpen && "bg-black/75 md:bg-transparent"} w-full fixed top-0 z-1 px-3 text-blue-600 md:text-[#1009a0] pb-2 pt-1`}>
            <div className="flex justify-between md:items-center">
                <div className="text-2xl font-bold font-sans text-blue-800"><Link to="/"><span className="text-blue-300 bg-black p-1 border border-blue-900">DB</span>Luxury&Rental</Link></div>
                <div className={`${isOpen ? "h-52 opacity-100" : "h-0 opacity-0 hidden"} duration-300 md:opacity-100 md:h-fit md:flex md:justify-evenly md:w-11/12`}>
                    <div className={"w-full flex justify-center"}>
                        <div className="flex justify-center text-left border-1 md:border-none py-3 md:gap-8 gap-3.5 absolute md:static top-12 left-0 flex-col md:flex-row w-full md:w-full">
                            {navItems.map((item, idx) => (
                                <Link to={`/${item.link}`} key={idx} className="text-lg border-b-2 border-gray-200 md:border-[#1009a0] hover:border-white [#112152] md:hover:-mt-1 whitespace-nowrap">{item.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <a href="#contact" className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1 whitespace-nowrap">CONTACT US</a> */}

                <div className="flex items-start gap-4">

                    <button className={`duration-500 flex p-1 size-8 justify-center items-center md:hidden text-white bg-blue-600 hover:hover:bg-blue-500 border border-transparent rounded-md hover:border-white ${isOpen ? "rotate-180" : "-rotate-180"}`} onClick={toggleNavbar}>
                        <div className={`w-full flex flex-col ${isOpen ? "mr-1" : "gap-1"}`}>
                            <div className={`w-6 h-1 bg-white rounded-lg ${isOpen && "w-7 -rotate-45 origin-center"}`}></div>
                            <div className={`w-6 h-1 bg-white rounded-lg ${isOpen && "w-7 rotate-45 origin-center -mt-1"}`}></div>
                            <div className={`w-6 h-1 bg-white rounded-lg ${isOpen && "hidden"}`}></div>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;