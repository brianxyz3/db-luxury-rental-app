import "../stylesheets/banner.css";

const Banner = () => {
    const carouselItems = [
        {
            src: "../src/assets/images/bentleyLogoImg.svg",
            altText: "image of bentley logo",
            position: 1,
        },
        {
            src: "../src/assets/images/rollsRoyceLogoImg.svg",
            altText: "image of rolls royce logo", 
            position: 2,
        },
        {
            src: "../src/assets/images/toyotaLogoImg.svg",
            altText: "image of toyota logo", 
            position: 3,
        },
        {
            src: "../src/assets/images/mercedesLogoImg.svg",
            altText: "image of mercedes logo", 
            position: 4,
        },
        {
            src: "../src/assets/images/hiluxLogoImg.svg",
            altText: "image of hilux logo", 
            position: 5,
        },
        {
            src: "../src/assets/images/lexusLogoImg.svg",
            altText: "image of lexus logo", 
            position: 6,
        },
        {
            src: "../src/assets/images/rangeRoverLogoImg.svg",
            altText: "image of range rover logo", 
            position: 7,
        },
    ];

    const size = { "--WIDTH": "100px", "--HEIGHT": "62px" };


    return (
        <section className="relative bg-black/50 px-6  mb-12 border-y-2 border-blue-950 shadow-xl font-mono font-bold flex flex-wrap justify-center items-start sm:justify-between sm:flex-nowrap sm:text-xl">
            <div className="order-1 -mt-0.5">
                Ride Luxury
            </div>
            <div className="bg-white order-2 w-full sm:order-3 sm:w-2/3 slider" style={size} data-animated="true">
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
