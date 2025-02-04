import { useEffect, useRef } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";

const Carousel = ({ children }) => {
    const carousel = useRef();
    const size = { "--WIDTH": "270px", "--HEIGHT": "270px" };


    const nextImg = () => {
        setTimeout(() => {
            carousel.current.scrollLeft += carousel.current.clientWidth;
        })
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

        // this.reset = function (newTime = time) {
        //     time = newTime;
        //     return this.stop().start();
        // }
    }

    useEffect(function () {
        const timer = new Timer(function () {
            if (window.location.pathname === "/services") {
                if (carousel.current.scrollLeft < ((carousel.current.clientWidth * 15) - 2)) {
                    nextImg();
                } else {
                    carousel.current.scrollLeft = 0
                }
            } else if (timer) {
                timer.stop();
            }
        }, 4500);
    }, []);

    function nextClick() {
        nextImg();
        // timer.reset(4000);
    }

    function prevClick() {
        setTimeout(() => {
            carousel.current.scrollLeft += -carousel.current.clientWidth;
        })
        // timer.reset(4000);
    };


    return (
        <div className="wrapper bg-blue-300 md:sticky top-24" style={size}>
            <div className="relative">
                <div className="carousel_btn -left-6 cursor-pointer" >
                    <ArrowCircleLeft onClick={prevClick} />
                </div>
                <div className="carousel" ref={carousel} >
                    {children}
                </div>
                <div className="carousel_btn -right-6 cursor-pointer" >
                    <ArrowCircleRight onClick={nextClick} />
                </div>
            </div>
        </div>)
}

export default Carousel;