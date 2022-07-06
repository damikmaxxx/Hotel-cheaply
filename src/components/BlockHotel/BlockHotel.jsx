import React from 'react';
import cl from './BlockHotel.module.css';
import {useNavigate } from 'react-router-dom';
function BlockHotel({hotel}) {
    const router = useNavigate();
    const goHotel = () => {
        router(`/id/${hotel.id}`);
    }
  return (
    <div onClick={() => goHotel()} className={cl.foundHotelBlock}>
        <div className={cl.foundHotelBlockTop}>
            <div className={cl.foundHotelBlockImg}>
                <img src={hotel.img} alt="1" />
            </div> 
            <div className={cl.foundHotelBlockDescription}>
                <div className={cl.foundHotelBlockDescriptionName}>
                    <div>
                        <h4>{hotel.title}</h4>
                    </div>
                    <div className={cl.stars} data-stars={hotel.stars}>
                        <img  src="images/stars5.png" alt={hotel.stars} />
                    </div>
                </div>
                <div className={cl.foundHotelBlockDescriptionLocation}>
                    {hotel.location}
                </div>
            </div>
        </div>
        <div className={cl.foundHotelBlockBottom}>
            <div className={cl.foundHotelBlockConvenience}>Удобства:
                <span>{hotel.comfort.map(c => c + ", ")}</span>
            </div>
            
        </div>
    </div>
  );
}

export default BlockHotel;
