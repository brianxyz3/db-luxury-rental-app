import { ArrowCircleRightOutlined } from "@mui/icons-material";
import Banner from "../components/Banner";
import FeaturesCard from "../components/FeaturesCard";
import AboutUs from "../components/AboutUs";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import { chauffeurImg, featuresImg1, heroImg, weddingCarImg2 } from "../assets/images";
import { useEffect } from "react";

const HomePage = () => {    

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
            <Header bgImg="bgHomePageHeaderImg bg-center overflow-x-hidden tracking-wider md:bg-top h-dvh text-[rgb(250,250,215)] font-mono">
                <div className="animate animate_right text-2xl md:text-3xl lg:text-5xl font-bold mx-auto">
                    <h1 className="text-nowrap">Experience Luxury</h1>
                    <h2>On The Road</h2>
                </div>
                <p className="animate animate_left my-8 text-[15px] lg:w-2/3 md:text-lg lg:text-xl xl:text-2xl">Discover the perfect blend of elegance and <span className="md:text-nowrap">perfomance in every drive.</span></p>
                <a href="" target="_blank" rel="noopener" className="animate animate_right bg-black flex items-start gap-1 text-sm md:text-lg px-3 py-1 rounded-xl mt-4 text-[rgb(250,250,215)] font-bold hover:animate-bounce hover:shadow-lg focus:animate-bounce shadow-black">Rent A Ride <ArrowCircleRightOutlined /></a>
            </Header>
            <Banner />
            <main>
                <section className="font-mono flex flex-wrap justify-center gap-8 sm:gap-4 mx-4 sm:mx-8">
                    <div className="w-full animate animate_left flex justify-start">
                        <FeaturesCard
                            img={featuresImg1}
                            imgAltText="a photo of a man's hand on the steering wheel of a mercedes benz"
                            description="Choose from our exclusive fleet of world-class luxury vehicles. From sleek sports cars to sophisticated sedans and SUVs, each car is meticulously maintained to provide an unparalleled driving experience for any occasion."
                        >
                            <h3 className="text-2xl px-2 font-bold">Drive the Extraordinary</h3>
                        </FeaturesCard>
                    </div>
                    <div className="w-full animate animate_right flex justify-end">
                        <FeaturesCard
                            img={chauffeurImg}
                            imgAltText="a photo of an african male dressed in a suit using his mobile phone in the backseat of a luxury vehicle"
                            description="Relax and enjoy the journey with our professional chauffeur services. Whether for business meetings, special events, or airport transfers, our experienced drivers ensure a seamless, first-class experience."
                        >
                            <h3 className="text-2xl px-2 font-bold">Luxury in motion, <span className="text-nowrap">Hands-Free</span></h3>
                        </FeaturesCard>
                    </div>
                    <div className="w-full animate animate_left flex justify-start">
                        <FeaturesCard
                            img={weddingCarImg2}
                            imgAltText="a photo of a white rolls royce parked in front of a building"
                            description="Make your special day even more magical with a luxurious wedding car. From timeless classics to modern marvels, we've got the right car tailor-made for the occassion. We’ll help you arrive in style."
                        >
                            <h3 className="text-2xl px-2 font-bold">Arrive in Elegance</h3>
                        </FeaturesCard>
                    </div>
                    <div className="w-full animate animate_right flex justify-end">
                        <FeaturesCard
                            img={heroImg}
                            imgAltText="a photo of a sports car driving down a long, open country road"
                            description="Enjoy the comfort and prestige of a luxury vehicle on your terms. Our long-term rental options combine flexibility and exclusivity for those who value extended elegance."
                        >
                            <h3 className="text-2xl px-2 font-bold">Luxury for the Long Haul</h3>
                        </FeaturesCard>
                    </div>
                </section>
                <AboutUs />
                <GetStarted />
            </main>
        </>
    )
}

export default HomePage;