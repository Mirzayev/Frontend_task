import bg from '../../../assets/images/seam_bg.png';
import sweater from '../../../assets/images/sweater.png';
import { Button } from "antd";

export default function Banner() {
    return (
        <div className="relative">
            <div className="absolute z-[-10] top-0 w-full hidden lg:block ">
                <img className="w-full h-full max-h-[700px] object-cover" src={bg} alt="background" />
            </div>
            <div className="relative z-20 px-5 flex flex-col-reverse bg-back-gradient lg:bg-white lg:flex-row">
                <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
                    <h4 className="text-[32px] lg:text-[48px] font-bold">Худи классическое</h4>
                    <p className="my-4 max-w-[400px] text-base lg:text-lg">
                        Стоимость производства брендированной продукции на заказ расчитывается индивидуально. Цена зависит от сложности работы, брендирования, материалов, тиража и срочности.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <p className="text-[16px] lg:text-[18px] font-semibold">Худи оверсайз</p>
                        <p className="text-[16px] lg:text-[18px] font-semibold">Худи на замке</p>
                        <div>
                            <p className="text-[16px] lg:text-[18px] font-semibold">Размер</p>
                            <div className="flex items-center gap-2 text-slate-500">
                                <p className="text-black font-semibold">XS</p>
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                                <p>XL</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <i className="fa-solid fa-ruler"></i>
                                <Button className="py-1 border-none bg-transparent border-b-2 border-black">Подобрать размер</Button>
                            </div>
                        </div>
                    </div>
                    <Button className="bg-[#3C336C] rounded-full px-8  h-full max-h-[40px] text-white mt-4">Заказать просчет</Button>
                </div>

                <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <img className="w-full max-w-[300px] lg:max-w-full" src={sweater} alt="sweater" />
                </div>
            </div>
        </div>
    );
}
