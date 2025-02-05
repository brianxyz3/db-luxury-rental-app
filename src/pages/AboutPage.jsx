import Card from "../components/Card";
import Header from "../components/Header";
import { firstAboutColumn, secondAboutColumn } from "../pageData";

const AboutPage = () => {
    return (
        <>
            <h1 className="text-5xl text-center h-1/4 pt-20">About Us</h1>
            <section className="h-2/3 flex items-center">
                <Header bgImg="bg-servicePageHeaderImg bg-center h-[85%] md:h-4/5 lg:h-5/6">
                    <div className="text-[rgb(1,50,250)] text_shadow  mx-auto">
                    {/* Drive Your Dream, Anywhere, Anytime. */}
                        <p className="text-xs font-semibold md:text-base lg:text-lg xl:text-xl">About DB Car Hire, Your Trusted Partner in Luxury Car Rentals and Travel Planning. DB Car Hire is a premier car rental service specializing in providing exceptional vehicles and personalized experiences. Our team of dedicated professionals is committed to delivering seamless, reliable, and luxurious transportation solutions for every occasion. We pride ourselves on offering a carefully curated fleet of premium cars, seamless booking technology, and outstanding customer service. You need a car for business travel, special events, or leisure, we have the expertise, resources, and commitment to ensure your journey is as smooth and enjoyable as possible. Let us redefine the way you travel.</p>
                </div>
            </Header>
            </section>
            <main className="my-20">
                <section className="flex justify-evenly items-center flex-col flex-grow md:items-start md:flex-row gap-4 md:gap-0">
                    <div className="order-2 md:order-1 md:w-[35%] w-80 flex flex-col gap-2 px-4">
                        {firstAboutColumn.map((card, idx) => (
                            <Card key={idx} title={card.title} description={card.description} style="auto_show_left" />
                        ))
                        }
                    </div>

                    <div className="auto_show_center order-1 md:order-2 w-3/5 bg-gradient-to-b from-black to-slate-800 text-white rounded-xl py-14 flex flex-col items-center md:w-[27%] md:sticky top-24">
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
                        {secondAboutColumn.map((card, idx) => (
                            <Card key={idx} title={card.title} description={card.description} style="auto_show_right" />
                        ))
                        }  
                    </div>
                </section>
                <section className="text-center py-20 w-11/12 border-b border-gray-700 mx-auto lg:w-5/6">
                    <div className="auto_show_center w-11/12 mx-auto lg:w-5/6">
                        <h2 className="text-3xl mb-3">Our Advantages</h2>
                        <p>We do our business in fast-changing environment and we are always on the edge as we strive to deliver the best products and services to our customers. We fight for the perfect performance and value every client and their requests.</p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-5 md:flex-nowrap">
                        <div className="auto_show_center">
                            <h3 className="text-2xl text-[rgb(1,50,250)]">10</h3>
                            <h4 className="text-xl">Business Partners</h4>
                            <p className="text-gray-800">Collaboration with other businesses is essential, and we have many proven partners.</p>
                        </div>
                        <div className="auto_show_center">
                            <h3 className="text-2xl text-[rgb(1,50,250)]">42</h3>
                            <h4 className="text-xl">Our Fleet</h4>
                            <p className="text-gray-800">We provide a long rolladex of cars to  choose from, as we believe variety is the spice of life.</p>
                        </div>
                        <div className="auto_show_center">
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