import rocket1  from '../assets/images/rocket1.png'
import rocket2  from '../assets/images/rocket2.png'
import lamp  from '../assets/images/lamp.png'
import back from  '../assets/images/bg.png'
import {Button} from "antd";

export default function IdeaMerchandise() {


    return (
        <div className="relative px-5 ">
            <div className="absolute inset-0 z-10  w-full ">
                <img className={"w-full h-1/2 sm:h-full"} src={back} alt=""/>
            </div>
            <div className={"flex flex-col-reverse lg:flex-row justify-around items-center relative z-20 sm:pt-20 mt-8 "}>
                <div className={" max-w-[700px]"}>
                    <h5 className={"2xl:text-[36px] font-semibold lg:text-[27px] text-[23px] "}>У вас своя уникальная
                        идея по разработке мерча?</h5>
                    <p className={"mt-5 sm:mb-10 mb-5"}>Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с
                        технологией производства,
                        предоставим образцы матералов. </p>
                    <div className={"sm:flex items-center gap-10 "}>
                        <h6 className={"font-semibold"}>Введите свои контактные данные, и наш менеджер свяжется с Вами в
                            течении 1 часа</h6>
                        <div className={"w-full mt-4"}>
                            <input placeholder="Ваше Имя" className={"bg-transparent  border-b border-black outline-none block px-1 my-1 w-full"} type="text"/>
                            <input placeholder="Ваша електронная почта" className={"bg-transparent  border-b border-black outline-none block px-1 my-1 w-full"} type="text"/>
                            <input placeholder="Ваш номер телефона" className={"bg-transparent  border-b border-black outline-none block px-1 my-1 w-full"} type="text"/>
                            <Button className={"bg-[#1FAB8A] text-white xl:w-[200px] xl:h-[40px] rounded-full mt-5 w-full"}>
                                Заказать
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={"flex h-full justify-center lg:justify-start gap-4 mb-10"}>
                    <div className={"flex items-end"}><img src={rocket1} alt=""/></div>
                    <div className={"flex items-center"}><img src={lamp} alt=""/></div>
                    <div className={"flex sm:items-start items-end"}><img src={rocket2} alt=""/></div>
                </div>
            </div>

        </div>
    )
}