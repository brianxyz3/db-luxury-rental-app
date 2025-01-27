import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import "../stylesheets/carousel.css"

const ServicesPage = () => {
    const firstCardColumn = [
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
            description: "Create your dream driving experience with our personalized services. Whether you need a specific vehicle or unique arrangements, our team will make it happen.",
        },
    ];

    const secondCardColumn = [
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
            src: "../src/assets/images/heroImg.jpg",
            altText: ""
        },
        {
            src: "../src/assets/images/altHeroImg.jpg",
            altText: ""
        },
        {
            src: "../src/assets/images/chauffeurImg.jpg",
            altText: ""
        },
        {
            src: "../src/assets/images/featuresImg1.jpg",
            altText: ""
        },
    ];

    return (
        <>
            <h1 className="text-5xl text-center mt-20 mb-10">Our Services</h1>
            <Header bgImg="bg-servicePageHeaderImg bg-center h-2/5 md:h-1/2 lg:h-2/3">
                <div className="w-4/5 md:w-3/4 text-xl text-[rgb(1,50,250)] text_shadow md:text-3xl lg:text-5xl font-bold mx-auto">
                    <h2 className="text-lg md:text-3xl lg:text-5xl">Your Journey to Exceptional Begins Here</h2>
                    {/* Drive Your Dream, Anywhere, Anytime. */}
                    <p className="text-xs md:text-base lg:text-lg xl:text-xl mt-6">Experience the ease of booking premium vehicles. Browse, book, and hit the road in style. Whether it’s a business trip, a special event, or a weekend getaway, we make luxury travel effortless and affordable.</p>
                </div>
            </Header>
            <main className="mt-20">
                <section className="flex justify-evenly items-center flex-wrap flex-grow md:items-start md:flex-nowrap gap-4 md:gap-0">
                    <div className="md:w-[27%] w-4/5 flex flex-col gap-5">
                        {firstCardColumn.map((card, idx) => (
                            <Card key={idx} style="bg-white shadow-lg h-72 lg:h-56 duration-200 hover:-translate-y-2" title={card.title} description={card.description} />
                        ))
                        }
                    </div>

                    <Carousel>
                        {
                            images.map((image, idx) => (
                                <img key={idx} src={image.src} alt={image.altText} />
                            ))
                        }
                    </Carousel>

                    <div className="md:w-[27%] w-4/5 flex flex-col gap-5">
                        {secondCardColumn.map((card, idx) => (
                            <Card key={idx + 4} style="bg-white shadow-lg h-72 lg:h-56 duration-200 hover:-translate-y-2" title={card.title} description={card.description} />
                        ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export default ServicesPage;