import bgFooter from '../assets/images/footer_bg.png';
import logo from '../assets/images/logo.png';

export default function Footer() {
    return (
        <div className="footer relative mt-20">
            <div className="absolute z-10 h-full w-full">
                <img className="h-full w-full object-cover" src={bgFooter} alt="Footer Background" />
            </div>

            <div className="relative z-20 pt-20 px-5 flex flex-col lg:flex-row justify-between gap-10 lg:gap-4">
                <div className="flex flex-col items-start max-w-[400px]">
                    <img className="max-w-full" src={logo} alt="Logo" />
                    <p className="text-slate-600 my-1 mt-5">Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание свежее</p>
                    <p className="text-slate-700 my-1">+380 630 130 103</p>
                    <p className="text-slate-700 my-1">mirzayevt23@gmail.com</p>
                    <div className="flex items-center text-xl gap-3 my-4">
                        <i className="fa-brands fa-facebook text-blue-600 cursor-pointer hover:text-blue-800 transition-all"></i>
                        <i className="fa-brands fa-instagram text-red-500 cursor-pointer hover:text-red-700 transition-all"></i>
                        <i className="fa-brands fa-linkedin text-blue-800 cursor-pointer hover:text-blue-900 transition-all"></i>
                    </div>
                </div>

                <div className="flex flex-col items-start max-w-[300px] lg:max-w-[400px]">
                    <h4 className="font-semibold text-lg mb-2">Категории</h4>
                    <p className="text-slate-500 cursor-pointer hover:text-slate-700 transition-all my-1">Пошив</p>
                    <p className="text-slate-500 cursor-pointer hover:text-slate-700 transition-all my-1">Все товары</p>
                    <p className="text-slate-500 cursor-pointer hover:text-slate-700 transition-all my-1">Наборы</p>
                    <p className="text-slate-500 cursor-pointer hover:text-slate-700 transition-all my-1">Производство</p>
                </div>

                <div className="flex flex-col items-start max-w-[300px] lg:max-w-[400px]">
                    <h4 className="font-semibold text-lg mb-2">Информация</h4>
                    <p className="text-slate-500 cursor-pointer hover:text-slate-700 transition-all my-1">О нас</p>
                    <p className="text-slate-500 cursor-pointer hover:text-slate-700 transition-all my-1">ЧаВо</p>
                    <p className="text-slate-500 cursor-pointer hover:text-slate-700 transition-all my-1">Контакты</p>
                </div>

                <div className="flex flex-col items-start max-w-[300px] lg:max-w-[400px]">
                    <h4 className="font-semibold text-lg mb-2">Связаться с менеджером</h4>
                    <p className="my-2 text-slate-500">Есть вопрос на который не нашли ответ? Оставьте контакт и наш менеджер свяжется с вами</p>
                    <div className="flex items-center text-xl max-w-full border-blue-800 border px-1 rounded-lg py-1 placeholder:text-[10px]">
                        <input type="text" placeholder="Номер телефона" className="w-full h-full outline-none bg-transparent" />
                        <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-all">
                            <i className="fa-solid fa-arrow-right text-sm text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
