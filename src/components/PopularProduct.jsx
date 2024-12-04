import './wave.css';
import star from '../assets/images/star.png';
import bakal from '../assets/images/glasses.png';
import bags from '../assets/images/bags.png';
import t_shirt from '../assets/images/t-shirt.png';
import termiz from '../assets/images/termiz.png';
import { Button } from 'antd';

export default function PopularProduct() {
    return (
        <div className="PopularProduct bg-[#EEF1F6] pt-[70px] px-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <div className="flex items-center gap-4 px-5">
                        <h3 className="text-[22px] lg:text-[48px] font-semibold text-black">
                            Самое популярное
                        </h3>
                        <img src={star} alt="Star" />
                    </div>
                    <p className="text-gray-600 text-sm lg:text-base mt-2">
                        Товары, которые наиболее часто заказывают наши клиенты
                    </p>
                </div>
                <Button className="bg-[#1FAB8A] text-white rounded-lg px-6 h-full py-3 hover:opacity-90 hidden lg:block ">
                    Все товары
                </Button>
            </div>

            {/* Products Section */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Left Side: Bags Image */}
                <div className="lg:w-[1100px] w-full max-w-full">
                    <img className="w-full rounded-lg shadow-md" src={bags} alt="Bags" />
                </div>

                {/* Right Side: Other Products */}
                <div className="lg:w-[480px] w-full max-w-full flex flex-col gap-4">
                    {/* Top Image: Glasses */}
                    <div className="flex-1">
                        <img className="w-full h-full object-cover rounded-lg shadow-md" src={bakal} alt="Glasses" />
                    </div>

                    {/* Bottom Row: Termiz and T-Shirt */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <img className="w-full h-full object-cover rounded-lg shadow-md" src={termiz} alt="Termiz" />
                        </div>
                        <div className="flex-1">
                            <img className="w-full h-full object-cover rounded-lg shadow-md" src={t_shirt} alt="T-Shirt" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
