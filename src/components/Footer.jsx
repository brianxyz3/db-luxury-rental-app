// import { Call, Email } from "@mui/icons-material";
// import { Link } from "react-router";

// const Footer = () => {
//     return (
//         <footer className="bg-black text-white py-6 px-2 md:p-8">
//             <section className="w-full mx-auto flex justify-center items-center md:justify-between">
//                 <div className="w-7/12 md:text-left md:w-2/5 lg:w-1/2">
//                     <h3 className="text-3xl">DB Car Hire</h3>
//                     <p>Drive Your Dreams.</p>
//                     <p>Arrive Exceptional.</p>
//                     <p>Experience the Extraordinary.</p>
//                 </div>
//                 <div className="w-full flex flex-wrap gap-2 md:flex-nowrap lg:w-1/2 md:w-3/5">
//                     {/* <div className="ms-auto"></div> */}
//                     <div className="w-full flex flex-col items-center md:items-start md:w-2/5">
//                         <h3 className="text-3xl">
//                             Site Map
//                         </h3>
//                         <div className="text-lg flex flex-col">
//                             <Link to="/home">Home</Link>
//                             <Link to="/services">Services</Link>
//                             <Link to="/about">About Us</Link>
//                             <Link to="/contact">Contact Us</Link>
//                         </div>
//                     </div>
//                     <div className="w-full flex flex-col items-center md:w-3/5 lg:w-1/2">
//                         <h3 className="text-3xl">
//                             Contact Us
//                         </h3>
//                         <div className="flex flex-col">
//                             <a href="mailto:dbnigltd.com@yahoo.com" className="text-sm"><Email /> dbnigltd.com@yahoo.com</a>
//                             <a href="tel:+2347111111181"><Call /> 07111111181</a >
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </footer>
//     )
// }

// export default Footer;

import { Email, Call, FacebookOutlined, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { Link } from "react-router";
import Copyright from "./Copyright";


const Footer = () => {
    return (
        <footer className="bg-black font-mono text-indigo-200 px-6 mt-20 md:px-8">
            <div className="flex flex-wrap justify-center gap-6 py-6 md:flex-nowrap md:justify-between">
                <div className="w-64 text-xs md:w-72 md:text-sm">
                    <h5 className="text-xl mb-3 md:text-2xl"><span className="p-1 border rounded-md border-blue-900">DB</span> Car Hire</h5>
                    <p>Where driving is not just about getting from point A to point B—it’s about making an impression, experiencing unparalleled comfort. We offer an exclusive collection of high-end vehicles for those who demand nothing less than perfection.</p>
                    <Link to="/about" className="hover:text-white">"Learn More About Us"</Link>
                    <div className="flex gap-4 text-indigo-200 mt-6 justify-center sm:justify-normal">
                        <a href="" target="_blank" rel="noopener" className="hover:text-white"><Twitter fontSize="large" /></a>
                        <a href="" target="_blank" rel="noopener" className="hover:text-white"><Instagram fontSize="large" /></a>
                        <a href="" target="_blank" rel="noopener" className="hover:text-white"><FacebookOutlined fontSize="large" /></a>
                        <a href="" target="_blank" rel="noopener" className="hover:text-white"><WhatsApp fontSize="large" /></a>
                    </div>
                </div>
                <div className="w-64 flex flex-wrap justify-between gap-4 md:gap-8 md:flex-nowrap md:w-auto">
                    <div>
                        <h5 className="text-xl mb-3  md:text-2xl">Site Map</h5>
                        <div className="flex flex-col gap-3 text-sm md:text-base">
                            <Link to="/" className="hover:text-white">Home</Link>
                            <Link to="/services" className="hover:text-white">Services</Link>
                            <Link to="/about" className="hover:text-white">About Us</Link>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-xl mb-3 md:text-2xl">Contact</h5>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:dbnigltd.com@yahoo.com" className="hover:text-white text-nowrap text-xs md:text-sm"><Email fontSize="small" /> dbnigltd.com@yahoo.com</a>
                            <a href="tel:+2347111111181" className="hover:text-white  text-sm md:text-base"><Call fontSize="small" /> 07111111181</a >
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    )
}

export default Footer;