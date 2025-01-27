import { ArrowCircleRightOutlined } from "@mui/icons-material";
import Banner from "../components/Banner";
import FeaturesCard from "../components/FeaturesCard";
import AboutUs from "../components/AboutUs";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header bgImg="bg-homePageHeaderImg bg-right h-dvh">
                <div className="w-4/5 md:w-3/4 text-xl text-[rgb(14,14,215)] text_shadow md:text-3xl lg:text-5xl font-mono font-bold mx-auto">
                    <h1 className="text-nowrap">Experience Luxury</h1>
                    <h2>On The Road</h2>
                    <p className="md:mt-4 mt-4 text-sm md:text-lg lg:text-xl xl:text-2xl font-thin">Discover the perfect blend of elegance and <span className="md:text-nowrap">perfomance in every journey.</span></p>
                </div>
                <button className="bg-[rgb(14,14,215)] text-sm md:text-lg px-3 py-1 rounded-xl mt-2 text-white font-bold hover:animate-bounce hover:shadow-lg focus:animate-bounce shadow-black">Get Started <ArrowCircleRightOutlined /></button>
            </Header>
            <Banner />
            <main>
                <section className="font-mono flex flex-wrap justify-center gap-8 sm:gap-4 mx-4 sm:mx-8">
                    <div className="w-full flex justify-start">
                        <FeaturesCard
                            img="../src/assets/images/featuresImg1.jpg"
                            description="Choose from our exclusive fleet of world-class luxury vehicles. From sleek sports cars to sophisticated sedans and SUVs, each car is meticulously maintained to provide an unparalleled driving experience for any occasion."
                        >
                            <h3 className="text-2xl px-2 font-bold">Drive the Extraordinary</h3>
                        </FeaturesCard>
                    </div>
                    <div className="w-full flex justify-end">
                        <FeaturesCard
                            img="../src/assets/images/chauffeurImg.jpg"
                            description="Relax and enjoy the journey with our professional chauffeur services. Whether for business meetings, special events, or airport transfers, our experienced drivers ensure a seamless, first-class experience."
                        >
                            <h3 className="text-2xl px-2 font-bold">Luxury in motion, <span className="text-nowrap">Hands-Free</span></h3>
                        </FeaturesCard>
                    </div>
                    <div className="w-full flex justify-start">
                        <FeaturesCard
                            img="../src/assets/images/weddingCarImg2.jpg"
                            description="Make your special day even more magical with a luxurious wedding car. From timeless classics to modern marvels, we've got the right car tailor-made for the occassion. We’ll help you arrive in style."
                        >
                            <h3 className="text-2xl px-2 font-bold">Arrive in Elegance</h3>
                        </FeaturesCard>
                    </div>
                    <div className="w-full flex justify-end">
                        <FeaturesCard
                            img="../src/assets/images/altHeroImg.jpg"
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

export default Home;