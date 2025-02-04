import { Email, Call, FacebookOutlined, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { Link } from "react-router";
import Copyright from "./Copyright";


const Footer = () => {
    return (
        <footer className="bg-black font-mono text-indigo-200 px-6 md:px-8">
            <div className="flex flex-wrap justify-center gap-6 py-6 md:flex-nowrap md:justify-between">
                <div className="w-64 text-xs md:w-72 md:text-sm">
                    <h5 className="text-xl mb-3 md:text-2xl"><span className="p-1 border rounded-md border-blue-900">DB</span> Car Hire</h5>
                    <p>Where driving is not just about getting from point A to point B—it’s about making an impression, experiencing unparalleled comfort. We offer an exclusive collection of high-end vehicles for those who demand nothing less than perfection.</p>
                    <Link to="/about" className="hover:text-white">"Learn More About Us"</Link>
                    <div className="flex gap-4 text-indigo-200 mt-6 justify-center sm:justify-normal">
                        <a href="" target="_blank" rel="noopener" className="hover:text-white"><Twitter fontSize="large" /></a>
                        <a href="https://www.instagram.com/dbcarhire/?hl=en" target="_blank" rel="noopener" className="hover:text-white"><Instagram fontSize="large" /></a>
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
                            <Link to="/contact" className="hover:text-white">Contact Us</Link>
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