import circle from '../assets/images/circle.png';
import girls from '../assets/images/banner_image_girl.png';
import girl_reverse from '../assets/images/girl_reverse.png';
export default function Banner() {
    return (
        <div className="Banner flex flex-col lg:flex-row mt-[60px] max-w-[1536px] mx-auto px-5 ">
            <div className="flex-1">
                <h2 className="text-[24px] md:text-[36px] xl:text-[48px] font-bold  lg:text-left">
                    Свежее дыхание в корпоративной жизни
                </h2>
                <p className="mt-[10px] mb-[30px] md:mb-[60px]  lg:text-left">
                    Ми вдосконалили процес замовлення продукції для того, щоб Ви і Ваша компанія сконцентрувались на
                    основних задачах і досягали поставлених цілей.
                </p>
                <div className="lg:flex hidden flex-wrap justify-center lg:justify-start items-center gap-4">
                    <div className="w-full text-center flex flex-col justify-center items-center max-w-[150px] font-semibold">
                        <img className="max-w-[80px] md:max-w-[100px]" src={circle} alt="" />
                        <p className="mt-2 text-center text-[18px] md:text-[21px]">Высокое качество ONLY</p>
                    </div>
                    <div className="w-full text-center flex flex-col justify-center items-center max-w-[200px] font-semibold">
                        <img className="max-w-[80px] md:max-w-[100px]" src={circle} alt="" />
                        <p className="mt-2 text-center text-[18px] md:text-[21px]">Поддержка менеджера 24/7</p>
                    </div>
                    <div className="w-full text-center flex flex-col justify-center items-center max-w-[200px] font-semibold">
                        <img className="max-w-[80px] md:max-w-[100px]" src={circle} alt="" />
                        <p className="mt-2 text-center text-[18px] md:text-[21px]">Выполнение заказа в TURBO-режиме</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end md:mt-10 mt-4 lg:mt-0">
                <div className="lg:hidden flex flex-wrap justify-center lg:justify-start items-center gap-4">
                    <div
                        className="w-full text-center flex flex-col justify-center items-center max-w-[150px] font-semibold">
                        <img className="max-w-[80px] md:max-w-[100px]" src={circle} alt=""/>
                        <p className="mt-2 text-center text-[18px] md:text-[21px]">Высокое качество ONLY</p>
                    </div>
                    <div
                        className="w-full text-center flex flex-col justify-center items-center max-w-[200px] font-semibold">
                        <img className="max-w-[80px] md:max-w-[100px]" src={circle} alt=""/>
                        <p className="mt-2 text-center text-[18px] md:text-[21px]">Поддержка менеджера 24/7</p>
                    </div>
                    <div
                        className="w-full text-center flex flex-col justify-center items-center max-w-[200px] font-semibold">
                        <img className="max-w-[80px] md:max-w-[100px]" src={circle} alt=""/>
                        <p className="mt-2 text-center text-[18px] md:text-[21px]">Выполнение заказа в TURBO-режиме</p>
                    </div>
                </div>

                <img className="max-w-[300px] md:max-w-[400px] xl:max-w-full hidden sx:block" src={girls} alt=""/>
                <img className="max-w-[300px] md:max-w-[400px] xl:max-w-full block sx:hidden" src={girl_reverse} alt=""/>
            </div>

        </div>
    );
}
