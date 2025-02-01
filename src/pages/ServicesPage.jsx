import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import "../stylesheets/carousel.css"

const ServicesPage = () => {
    const firstServiceColumn = [
        {
            title: "Premium Luxury Car Rentals",
            description: "Indulge in first-class travel with our high-end vehicles, designed to elevate every trip. Whether it’s a weekend getaway or a long road trip, enjoy unmatched comfort and luxury.",
        },
        {
            title: "Chauffeur Services",
            description: "Relax and enjoy the journey with our professional chauffeurs, trained to provide safe, discreet, and punctual service tailored to your needs.",
        },
        {
            title: "Sophistication for Business",
            description: "Impress clients, colleagues, or partners with our premium corporate rental options. Ideal for meetings, events, or executive travel, our cars reflect the professionalism you demand.",
        },
        {
            title: "Tailored Luxury, Just for You",
            description: "Create your dream driving experience with our personalized services. Whether you need a specific vehicle like a bulletproof suv or unique arrangements, our team will make it happen.",
        },
    ];

    const secondServiceColumn = [
        {
            title: "Airport Transfers",
            description: "Start or end your journey in style with our premium airport transfer services. Enjoy punctuality, comfort, and exceptional service tailored to your needs.",
        },
        {
            title: "Travel Management",
            description: "Simplify your travel planning with our bespoke travel management services, designed to handle every detail, from car rentals to personalized itineraries.",
        },
        {
            title: "Concierge Services",
            description: "Our dedicated concierge team is here to customize your experience, ensuring every aspect of your rental exceeds expectations. From route planning to special requests, we handle it all.",
        },
        {
            title: "Meet and Greet Services",
            description: "Enjoy a warm welcome upon arrival with our professional meet-and-greet services, ensuring a smooth and effortless transition to your luxury ride.",
        },
    ]

    const images = [
        {
            src: "../src/assets/images/toyotaImg1.jpg",
            altText: "a photo of a black bulletproof suv, toyota land cruiser jeep 2022 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/lexusImg2.jpg",
            altText: "a photo of a black suv, lexus gx 460 2022 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/landcruiserImg2.jpg",
            altText: "a photo of a black suv, toyota prado jeep 2021 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/landcruiserImg3.jpg",
            altText: "a photo of a black suv, toyota prado jeep 2021 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/rollsRoyceImg1.jpg",
            altText: "a photo of a black rolls royce owned by DB car hire",
        },
        {
            src: "../src/assets/images/pradoImg1.jpg",
            altText: "a photo of a black suv, toyota prado jeep 2020 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/landcruiserImg1.jpg",
            altText: "a photo of a black suv, toyota land cruiser 2020 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/toyotaBusImg1.jpg",
            altText: "a photo of a white toyota coaster bus owned by DB car hire",
        },
        {
            src: "../src/assets/images/lexusImg1.jpg",
            altText: "a photo of a white suv, lexus gx 460 2022 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/mercedesImg1.jpg",
            altText: "a photo of a dark blue suv, mercedes benz gle 350 owned by DB car hire",
        },
        {
            src: "../src/assets/images/hiluxImg1.jpg",
            altText: "a photo of a white suv, toyota hilux 2022 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/lexusImg3.jpg",
            altText: "a photo of a black bulletproof suv, lexus lx 600 2022 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/lexusImg4.jpg",
            altText: "a photo of a black suv, lexus sport 2020 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/mercedesImg2.jpg",
            altText: "a photo of a black suv, mercedes benz gle 350 2020 model owned by DB car hire",
        },
        {
            src: "../src/assets/images/rangeRoverImg1.jpg",
            altText: "a photo of a black suv, range rover autobiography owned by DB car hire",
        },
        {
            src: "../src/assets/images/carFleetImg1.jpg",
            altText: "a photo of several luxury black suv from DB car hire's fleet",
        },
    ];

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
                            images.map((image, idx) => (
                                <img key={idx} id={`image${idx}`} src={image.src} alt={image.altText} />
                            ))
                        }
                        <div className="carousel_nav">
                            {images.map((image, idx) => (
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