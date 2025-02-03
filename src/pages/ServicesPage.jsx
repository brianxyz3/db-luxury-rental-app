import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { firstServiceColumn, secondServiceColumn, servicePageImages } from "../pageData";
import "../stylesheets/carousel.css"

const ServicesPage = () => {
    return (
        <>
            <h1 className="text-5xl text-center mt-20 mb-10">Our Services</h1>
            <Header bgImg="bg-servicePageHeaderImg bg-center h-2/5 md:h-1/2 lg:h-2/3">
                <div className="w-4/5 md:w-3/4 text-xl text-[rgb(1,50,250)] text_shadow md:text-3xl lg:text-5xl font-bold mx-auto">
                    <h2 className="text-lg md:text-3xl lg:text-5xl">Your Journey to Exceptional Begins Here</h2>
                    {/* Drive Your Dream, Anywhere, Anytime. */}
                    <p className="text-xs md:text-base lg:text-lg xl:text-xl mt-5 landscape:mt-2 md:landscape:mt-8">Experience the ease of booking premium vehicles. Browse, book, and hit the road in style. Whether it’s a business trip, a special event, or a weekend getaway, we make luxury travel effortless and affordable.</p>
                </div>
            </Header>
            <main className="mt-20">
                <section className="flex justify-evenly items-center flex-wrap flex-grow md:items-start md:flex-nowrap gap-4 md:gap-0">
                    <div className="md:w-[27%] w-3/4 flex flex-col gap-3">
                        {firstServiceColumn.map((card, idx) => (
                            <Card key={idx} style="bg-white shadow-lg h-56 md:h-72 lg:h-56 duration-200 hover:-translate-y-2" title={card.title} description={card.description} />
                        ))
                        }
                    </div>

                    <Carousel>
                        {
                            servicePageImages.map((image, idx) => (
                                <img key={idx} id={`image${idx}`} src={image.src} alt={image.altText} />
                            ))
                        }
                        <div className="carousel_nav">
                            {servicePageImages.map((image, idx) => (
                                <a href={`#image${idx}`} key={idx} className="hidden lg:block"></a>
                            ))}
                        </div>
                    </Carousel>

                    <div className="md:w-[27%] w-3/4 flex flex-col gap-3">
                        {secondServiceColumn.map((card, idx) => (
                            <Card key={idx + 4} style="bg-white shadow-lg h-56 md:h-72 lg:h-56 duration-200 hover:-translate-y-2" title={card.title} description={card.description} />
                        ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export default ServicesPage;