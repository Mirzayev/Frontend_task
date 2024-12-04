import logo from '../assets/images/logo.png';
import {Button} from 'antd';
import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";

export default function Header() {
    return (
        <div className="bg-back-gradient pt-10">
            <div className="flex items-center gap-10 justify-between px-4 lg:px-10 xl:px-20 max-w-[1536px] mx-auto">
                {/* Logo */}
                <img className="xl:max-w-[487px] lg:max-w-80 max-w-52 " src={logo} alt="logo"/>

                {/* Search Bar */}
                <div
                    className="hidden md:flex h-full border-2 border-black items-center rounded-full px-3 py-3 gap-4 3xl:py-5">
                    <i className="fa-solid fa-magnifying-glass text-black 3xl:text-2xl"></i>
                    <input
                        type="text"
                        className="h-full w-full rounded-full bg-transparent outline-none"
                        placeholder="Поиск"
                    />
                </div>

                {/* Contact Button */}
                <div className={"flex items-center gap-5 "}>
                    <i className="fa-solid fa-magnifying-glass text-2xl block lg:hidden"></i>
                <Button
                    className="py-2 lg:py-3 3xl:py-5 h-full rounded-full px-4 lg:px-10 3xl:px-[62px] bg-[#1FAB8A] text-white sx:block hidden"
                >
                    +380 630 130 103
                </Button>
                    <i className="fa-solid fa-bars text-2xl block lg:hidden"></i>
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


            <Navbar className={"hidden "}/>
            {/*<Banner/>*/}
        </div>
    );
}