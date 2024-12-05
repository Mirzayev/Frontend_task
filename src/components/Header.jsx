import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Button } from "antd";
import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import PopularProduct from "./PopularProduct.jsx";
import Creative from "./Creative.jsx";
import PlaceOrder from "./PlaceOrder.jsx";
import IdeaMerchandise from "./IdeaMerchandise.jsx";
import Partners from "./Partners.jsx";
import Footer from "./Footer.jsx"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className=" max-w-[1536px] mx-auto">
            <div className={"bg-back-gradient pt-10 relative"}>

            <div className="flex items-center gap-10 justify-between px-4 lg:px-10 xl:px-20 max-w-[1536px] mx-auto">
                {/* Logo */}
                <img className="xl:max-w-[487px] lg:max-w-80 max-w-52" src={logo} alt="logo" />

                {/* Search Bar */}
                <div className="hidden md:flex h-full border-2 border-black items-center rounded-full px-3 py-3 gap-4 3xl:py-5 shadow-md">
                    <i className="fa-solid fa-magnifying-glass text-black 3xl:text-2xl"></i>
                    <input
                        type="text"
                        className="h-full w-full rounded-full bg-transparent outline-none"
                        placeholder="Поиск"
                    />
                </div>

                {/* Contact Button */}
                <div className="flex items-center gap-5">
                    <i
                        className="fa-solid fa-magnifying-glass text-2xl block lg:hidden"
                    ></i>
                    <Button
                        className="py-2 lg:py-3 3xl:py-5 h-full rounded-full px-4 lg:px-10 3xl:px-[62px] bg-[#1FAB8A] text-white hidden lg:block shadow-lg hover:opacity-90"
                    >
                        +380 630 130 103
                    </Button>
                    {/* Menu Icon */}
                    <i
                        className={`fa-solid fa-bars text-2xl block lg:hidden cursor-pointer transition-transform ${
                            isMenuOpen ? "rotate-90" : "rotate-0"
                        }`}
                        onClick={toggleMenu}
                    ></i>
                </div>

                {/* User Icon and Language Switch */}
                <div className="lg:flex items-center gap-4 lg:gap-10 hidden">
                    <i className="fa-regular fa-user text-xl lg:text-2xl 3xl:text-4xl"></i>

                    <div className="lg:flex items-center text-sm lg:text-lg font-semibold hidden">
                        <p className="cursor-pointer hover:text-slate-600">RU</p>
                        <span className="mx-1">/</span>
                        <p className="cursor-pointer hover:text-slate-600">ENG</p>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="lg:block hidden">
                <Navbar />
            </div>

            {/* Mobil Menyu */}
            <div
                className={`absolute top-[80px] left-0 w-full bg-white shadow-lg rounded-lg transition-all duration-300 z-20 overflow-hidden ${
                    isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col items-start py-4 px-6 gap-4 text-lg font-semibold">
                    <li className="cursor-pointer hover:text-[#1FAB8A] transition-all">Наборы</li>
                    <li className="cursor-pointer hover:text-[#1FAB8A] transition-all">Все товары</li>
                    <li className="cursor-pointer hover:text-[#1FAB8A] transition-all">Пошив</li>
                    <li className="cursor-pointer hover:text-[#1FAB8A] transition-all">Производство</li>
                </ul>
            </div>

            <Banner />
            </div>
            <PopularProduct />
            <Creative/>
            <PlaceOrder/>
            <IdeaMerchandise/>
            <Partners/>
            <Footer/>
        </div>
    );
}
