import { Battery20Outlined, Wifi, FacebookOutlined, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import "../stylesheets/phoneStyle.css";

const ContactPhone = () => {
    const time = Date().split(" ");

    return (
        <div className="phone h-[26rem] w-56 border-[0.2rem] rounded-[2rem] rotate-6">
            <div className="bg-gradient-to-b from-slate-700 to-slate-900 size-full border-[0.35rem] border-t-[0.5rem] rounded-[1.8rem] border-black">
                <div className="relative phone_screen size-full border-x border-b rounded-[1.4rem] border-gray-400">
                    <div className="flex justify-around items-center px-2">
                        <div className="text-[0.6rem] text-center w-1/6 flex flex-nowrap gap-1">
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
                            <a href="" target="_blank" rel="noopener" className="hover:-translate-y-2 hover:text-white duration-300"><Twitter fontSize="large" /></a>
                            <a href="https://www.instagram.com/dbcarhire/?hl=en" target="_blank" rel="noopener" className="hover:-translate-y-2 hover:text-white duration-300"><Instagram fontSize="large" /></a>
                            <a href="" target="_blank" rel="noopener" className="hover:-translate-y-2 hover:text-white duration-300"><FacebookOutlined fontSize="large" /></a>
                            <a href="" target="_blank" rel="noopener" className="hover:-translate-y-2 hover:text-white duration-300"><WhatsApp fontSize="large" /></a>
                        </div>
                        <div className="h-1 w-2/5 mx-auto bg-black rounded-lg "></div>
                    </div>
                </div>
            </div>
        </div>)
}

export default ContactPhone;