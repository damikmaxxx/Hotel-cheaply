import React, { useEffect, useState } from 'react';
import cl from './Hotel.module.css';
import {Link, useParams } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';

function Hotel({getHotelInfo, isHotelsLoading}) {
    const {id} = useParams() 
    const [hotel, setHotel] = useState()
    const HotelInfo = async () => {
        setHotel(await getHotelInfo(id));
    }
    HotelInfo()
  return (
    <main>
        {hotel 
         ? <div ><div className="container">
            <div className="row">
                <div className="col-12">
                <div className={cl.back}>
                    <Link to={"/"} > &#60; назад</Link>
                </div>
                </div>
                <div className="col-12">
                    <div>
                        <h4>{hotel.title}</h4>
                    </div>
                    <div className={cl.stars} data-stars={hotel.stars}>
                        <img  src="../images/stars5.png" alt={hotel.stars} />
                    </div>
                    <div className={cl.foundHotelBlockDescriptionLocation}>
                       {hotel.location}
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12">
                    <div className={cl.imgFull}>
                        <img src={hotel.img} alt="" />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className={cl.rightInfo}>
                        <div>
                        <h5 style={{textAlign: 'center'}}>Свободное время</h5>
                        <div className={cl.info}>{hotel.time[0] +" : "+ hotel.time[1]}</div>
                        </div>
                        <div>
                        <h5 style={{textAlign: 'center'}}>Свободные места</h5>
                        <div className={cl.info}>{"На "+ hotel.freePlace + " человек"}</div>
                        </div>
                        <div className={cl.button}>
                            <button >Занять</button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div>
        <div className="container">
            <div className="row">
                <div className={cl.description}>
                    <h4>Описание</h4>
                    {hotel.description}
                </div>
            </div>
            </div>
        </div>
        </div> : <div style={{display:"flex", marginTop : '100px'}}><Loader /></div> }
    </main> 
  );
}

export default Hotel;
