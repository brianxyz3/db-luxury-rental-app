import "../stylesheets/carousel.css";

const Banner = () => {
    const carouselItems = [
        {
            src: "../src/assets/images/bentleyLogoImg.svg",
            position: 1,
        },
        {
            src: "../src/assets/images/rollsRoyceLogoImg.svg",
            position: 2,
        },
        {
            src: "../src/assets/images/toyotaLogoImg.svg",
            position: 3,
        },
        {
            src: "../src/assets/images/mercedesLogoImg.svg",
            position: 4,
        },
        {
            src: "../src/assets/images/hiluxLogoImg.svg",
            position: 5,
        },
        {
            src: "../src/assets/images/lexusLogoImg.svg",
            position: 6,
        },
        {
            src: "../src/assets/images/rangeRoverLogoImg.svg",
            position: 7,
        },
    ]

    return (
        <section className="relative bg-black/50 px-6  mb-12 border-y-2 border-blue-950 shadow-xl font-mono font-bold flex flex-wrap justify-center items-start sm:justify-between sm:flex-nowrap sm:text-xl">
            <div className="order-1 -mt-0.5">
                Ride Luxury
            </div>
            <div className="bg-white order-2 w-full sm:order-3 sm:w-2/3 slider" style={{ "--WIDTH": "100px", "--HEIGHT": "62px" }} data-animated="true">
                <div className="slider_list text-blue-700 font-bold text-3xl">
                    {
                        carouselItems.map((item, idx) => (
                            <img key={idx} src={item.src} style={{ "--POSITION": item.position }} className="slider_item" />
                        ))
                    }
                </div>
            </div>
            <div className="order-3 sm:order-2 sm:absolute sm:bottom-0.5">Experience Freedom</div>
        </section>
    )
}


export default Banner;



// {
//     carouselItems.map((item, idx) => (
//         <img key={`${idx}-hidden`} aria-hidden="true" src={item} />
//     ))
// }


<section>

    <div className="flex flex-wrap ">
    </div>
</section>
