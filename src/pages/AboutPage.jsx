import Card from "../components/Card";
import Header from "../components/Header";

const AboutPage = () => {
    return (
        <>
            <h1 className="text-5xl text-center mt-20 mb-10">About Us</h1>
            <Header bgImg="bg-servicePageHeaderImg bg-center h-[60%] md:h-1/2 lg:h-2/3">
                <div className="w-11/12 text-[rgb(1,50,250)] text_shadow md:text-3xl lg:text-5xl font-bold mx-auto">
                    {/* Drive Your Dream, Anywhere, Anytime. */}
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl">About DB Car Hire, Your Trusted Partner in Luxury Car Rentals and Travel Planning. DB Car Hire is a premier car rental service specializing in providing exceptional vehicles and personalized experiences. Our team of dedicated professionals is committed to delivering seamless, reliable, and luxurious transportation solutions for every occasion. We pride ourselves on offering a carefully curated fleet of premium cars, seamless booking technology, and outstanding customer service. You need a car for business travel, special events, or leisure, we have the expertise, resources, and commitment to ensure your journey is as smooth and enjoyable as possible. Let us redefine the way you travel.</p>
                </div>
            </Header>
            <main className="mt-24">
                <section className="flex justify-evenly items-center flex-col flex-grow md:items-start md:flex-row gap-4 md:gap-0">
                    <div className="order-2 md:order-1 md:w-[35%] w-80 flex flex-col gap-2 px-4">
                        <Card
                            title="Experience the Pinnacle of Luxury on the Road"
                            description="Welcome to DB Car Hire, where sophistication meets the open road. We specialize in delivering unparalleled driving experiences through our exclusive collection of luxury vehicles. Whether you’re looking to make a grand entrance, elevate your travels, or turn an ordinary day into an extraordinary adventure, our premium fleet is at your service."
                        />
                        <Card
                            title="Our Fleet"
                            description="Are you looking for the elegance of a sleek sports car, the power of a luxury SUV, or the refined sophistication of a high-end sedan, our curated fleet includes the latest models from the world’s most prestigious brands, such as Rolls Royce, Porsche, Bentley, Mercedes Benz, Range Rover amongst others. Each vehicle is meticulously maintained, ensuring you enjoy a flawless driving experience every time you hit the road." />
                        <Card
                            title="Perfect for Every Occasion"
                            description="Whether you’re attending a high-profile event, planning a weekend getaway, or simply treating yourself to an unforgettable ride, our luxury car rentals are perfect for any occasion. Experience the prestige of driving a vehicle that reflects your success and style." />
                        <Card
                            title="Unmatched Comfort"
                            description="Step into a world of sophistication, with plush interiors, cutting-edge technology, and bespoke features designed to make every drive unforgettable." />
                    </div>

                    <div className="order-1 md:order-2 w-3/5 bg-gradient-to-b from-black to-slate-800 text-white rounded-xl py-14 flex flex-col items-center md:w-[27%] md:sticky top-24">
                        <div className="tracking-widest">
                            <h1 className="text-4xl font-semibold md:text-5xl mb-4">
                                ABOUT
                            </h1>
                            <div className="text-xs">
                                <p><span className="text-[rgb(1,50,250)]">R</span>eliable</p>
                                <p><span className="text-[rgb(1,50,250)]">I</span>nnovative</p>
                                <p><span className="text-[rgb(1,50,250)]">D</span>ynamic</p>
                                <p><span className="text-[rgb(1,50,250)]">E</span>fficient</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-3 md:order-3 md:w-[35%] w-80 flex flex-col gap-2 md:text-right  px-4">
                        <Card
                            title="Convenience and Flexibility"
                            description="Whether it's a day, a week, or longer, we accommodate your schedule with flexible rental terms and easy booking options."
                        />
                        <Card
                            title="Tailored to You"
                            description="At DB Car Hire, we understand that luxury is in the details. That's why we offer a personalized service to cater to your specific needs. From choosing the perfect car to arranging premium concierge services, we go above and beyond to ensure your experience is seamless, memorable, and luxurious from start to finish."
                        />
                        <Card
                            description="Luxury is more than a destination—it’s the way you travel. We’re committed to delivering a first-class experience from start to finish. Explore our fleet and reserve your dream car today."
                        />
                        <Card
                            title="Book Your Luxury Drive Today"
                            description="Your journey to exceptional begins here. Explore our fleet, select your dream car, and reserve it in just a few clicks. At DB Car Hire, we redefine what it means to drive in style."
                        />

                    </div>
                </section>
                <section className="text-center py-20 w-11/12 border-b border-gray-700 mx-auto lg:w-5/6">
                    <div className="w-11/12 mx-auto lg:w-5/6">
                        <h2 className="text-3xl mb-3">Our Advantages</h2>
                        <p>We do our business in fast-changing environment and we are always on the edge as we strive to deliver the best products and services to our customers. We fight for the perfect performance and value every client and their requests.</p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-5 md:flex-nowrap">
                        <div>
                            <h3 className="text-2xl text-[rgb(1,50,250)]">10</h3>
                            <h4 className="text-xl">Business Partners</h4>
                            <p className="text-gray-800">Collaboration with other businesses is essential, and we have many proven partners.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl text-[rgb(1,50,250)]">42</h3>
                            <h4 className="text-xl">Our Fleet</h4>
                            <p className="text-gray-800">We provide a long rolladex of cars to  choose from, as we believe variety is the spice of life.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl text-[rgb(1,50,250)]">100+</h3>
                            <h4 className="text-xl">Happy Customers</h4>
                            <p className="text-gray-800">We provide our customers with exquisite round-the-clock support and meet all their needs.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AboutPage;