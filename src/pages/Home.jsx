import { ArrowCircleRightOutlined } from "@mui/icons-material";
import Banner from "../components/Banner";

const Home = () => {
    return (
        <>
            <header className="bg-headerImg bg-cover bg-right h-svh">
            <section className="w-10/12 text-center mx-auto pt-40">
                    <div className="w-4/5 md:w-3/4 text-xl md:text-3xl lg:text-5xl font-mono font-bold mx-auto">
                    <h1 className="text-nowrap">Experience Luxury</h1>
                    <h2>On The Road</h2>
                        <p className="md:mt-4 mt-4 text-sm md:text-lg lg:text-xl xl:text-2xl font-thin">Discover the perfect blend of elegance and <span className="md:text-nowrap">perfomance in every journey.</span></p>
                </div>
                    <button className="bg-[rgb(14,14,215)] text-sm md:text-lg px-3 py-1 rounded-xl mt-2 text-white font-bold hover:animate-bounce hover:shadow-lg shadow-black">Get Started <ArrowCircleRightOutlined /></button>
            </section>
        </header>
            <Banner />
            <main>

                <section>

                </section>
            </main>
        </>
    )
}

export default Home;