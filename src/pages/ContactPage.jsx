import { Battery20Outlined, PushPinSharp, Wifi } from "@mui/icons-material";
import { FacebookOutlined, Instagram, Twitter, WhatsApp } from "@mui/icons-material";

import "../stylesheets/phoneStyle.css";

const ContactPage = () => {
    const time = Date().split(" ");


    return (
        <>
            <section className="bg-contactPageHeaderImg bg-cover flex items-center justify-center text-center mt-20 overflow-x-hidden md:h-dvh">
                <div className="py-20 text-white text-xl flex items-center justify-center flex-wrap gap-12 md:gap-0 md:flex-nowrap">
                    <div className="min-w-60 md:text-right md:h-96">
                        <div className="bg-black/70 p-2.5 rounded-2xl rotate-6 relative">
                            <p><span className="font-bold">Phone:</span> 07111111181</p>
                            <p><span className="font-bold">email:</span> dbnigltd.com@yahoo.com</p>
                            <p><span className="font-bold">Address:</span> </p>
                            <PushPinSharp className="text-red-700 absolute -top-6 -left-5 -rotate-45" sx={{ fontSize: 50 }} />
                        </div>
                    </div>
                    <div className="phone h-[26rem] w-56 border-[0.2rem] rounded-[2rem] rotate-6">
                        <div className="bg-gradient-to-b from-slate-700 to-slate-900 size-full border-[0.35rem] border-t-[0.5rem] rounded-[1.8rem] border-black">
                            <div className="relative phone_screen size-full border-x border-b rounded-[1.4rem] border-gray-400">
                                <div className="flex justify-around items-center px-2">
                                    <div className="text-xs text-center w-1/6 flex flex-nowrap gap-1">
                                        <p>{time[0]}</p>
                                        <p>{time[1]}</p>
                                    </div>
                                    <div className="notch w-1/2 pt-1">
                                        <div className="screen_dynamic_island h-0.5 w-1/3 mx-auto rounded-lg bg-slate-800"></div>
                                    </div>
                                    <Wifi sx={{ fontSize: 15 }} />
                                    <Battery20Outlined sx={{ fontSize: 15 }} className="rotate-90 ms-1" />
                                </div>
                                <div className="main_screen flex flex-wrap items-end relative w-full">
                                    <iframe className="z-1 top-2 rounded-xl absolute w-full h-2/3" src=" https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3971.2357566091378!2d5.7393139734977705!3d5.532005333893614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzEnNTUuMiJOIDXCsDQ0JzMwLjgiRQ!5e0!3m2!1sen!2sng!4v1738581954759!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe >
                                    <div className="flex text-indigo-200 w-full mt-72 justify-evenly">
                                        <a href="" target="_blank" rel="noopener" className="hover:-translate-y-2 hover:text-white"><Twitter fontSize="large" /></a>
                                        <a href="https://www.instagram.com/dbcarhire/?hl=en" target="_blank" rel="noopener" className="hover:-translate-y-2 hover:text-white"><Instagram fontSize="large" /></a>
                                        <a href="" target="_blank" rel="noopener" className="hover:-translate-y-2 hover:text-white"><FacebookOutlined fontSize="large" /></a>
                                        <a href="" target="_blank" rel="noopener" className="hover:-translate-y-2 hover:text-white"><WhatsApp fontSize="large" /></a>
                                    </div>
                                    <div className="h-1 w-2/5 mx-auto bg-black rounded-lg "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-56 md:text-left md:h-96 md:flex md:items-end">
                        <div className="bg-black/70 w-fit ms-auto p-3 rounded-2xl -rotate-6">
                            <h3 className="text-2xl font-semibold">Office Hours</h3>
                            <p>Mon-Fri: 8:00-18:00</p>
                            <p>Saturday: 8:00-16:00</p>
                            <p>Sunday: Closed</p>
                            <PushPinSharp className="text-red-700 absolute -top-6 -right-2 rotate-45" sx={{ fontSize: 50 }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage;