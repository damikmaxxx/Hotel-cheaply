import React, { useState,useEffect } from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Error from './pages/Error/Error';
import Hotel from './pages/Hotel/Hotel';
import './styles/App.css';
import {firebaseAPI} from "./api/api";
// const HOTELS_DATA_ = [
//   {id: 1,img:"/images/hotel-1.jpg", title: 'Отель Имерети',  stars:5,time:["2022-02-05","2023-01-01"], freePlace:5, location:"Московская 35, Центр города, Казань, Россия", comfort:["Ресторан", "Круглосуточная регистрация", "Сауна", "Фитнес-центр", "Номера для некурящих", "Трансфер", "Бизнес-центр", "Бесплатная парковка", "Интернет", "Бесплатный Wi-Fi", "Кондиционер", "Места для курения", "Снэк-бар", "Ежедневная уборка номера"], 
//   description:"1Lorem 1ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 2,img:"/images/hotel-2.jpg", title: 'Отель Kazan Palace by Tasigo', stars:4, time:["2022-06-01","2022-06-25"], freePlace:10, location:"Ул. Калинина, д.3Б, Казань, Россия", comfort:["Размещение с животными","Бар","Фитнес-центр","Бассейн"],
//   description:"2Lorem 2ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 3,img:"/images/hotel-3.jpg", title: 'Tihomirnova apartments', stars:3, time:["2022-02-05","2023-06-29"], freePlace:17, location:"Тихомирнова 11 53 кв, 6 этаж, Казань, Россия", comfort:["Круглосуточная регистрация","Сауна,Номера для некурящих","Трансфер,Бесплатная парковка","Интернет","Прокат автомобилей","Бесплатный Wi-Fi","Кондиционер"],
//   description:"3Lorem 3ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 4,img:"/images/hotel-4.jpg", title: 'Family Apartments on Galaktionova', stars:2, time:["2022-07-02","2022-07-20"], freePlace:14, location:"Ulitsa Galaktionova 6 , Центр города, Казань, Россия", comfort:["Ресторан","Бар","Круглосуточная регистрация","Номера для некурящих","Трансфер","Бесплатная парковка","Интернет","Бесплатный Wi-Fi","Кондиционер","Места для курения","Ежедневная уборка номера"],
//   description:"4Lorem 4ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},   
//   {id: 5,img:"/images/hotel-5.jpg", title: 'Апарт-отель Ямской посад', stars:1, time:["2023-01-01","2022-02-05"], freePlace:23, location:"Ул. Московская, д. 36, Центр города, Казань, Россия", comfort:["Парковка","Ресторан","Бар","Круглосуточная регистрация","Сауна","Фитнес-центр","Номера для некурящих","Трансфер","Бизнес-центр","Интернет","Сейф","Спа","Бесплатный Wi-Fi","Бассейн","Кондиционер,Снэк-бар"],
//   description:"5Lorem 5ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 6,img:"/images/hotel-6.jpg", title: 'Отель Kazan Palace by Tasigo', stars:0, time:["2022-06-05","2022-07-05"], freePlace:19, location:"Ул. Калинина, д.3Б, Казань, Россия", comfort:["Бар","Сауна","Фитнес-центр","Номера для некурящих","Трансфер"],
//   description:"6Lorem 6ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 7,img:"/images/hotel-7.jpg", title: 'Хаял Отель',  stars:2,time:["2022-02-05","2022-07-05"], freePlace:5, location:"Universitetskaya street 16, Центр города, Казань, Россия", comfort:["Ресторан", "Круглосуточная регистрация", "Сауна", "Фитнес-центр", "Номера для некурящих", "Трансфер", "Бизнес-центр", "Бесплатная парковка", "Интернет", "Бесплатный Wi-Fi", "Кондиционер", "Места для курения", "Снэк-бар", "Ежедневная уборка номера"], 
//   description:"7Lorem 7ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 8,img:"/images/hotel-8.jpg", title: 'Гранд отель Казань', stars:2, time:["2023-01-01","2022-02-05"], freePlace:10, location:"Петербургская ул.1, Центр города, Казань, Россия", comfort:["Размещение с животными","Бар","Фитнес-центр","Бассейн"],
//   description:"8Lorem 8ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 9,img:"/images/hotel-9.jpg", title: 'Отель Татарстан Казань', stars:1, time:["2021-11-30","2023-06-29"], freePlace:17, location:"Pushkina Ulitsa 4, Центр города, Казань, Россия", comfort:["Круглосуточная регистрация","Сауна,Номера для некурящих","Трансфер,Бесплатная парковка","Интернет","Прокат автомобилей","Бесплатный Wi-Fi","Кондиционер"],
//   description:"9Lorem 9ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 10,img:"/images/hotel-10.jpg", title: 'Express Hotel&Hostel', stars:1, time:["2022-07-02","2022-07-20"], freePlace:14, location:"Said-Galeeva Street 6, Центр города, Казань, Россия", comfort:["Ресторан","Бар","Круглосуточная регистрация","Номера для некурящих","Трансфер","Бесплатная парковка","Интернет","Бесплатный Wi-Fi","Кондиционер","Места для курения","Ежедневная уборка номера"],
//   description:"10Lorem 10ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},   
//   {id: 11,img:"/images/hotel-11.jpg", title: 'Гостиница Авиатор', stars:2, time:["2022-02-01","2022-02-05"], freePlace:5, location:"Улица Академика Павлова 1, Авиастроительный район, Казань, Россия", comfort:["Парковка","Ресторан","Бар","Круглосуточная регистрация","Сауна","Фитнес-центр","Номера для некурящих","Трансфер","Бизнес-центр","Интернет","Сейф","Спа","Бесплатный Wi-Fi","Бассейн","Кондиционер,Снэк-бар"],
//   description:"11Lorem 11ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 12,img:"/images/hotel-12.jpg", title: 'Отель Колви', stars:3, time:["2022-06-05","2022-02-05"], freePlace:19, location:"Ulitsa Mikhaila Khudyakova 7, Центр города, Казань, Россия", comfort:["Бар","Сауна","Фитнес-центр","Номера для некурящих","Трансфер"],
//   description:"12Lorem 12ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 13,img:"/images/hotel-13.jpg", title: 'Дукат на Ибрагимова',  stars:4,time:["2022-03-01","2022-07-05"], freePlace:5, location:"Prospekt Ibragimova 17, Московский район, Казань, Россия", comfort:["Ресторан", "Круглосуточная регистрация", "Сауна", "Фитнес-центр", "Номера для некурящих", "Трансфер", "Бизнес-центр", "Бесплатная парковка", "Интернет", "Бесплатный Wi-Fi", "Кондиционер", "Места для курения", "Снэк-бар", "Ежедневная уборка номера"], 
//   description:"13Lorem 13ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 14,img:"/images/hotel-14.jpg", title: 'Отель Фатима', stars:4, time:["2022-06-01","2022-06-25"], freePlace:3, location:"Karla Marksa Street 2, Центр города, Казань, Россия", comfort:["Размещение с животными","Бар","Фитнес-центр","Бассейн"],
//   description:"14Lorem 14ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 15,img:"/images/hotel-15.jpg", title: 'Отель Булгар', stars:4, time:["2021-11-30","2022-08-01"], freePlace:17, location:"Vishnevskogo Str.21, Казань, Россия", comfort:["Круглосуточная регистрация","Сауна,Номера для некурящих","Трансфер,Бесплатная парковка","Интернет","Прокат автомобилей","Бесплатный Wi-Fi","Кондиционер"],
//   description:"15Lorem 15ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 16,img:"/images/hotel-16.jpg", title: 'Гостиница Кристалл', stars:2, time:["2022-07-02","2022-07-20"], freePlace:14, location:"Ulitsa Yakhina 8, Центр города, Казань, Россия", comfort:["Ресторан","Бар","Круглосуточная регистрация","Номера для некурящих","Трансфер","Бесплатная парковка","Интернет","Бесплатный Wi-Fi","Кондиционер","Места для курения","Ежедневная уборка номера"],
//   description:"16Lorem 16ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},   
//   {id: 17,img:"/images/hotel-17.jpg", title: 'Гостиничный Комплекс Вояж', stars:2, time:["2022-02-01","2022-03-05"], freePlace:23, location:"Улица Журналистов 29 А, Советский район, Казань, Россия", comfort:["Парковка","Ресторан","Бар","Круглосуточная регистрация","Сауна","Фитнес-центр","Номера для некурящих","Трансфер","Бизнес-центр","Интернет","Сейф","Спа","Бесплатный Wi-Fi","Бассейн","Кондиционер,Снэк-бар"],
//   description:"17Lorem 17ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 18,img:"/images/hotel-18.jpg", title: 'Гостиница Ял', stars:2, time:["2022-05-01","2022-07-05"], freePlace:2, location:"Оренбургский Тракт 20, Приволжский район, Казань, Россия", comfort:["Сейф","Спа","Бесплатный Wi-Fi","Бассейн"],
//   description:"18Lorem 18ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 19,img:"/images/hotel-19.jpg", title: 'Хостел Пушкин',  stars:3,time:["2022-06-05","2022-07-05"], freePlace:60, location:"Улица Лесгафта 9-11, Казань, Россия", comfort:["Ресторан", "Круглосуточная регистрация", "Сауна", "Фитнес-центр", "Номера для некурящих", "Трансфер", "Бизнес-центр", "Бесплатная парковка", "Интернет", "Бесплатный Wi-Fi", "Кондиционер", "Места для курения", "Снэк-бар", "Ежедневная уборка номера"], 
//   description:"19Lorem 19ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 20,img:"/images/hotel-20.jpg", title: 'Hotel Art', stars:3, time:["2022-06-01","2022-06-25"], freePlace:10, location:"Street Odnostoronka Grivki 1, Кировский район, Казань, Россия", comfort:["Размещение с животными","Бар","Фитнес-центр","Бассейн"],
//   description:"20Lorem 20ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 21,img:"/images/hotel-21.jpg", title: 'Отель Волга', stars:1, time:["2022-05-01","2022-08-01"], freePlace:17, location:"Улица Ершова 1А, Казань, Россия", comfort:["Круглосуточная регистрация","Сауна,Номера для некурящих","Трансфер,Бесплатная парковка","Интернет","Прокат автомобилей","Бесплатный Wi-Fi","Кондиционер"],
//   description:"21Lorem 21ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 22,img:"/images/hotel-22.jpg", title: 'Парк Инн Рэдиссон Казань', stars:1, time:["2022-02-05","2023-01-01"], freePlace:14, location:"Peterburgskaya Street 55, Центр города, Казань, Россия", comfort:["Ресторан","Бар","Круглосуточная регистрация","Номера для некурящих","Трансфер","Бесплатная парковка","Интернет","Бесплатный Wi-Fi","Кондиционер","Места для курения","Ежедневная уборка номера"],
//   description:"22Lorem 22ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},   
//   {id: 23,img:"/images/hotel-23.jpg", title: 'АМАКС Сафар-отель ', stars:4, time:["2022-02-01","2022-03-05"], freePlace:70, location:"Ostrovskogo Steet 39/6, Центр города, Казань, Россия", comfort:["Парковка","Ресторан","Бар","Круглосуточная регистрация","Сауна","Фитнес-центр","Номера для некурящих","Трансфер","Бизнес-центр","Интернет","Сейф","Спа","Бесплатный Wi-Fi","Бассейн","Кондиционер,Снэк-бар"],
//   description:"23Lorem 23ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 24,img:"/images/hotel-24.jpg", title: 'Отель Корстон Роял Казань ', stars:3, time:["2022-06-05","2022-07-05"], freePlace:0, location:"Kremlevskaya Str.,15/25, Центр города, Казань, Россия", comfort:["Бар"],
//   description:"24Lorem 24ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 25,img:"/images/hotel-25.jpg", title: 'Отель Сулейман Палас  ',  stars:2,time:["2022-06-05","2022-08-01"], freePlace:5, location:"812 km M-7 Volga Highway, Казань, Россия", comfort:["Ресторан", "Круглосуточная регистрация", "Сауна", "Фитнес-центр", "Номера для некурящих", "Трансфер", "Бизнес-центр", "Бесплатная парковка", "Интернет", "Бесплатный Wi-Fi", "Кондиционер", "Места для курения", "Снэк-бар", "Ежедневная уборка номера"], 
//   description:"25Lorem 25ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 26,img:"/images/hotel-26.jpg", title: 'Happy House Hostel', stars:1, time:["2022-05-01","2022-06-25"], freePlace:10, location:"Ovrazhnaya Street 35, Казань, Россия", comfort:["Размещение с животными","Бар","Фитнес-центр","Бассейн"],
//   description:"26Lorem 26ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 27,img:"/images/hotel-27.jpg", title: 'Отель Джузеппе', stars:5, time:["2021-11-30","2023-06-29"], freePlace:17, location:"Pionerskaya Street 8B, Советский район, Казань, Россия", comfort:["Круглосуточная регистрация","Сауна,Номера для некурящих","Трансфер,Бесплатная парковка","Интернет","Прокат автомобилей","Бесплатный Wi-Fi","Кондиционер"],
//   description:"27Lorem 27ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 28,img:"/images/hotel-28.jpg", title: 'Отель-Транзит', stars:3, time:["2022-07-02","2022-07-20"], freePlace:14, location:"Baumana Street 47/9, Центр города, Казань, Россия", comfort:["Ресторан","Бар","Круглосуточная регистрация","Номера для некурящих","Трансфер","Бесплатная парковка","Интернет","Бесплатный Wi-Fi","Кондиционер","Места для курения","Ежедневная уборка номера"],
//   description:"28Lorem 28ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},   
//   {id: 29,img:"/images/hotel-29.jpg", title: 'Клуб Отель Корона', stars:4, time:["2022-02-05","2023-01-01"], freePlace:98, location:"пр. Фатыха Амирхана, 1, Ново-Савиновский район, Казань, Россия", comfort:["Парковка","Ресторан","Бар","Круглосуточная регистрация","Сауна","Фитнес-центр","Номера для некурящих","Трансфер","Бизнес-центр","Интернет","Сейф","Спа","Бесплатный Wi-Fi","Бассейн","Кондиционер,Снэк-бар"],
//   description:"29Lorem 29ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 30,img:"/images/hotel-30.jpg", title: 'Отель Армения', stars:0, time:["2022-06-05","2022-07-05"], freePlace:19, location:"Peterburgskaya Street 52, Центр города, Казань, Россия", comfort:["Парковка"],
//   description:"30Lorem 30ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 31,img:"/images/hotel-31.jpg", title: 'Регина на Баумана',  stars:1,time:["2022-05-01","2022-07-05"], freePlace:3, location:"Улица Большая Красная 119, Казань, Россия", comfort:["Ресторан", "Круглосуточная регистрация", "Сауна", "Фитнес-центр", "Номера для некурящих", "Трансфер", "Бизнес-центр", "Бесплатная парковка", "Интернет", "Бесплатный Wi-Fi", "Кондиционер", "Места для курения", "Снэк-бар", "Ежедневная уборка номера"], 
//   description:"31Lorem 31ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 32,img:"/images/hotel-32.jpg", title: 'Отель Ривьера Казань', stars:2, time:["2022-06-01","2022-06-25"], freePlace:10, location:"Ostrovskogo Street 61, Центр города, Казань, Россия", comfort:["Размещение с животными","Бар","Фитнес-центр","Бассейн"],
//   description:"32Lorem 32ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 33,img:"/images/hotel-33.jpg", title: 'ИТ-Парк', stars:2, time:["2022-05-01","2023-06-29"], freePlace:23, location:"Улица Карла Маркса, 6, Центр города, Казань, Россия", comfort:["Круглосуточная регистрация","Сауна,Номера для некурящих","Трансфер,Бесплатная парковка","Интернет","Прокат автомобилей","Бесплатный Wi-Fi","Кондиционер"],
//   description:"33Lorem 33ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 34,img:"/images/hotel-34.jpg", title: 'Отель Регина Малые Клыки', stars:3, time:["2022-07-02","2022-07-20"], freePlace:14, location:"Universitetskaya Street, 9 , Центр города, Казань, Россия", comfort:["Ресторан","Бар","Круглосуточная регистрация","Номера для некурящих","Трансфер","Бесплатная парковка","Интернет","Бесплатный Wi-Fi","Кондиционер","Места для курения","Ежедневная уборка номера"],
//   description:"34Lorem 34ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},   
//   {id: 35,img:"/images/hotel-35.jpg", title: 'Отель Биляр Палас', stars:2, time:["2022-02-05","2022-08-01"], freePlace:43, location:"Улица Максима Горького 3, Центр города, Казань, Россия", comfort:["Парковка","Ресторан","Бар","Круглосуточная регистрация","Сауна","Фитнес-центр","Номера для некурящих","Трансфер","Бизнес-центр","Интернет","Сейф","Спа","Бесплатный Wi-Fi","Бассейн","Кондиционер,Снэк-бар"],
//   description:"35Lorem 35ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
//   {id: 36,img:"/images/hotel-36.jpg", title: 'Гвардейская', stars:2, time:["2022-06-05","2023-01-01"], freePlace:19, location:"Gvardeiskaya Street 35, Советский район, Казань, Россия", comfort:["Круглосуточная регистрация","Сауна","Фитнес-центр","Номера для некурящих","Трансфер","Бизнес-центр","Интернет","Сейф","Спа","Бесплатный Wi-Fi","Бассейн","Кондиционер,Снэк-бар"],
//   description:"36Lorem 36ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit veniam quae, natus rem vel sed dolores eius, similique optio amet illo consequatur, magni animi earum aliquid accusamus. Error."},
// ]
function App() {
  const [isHotelsLoading, setIsHotelsLoading] = useState(false)
  const [selectedSettings, setSelectedSettings] = useState({stars:[],comfort:[]})
  const [totalHotelsPage, setTotalHotelsPage] = useState(0);
  const [limitCountHotels, setLimitCountHotels] = useState(5);
  const [activeHotelsPage, setActiveHotelsPage] = useState(1);
  const [rangeHotels, setRangeHotels] = useState([]);

  const [HOTELS_DATA, setHOTELS_DATA] = useState([]);
  const [hotels, setHotels] = useState([]);

  const updateSettingApp = (info,name) => {
    
    if (name == "stars") setSelectedSettings({...selectedSettings,stars:[...info]}) 
    if (name == "comfort") setSelectedSettings({...selectedSettings,comfort:[...info]})
   
  }

  const [settings, setSettings] = useState([
    {id: 1,name:"stars", title: 'Количество звезд', options:{"5 звезды":"5","4 звезды":"4", "3 звезды":"3", "2 звезды":"2", "1 звезда":"1", "без звезды":"0"}},
    {id: 2,name:"comfort",   title: 'Удобства', options:{"Парковка":"Парковка","Ресторан":"Ресторан","Размещение с животными":"Размещение с животными","Бар":"Бар","Фитнес-центр":"Фитнес-центр","Бассейн":"Бассейн"}}]
    );

  
  const getHotelInfo = async (id) => {
    
    for(let i = 0; i < HOTELS_DATA.length; i++){
      if (HOTELS_DATA[i].id == id){
        return HOTELS_DATA[i]
      }
    }
  } 
  const changeHotelPage = (page) => setActiveHotelsPage(page);

  const sortingPost = (hotels) => {
    let settingsHotels = hotels.filter((h) => {
      let actStars;
      let actComfort;
       
      actStars = selectedSettings.stars.some((num) => {
        return num == h.stars;    
      }
      )
      actComfort = selectedSettings.comfort.some((text) => {
         return  h.comfort.some((c) => { return c == text})   
      })
      if(!selectedSettings.stars.length) actStars=true;
      if(!selectedSettings.comfort.length) actComfort=true;
      return (actStars && actComfort)
    })
    let rangeHotels = [];
    for (let i = limitCountHotels*(activeHotelsPage - 1); i < limitCountHotels*activeHotelsPage; i++){
      if(settingsHotels[i]) rangeHotels.push(settingsHotels[i])
      
    }
    setTotalHotelsPage(Math.ceil(settingsHotels.length / limitCountHotels))
    
    setRangeHotels(rangeHotels)
      
  }
  const searchHotels = async (infoHotels = false) =>{
    
    setIsHotelsLoading(true)
    await firebaseAPI.getHotels().then(info => {
      if (!infoHotels) {
        setHOTELS_DATA(info);
        setHotels(info)
        setTotalHotelsPage(Math.ceil(info.length / limitCountHotels))
        sortingPost(info)
        setIsHotelsLoading(false)
        return
      }
      setHotels(info.filter(h => {
        h.location = h.location.toLowerCase();
        let dateEntry = Date.parse(infoHotels.entry)
        let dateLeave = Date.parse(infoHotels.entry)
        let dateHotelEntry = Date.parse(h.time[0])
        let dateHotelLeave = Date.parse(h.time[1])
        if((h.location.indexOf(infoHotels.where.toLowerCase()) !== -1) && (h.freePlace >= Number(infoHotels.numPersons)) && (dateHotelEntry <= dateEntry && dateHotelLeave >= dateLeave)){
          return true
        }
      }))
      setIsHotelsLoading(false)
    })
  }
  useEffect(() => {
    searchHotels()
  },[])
  
// firebaseAPI.addHotels(HOTELS_DATA_)
  useEffect(() => {
    sortingPost(hotels);
  },[selectedSettings,activeHotelsPage,hotels])
  return (
    <div className="App">
      <BrowserRouter>
      <Header  searchHotels={searchHotels} changeHotelPage={changeHotelPage}/>
        <Routes>  
          <Route path="/"  element={<Main changeHotelPage={changeHotelPage} settings={settings} hotels={rangeHotels} activeHotelsPage={activeHotelsPage} updateSettingApp={updateSettingApp} selectedSettings={selectedSettings} isHotelsLoading={isHotelsLoading} totalHotelsPage={totalHotelsPage}/>} />
          <Route path="/id/:id" element={<Hotel getHotelInfo={getHotelInfo} searchHotels={searchHotels}/>} />
          <Route path="*" element={<Error />}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
