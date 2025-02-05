import { Link } from "react-router";
import AboutCard from "./AboutCard";

const AboutUs = () => {
    return (
        <section className="mt-12 p-4 bg-gradient-to-b from-gray-200 to-white md:p-8">
            <div className="flex justify-between flex-wrap-reverse gap-4">
                <p className="md:w-1/2 auto_show_left">
                    Where sophistication meets the open road. We specialize in delivering unparalleled driving experiences through our exclusive collection of luxury vehicles.
                </p>
                <div className="auto_show_right">
                    <p>About Us</p>
                    <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                </div>
            </div>
            <Link to="/about" className="auto_show_left my-6 cursor-pointer border-b-2 border-transparent duration-200 inline-block hover:border-black hover:font-bold hover:translate-x-1">More About Us</Link>
            <div className="mt-6 flex flex-col gap-3.5 md:flex-row md:flex-wrap justify-center xl:flex-nowrap">
                <AboutCard index="01" title="Premium Fleet" description="A handpicked selection of the finest vehicles. Drive the car of your dreams and leave a lasting impression." />
                <AboutCard index="02" title="Seamless Booking" description="Effortless online booking and flexible rental terms. 24/7 customer support, delivery, and pick-up services." />
                <AboutCard index="03" title="Impeccable Standards" description="Every vehicle is meticulously cleaned, inspected, and ready for the road." />
                <AboutCard index="04" title="Personalized Service" description="Our team is dedicated to tailoring every detail to your needs." />
            </div>
        </section>
    )
}

export default AboutUs;