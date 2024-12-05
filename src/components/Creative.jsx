import creative from '../assets/images/Pangolin.png';
import product from '../assets/images/cart.png';
import { Button } from "antd";

export default function Creative() {
    return (
        <div className="creative bg-white pt-20 max-w-[1536px] ">
            {/* Wrapper div */}
            <div className="bg-[#F5F5F5] flex flex-col lg:flex-row items-center  px-5 py-10 lg:py-0">
                {/* Left Side: Content */}
                <div className="max-w-[958px]  w-full mb-6 lg:mb-0 pt-10">
                    <div className={"lg:w-full w-40 flex justify-center"}><img src={creative} alt="Creative" className="w-full lg:max-w-[300px]"/></div>
                    <h4 className="text-[22px] lg:text-[48px] font-bold my-4">Хотите удивить ваших коллег/партнеров необычными подарками?</h4>
                    <p className="max-w-[470px] mt-5 mb-10 text-sm lg:text-base">Выбирайте готовые подарочные наборы или укажите критерии по которым мы соберем для Вас уникальный бокс.</p>
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <Button className="bg-black text-white xl:py-5 py-2 h-full max-w-[280px] w-full rounded-full">
                            Перейти к наборам
                        </Button>
                        <Button className="bg-[#EEF1F6] xl:py-5 py-2 max-w-[280px] h-full w-full rounded-full text-black">
                            Создать свой
                        </Button>
                    </div>
                </div>

                {/* Right Side: Product Image */}
                <div className="lg:w-[700px] w-full flex justify-center lg:justify-end mr-5 mt-8">
                    <div className={"lg:p-10  bg-back-gradient rotate-[10deg] rounded-xl"}><img src={product} alt="Product" className="w-full max-w-[300px] lg:max-w-full rotate-[-10deg]"/></div>
                </div>
            </div>
        </div>
    );
}
