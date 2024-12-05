import React from 'react';
import { Button, Select } from 'antd';
import black from '../../../assets/images/sweater_black.png'
import blue from '../../../assets/images/sweater_blue.png'
// import blue2 from '../../../assets/images/sweater_blue2.png.png'
// import blue3 from '../../../assets/images/sweater_blue3.png.png'
import green from '../../../assets/images/sweater_green.png'
import orange from '../../../assets/images/sweater_orange.png'
import pink from '../../../assets/images/sweater_pink.png'

// import 'antd/dist/antd.css';

const { Option } = Select;

const products = [
    { id: 1, name: "EL003 Elleven Checkpoint-Friendly Compu-Backpack", price: "$76.43", color: "Blue", imgSrc: pink },
    { id: 2, name: "EL003 Elleven Checkpoint-Friendly Compu-Backpack", price: "$76.43", color: "White", imgSrc: black },
    { id: 3, name: "EL003 Elleven Checkpoint-Friendly Compu-Backpack", price: "$76.43", color: "Green", imgSrc: blue },
    { id: 4, name: "EL003 Elleven Checkpoint-Friendly Compu-Backpack", price: "$76.43", color: "Orange", imgSrc: green },
    { id: 5, name: "EL003 Elleven Checkpoint-Friendly Compu-Backpack", price: "$76.43", color: "Purple", imgSrc: orange },
    { id: 6, name: "EL003 Elleven Checkpoint-Friendly Compu-Backpack", price: "$76.43", color: "Black", imgSrc: pink },
];

export default function ProductPage() {
    return (
        <div className="container mx-auto  py-10">
            <div style={{scrollbarWidth:'none'}} className="flex justify-between items-center mb-8 gap-6 overflow-auto my-10 ">
                <Select defaultValue="Все товары" style={{ width: 200 }}>
                    <Option value="all">Все товары</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Толстовки" style={{ width: 200 }}>
                    <Option value="all">Свитшоты</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Свитшоты" style={{ width: 200 }}>
                    <Option value="all">Свитшоты</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Футболки" style={{ width: 200 }}>
                    <Option value="all">Футболки</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Поло" style={{ width: 200 }}>
                    <Option value="all">Поло</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Жилетки" style={{ width: 200 }}>
                    <Option value="all">Жилетки</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Рюкзаки" style={{ width: 200 }}>
                    <Option value="all">Рюкзаки</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Бананки" style={{ width: 200 }}>
                    <Option value="all">Бананки</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Эко-сумки/Шопперы " style={{ width: 200 }}>
                    <Option value="all">Эко-сумки/Шопперы </Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Пледы" style={{ width: 200 }}>
                    <Option value="all">Пледы</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Носки" style={{ width: 200 }}>
                    <Option value="all">Носки</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Select defaultValue="Маски" style={{ width: 200 }}>
                    <Option value="all">Маски</Option>
                    <Option value="hoodies">Худи</Option>
                    <Option value="t-shirts">Футболки</Option>
                    <Option value="polo">Поло</Option>
                    <Option value="jackets">Жилеты</Option>
                </Select>
                <Button type="primary" className="px-4 py-2">Показать еще</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                        <img className="w-full h-48 object-contain mb-4" src={product.imgSrc} alt={product.name} />
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-500 mb-2">{product.price}</p>
                       <div className="flex items-center justify-between">
                            <Button type="link">Add to Cart</Button>
                           <i className={"fa-solid fa-trash text-slate-500 hover:text-slate-700 cursor-pointer"}></i>
                       </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <Button className="mx-2">1</Button>
                <Button className="mx-2">2</Button>
                <Button className="mx-2">3</Button>
                <Button className="mx-2">4</Button>
                <Button className="mx-2"><i className={"fa-solid fa-chevron-right"}></i></Button>
            </div>
        </div>
    );
}
