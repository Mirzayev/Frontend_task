import circle from '../assets/images/circle.png'
import girls from '../assets/images/banner_image_girl.png'
export default function Banner() {


    return (
        <div className="Banner flex mt-[60px] max-w-[1536px] mx-auto">
            <div>
                <h2 className="xl:text-[48px] font-bold">Свежее дыхание в корпоративной жизни</h2>
                <p>Ми вдосконалили процес замовлення продукції для того, щоб Ви і Ваша компанія сконцентрувались на
                    основних задачах і досягали поставлених цілей.</p>
                <div className="flex items-center gap-2">
                    <div className=" w-full text-center flex flex-col max-w-[229px]">
                        <img src={circle} alt=""/>
                        <p className="mt-2 text-center flex items-center"> Высокое качество <p className="font-semibold ">ONLY</p></p>
                    </div>
                    <div className=" w-full text-center flex flex-col max-w-[229px]">
                        <img src={circle} alt=""/>
                        <p className="mt-2 text-center flex items-center"> Поддержка менеджера  <p className="font-semibold ">24/7</p></p>
                    </div>
                    <div className="text-center w-full  flex flex-col max-w-[229px]">
                        <img src={circle} alt=""/>
                        <p className="mt-2 text-center flex items-center"> Выполнение заказа
                            в  <p className="font-bold ">TURBO-режиме</p></p>
                    </div>
                </div>
            </div>

            <img src={girls} alt=""/>
        </div>
    )
}