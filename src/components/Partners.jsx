import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import atles from '../assets/images/atlas_logo.png';
import Coca_Cola from '../assets/images/Coca-Cola_logo.png';
import crazybox from '../assets/images/crazybox_logo.png';
// import Megogo from '../assets/images/Megogo_logo.png '
import Nike from '../assets/images/Nike_logo.png';

export default function Partners() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768, // Telefon uchun max-width 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} bg-gray-300 rounded-full p-2`}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} bg-gray-300 rounded-full p-2`}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="mt-10 px-5">
            <div className={"sm:my-10"}>
                <h3 className={"font-bold text-[32px] mb-5"}>С нами соотрудничают</h3>
            </div>

            <Slider {...settings}>
                <div className="flex justify-center gap-5">
                    <img  src={atles} alt="Atlas Logo" className="h-16 object-contain w-24 sm:w-auto" />
                </div>
                <div className="flex justify-center">
                    <img  src={Coca_Cola} alt="Coca Cola Logo" className="h-16 object-contain w-24 sm:w-auto" />
                </div>
                <div className="flex justify-center">
                    <img  src={crazybox} alt="Crazybox Logo" className="h-16 object-contain w-24 sm:w-auto" />
                </div>
                {/* <div className="flex justify-center">
                    <img src={Megogo} alt="Megogo Logo" className="h-16 object-contain" />
                </div> */}
                <div className="flex justify-center">
                    <img  src={Nike} alt="Nike Logo" className="h-16 object-contain w-24 sm:w-auto" />
                </div>
            </Slider>
        </div>
    );
}
