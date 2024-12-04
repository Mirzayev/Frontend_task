import bags from '../assets/images/bags.png';

export default function Navbar() {
    return (
        <div className="navbar mt-[45px] relative">
            {/* Image Background */}
            <div className="absolute inset-0 z-0  ">
                <img
                    className="w-full h-full object-cover opacity-[1000]"
                    src={bags}
                    alt="bags"
                />
            </div>

            {/* Navbar Content */}
            <div
                className="relative z-10 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md flex items-center h-[100px] w-full px-3 max-w-[1536px] mx-auto rounded-lg shadow-md"
            >
                {/* Left Menu Items */}
                <div className="flex items-center gap-6 h-full">
                    <p className="hover:bg-black h-full flex items-center hover:text-white px-6 rounded-[6px] transition-all font-semibold cursor-pointer">
                        Наборы
                    </p>
                    <p className="hover:bg-black h-full flex items-center hover:text-white px-6 rounded-[6px] transition-all font-semibold cursor-pointer">
                        Все товары
                    </p>
                    <p className="hover:bg-black h-full flex items-center hover:text-white px-6 rounded-[6px] transition-all font-semibold cursor-pointer">
                        Пошив
                    </p>
                    <p className="hover:bg-black h-full flex items-center hover:text-white px-6 rounded-[6px] transition-all font-semibold cursor-pointer">
                        Производство
                    </p>
                    <p className="hover:bg-black h-full flex items-center hover:text-white px-6 rounded-[6px] transition-all font-semibold cursor-pointer">
                        Информация
                    </p>
                </div>

                {/* Right Side Content */}
                <div className="flex items-center h-full ml-auto">
                    <p className="text-[24px] lg:text-[38px] font-bold text-center whitespace-nowrap">
                        Шопперы со скидкой - 25%
                    </p>
                </div>
            </div>
        </div>
    );
}
