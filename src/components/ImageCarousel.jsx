import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full mx-auto my-8 mb-6">
            <Slider {...settings}>
                <div>
                    <img
                        src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
                        alt="Slide 1"
                        className="w-full h-64 object-contain rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg"
                        alt="Slide 2"
                        className="w-full h-64 object-contain rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech%20heaphone.jpg"
                        alt="Slide 3"
                        className="w-full h-64 object-contain rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default ImageCarousel;
