import Switer from '../assets/images/sweaters_white.png';
import circle from '../assets/images/circle_2.png';
import bag from '../assets/images/bags_3.png';
import product1 from '../assets/images/products.png';
import drink from '../assets/images/drink.png';

export default function PlaceOrder() {
    const product = [
        { id: 1, img: bag },
        { id: 2, img: drink },
        { id: 3, img: product1 },
        { id: 4, img: drink },
    ];

    return (
        <div className={"bg-white relative max-w-[1536px] mx-auto px-5 pt-8 flex flex-col lg:flex-row w-full items-center gap-10"}>
            <img
                className={"absolute top-8 left-[-40px] z-10 hidden sm:block"}
                src={circle}
                alt=""
            />
            <div className={'z-20 mt-10 lg:mt-20 w-full lg:w-1/2 flex justify-center lg:justify-start'}>
                <img className={"w-[80%] lg:w-[270%]"} src={Switer} alt="" />
            </div>
            <div className={"max-w-[826px] w-full lg:w-1/2 text-center lg:text-left"}>
                <h4 className={"text-[20px] lg:text-[30px] font-semibold"}>
                    Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду, аксессуры, вкусности и другое под заказ.
                </h4>
                <p className={"mt-6 lg:mt-[30px] mb-10 text-sm lg:text-base"}>
                    Благодаря личному производству мы изготавливаем большие партии в короткие сроки, а так же у Вас всегда есть возможность кастомизировать изделия.
                </p>
                <div className={"flex flex-wrap justify-center lg:justify-start gap-4 items-center"}>
                    {product.map((e, index) => (
                        <div
                            className={"flex rounded-full items-center justify-center bg-gray-100 p-2 w-16 h-16 lg:w-20 lg:h-20"}
                            key={index}
                        >
                            <img src={e.img} alt="" className={"object-cover w-full h-full rounded-full"} />
                        </div>
                    ))}
                    <div className={"flex items-center justify-center ml-4 text-slate-500 text-sm lg:text-base"}>
                        <i className={"fa-solid fa-chevron-left cursor-pointer px-2"}></i>
                        <p>1/7</p>
                        <i className={"fa-solid fa-chevron-right cursor-pointer px-2"}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}