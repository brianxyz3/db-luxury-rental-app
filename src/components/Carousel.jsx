import { useEffect, useRef } from "react";
import { servicePageImages } from "../pageData";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";

const Carousel = ({ children }) => {
    const carousel = useRef();
    const resetCounter = useRef(false);
    const size = { "--WIDTH": "270px", "--HEIGHT": "270px" };

    const nextImg = () => {
        carousel.current.scrollLeft += carousel.current.clientWidth;
    };


    function Timer(func, time) {
        let timerObj = setInterval(func, time);

        this.stop = function () {
            if (timerObj) {
                clearInterval(timerObj);
                timerObj = null;
            }
            return this;
        }

        this.start = function () {
            if (!timerObj) {
                this.stop();
                timerObj = setInterval(func, time);
            }
            return this;
        }

        this.reset = function (newTime = time) {
            time = newTime;
            return this.stop().start();
        }

    }

    useEffect(function () {
        const timer = new Timer(function () {
            if (window.location.pathname === "/services") {
                if (carousel.current.scrollLeft < ((carousel.current.clientWidth * 15) - 2)) {
                    if (resetCounter.current) {
                        resetCounter.current = false;
                        return timer.reset(4000);
                    } else {
                        nextImg();
                    }
                } else {
                    carousel.current.scrollLeft = 0
                }
            } else if (timer) {
                timer.stop();
            }
        }, 4000);

        return () => (timer.stop());
    }, []);

    function nextClick() {
        nextImg();
        resetCounter.current = true;
    }

    function prevClick() {
        carousel.current.scrollLeft += -carousel.current.clientWidth;
        resetCounter.current = true;
    };

    function imgNavLink() {
        resetCounter.current = true;
    }


    return (
        <div className="wrapper bg-blue-300 md:sticky top-24" style={size}>
            <div className="relative">
                <div className="carousel_btn -left-6 cursor-pointer" >
                    <ArrowCircleLeft onClick={prevClick} />
                </div>
                <div className="carousel" ref={carousel} >
                    {children}
                    <div className="carousel_nav">
                        {servicePageImages.map((image, idx) => (
                            <a href={`#image${idx}`} key={idx} className="hidden lg:block" onClick={imgNavLink}></a>
                        ))}
                    </div>
                </div>
                <div className="carousel_btn -right-6 cursor-pointer" >
                    <ArrowCircleRight onClick={nextClick} />
                </div>
            </div>
        </div>)
}

export default Carousel;