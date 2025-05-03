import { useEffect } from "react";
import { PushPinSharp } from "@mui/icons-material";
import ContactPhone from "../components/ContactPhone";


const ContactPage = () => {

    
    const options = {
        threshold: 0.1
    }
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("animate_show", entry.isIntersecting)
            if (entry.isIntersecting) animateObserver.unobserve(entry.target);
        })
    }, options)

    useEffect(() => {
        document.querySelectorAll(".animate").forEach((element) => {
            animateObserver.observe(element)
        })
    }, [])

    return (
        <>
            <section className="bgContactPageHeaderImg bg-black bg-cover flex items-center justify-center text-center overflow-x-hidden md:h-dvh py-10">
                <div className="py-20 text-white text-xl flex items-center justify-center flex-wrap gap-12 md:gap-0 md:flex-nowrap">
                    <div className="animate animate_left min-w-60 md:text-right md:h-96">
                        <div className="bg-black/70 p-2.5 rounded-2xl rotate-6 relative">
                            <p><span className="font-bold">Phone:</span> 07111111181</p>
                            <p><span className="font-bold">email:</span> dbnigltd.com@yahoo.com</p>
                            <p><span className="font-bold">Address:</span> </p>
                            <PushPinSharp className="text-red-700 absolute -top-6 -left-5 -rotate-45" sx={{ fontSize: 50 }} />
                        </div>
                    </div>
                    <ContactPhone />
                    <div className="animate animate_right min-w-56 md:text-left md:h-96 md:flex md:items-end">
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