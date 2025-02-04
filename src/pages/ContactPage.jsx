import { PushPinSharp } from "@mui/icons-material";
import ContactPhone from "../components/ContactPhone";


const ContactPage = () => {

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
                    <ContactPhone />
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