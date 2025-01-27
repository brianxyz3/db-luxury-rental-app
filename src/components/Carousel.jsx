import { useRef } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";

const Carousel = ({ children }) => {
    const carousel = useRef();

    const prevClick = () => {
        setTimeout(() => {
            carousel.current.scrollLeft += -carousel.current.clientWidth;
        })
    };

    const nextClick = () => {
        setTimeout(() => {
            carousel.current.scrollLeft += carousel.current.clientWidth;
        })
    };

    const size = { "--WIDTH": "270px", "--HEIGHT": "270px" };


    return (
        <div className="wrapper bg-blue-300 md:sticky top-24" style={size}>
            <div className="relative">
                <div className="carousel_btn -left-6 cursor-pointer" onClick={prevClick}>
                    <ArrowCircleLeft />
                </div>
                <div className="carousel" ref={carousel} >
                    {children}
                </div>
                <div className="carousel_btn -right-6 cursor-pointer" onClick={nextClick}>
                    <ArrowCircleRight />
                </div>
            </div>
        </div>)
}

export default Carousel;