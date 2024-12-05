import product from '../../../assets/images/boy.jpg'
import { useState } from 'react';

export default function AboutProduct() {
    const [active, setActive] = useState(null);

    const toggleSection = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <div className="bg-white py-20 px-5 lg:px-20">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-2/3 pr-0 lg:pr-8">
                    <h4 className="text-[36px] lg:text-[48px] font-bold text-indigo-900 mb-8">Материал</h4>
                    <p className="text-base lg:text-lg text-slate-700 mb-8">
                        Вы можете заказать у нас пошив толстовок из любых видов материалов:
                        <ul className="list-disc ml-8">
                            <li>Хлопок 100%</li>
                            <li>Хлопок/полиэстер 85/15%</li>
                            <li>Флис</li>
                        </ul>
                    </p>

                    <h4 className="text-[36px] lg:text-[48px] font-bold text-indigo-900 mb-8">Как заказать</h4>
                    <p className="text-base lg:text-lg text-slate-700 mb-8">
                        Выберите из готовых моделей или отправьте нам свой дизайн для пошива.
                    </p>

                    <h4 className="text-[36px] lg:text-[48px] font-bold text-indigo-900 mb-8">Виды нанесения</h4>
                    <p className="text-base lg:text-lg text-slate-700 mb-8">
                        Вы можете заказать у нас пошив толстовок из любых видов материалов:
                        <ul className="list-disc ml-8">
                            <li>Шелкография</li>
                            <li>Вышивка</li>
                            <li>Вышивка-печать</li>
                            <li>Флекс</li>
                        </ul>
                    </p>

                    <h4 className="text-[36px] lg:text-[48px] font-bold text-indigo-900 mb-8">Уход за товаром</h4>
                    <p className="text-base lg:text-lg text-slate-700 mb-8">
                        Не рекомендуется использовать моющие средства и стирку в стиральной машине с отбеливателями и хлором.
                        <br />
                        Перед стиркой и стиркой необходимо внимательно выверить все наклейки и ярлыки.
                        <br />
                        Стирка и проглаживание при не выше 30°С без включения режима сушки.
                    </p>
                </div>

                <div className="w-full lg:w-1/3 mt-8 lg:mt-0 flex justify-center">
                    <img className="max-w-full h-auto object-cover" src={product} alt="example" />
                </div>
            </div>
        </div>
    );
}
