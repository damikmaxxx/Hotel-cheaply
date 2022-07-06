import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BlockHotel from '../BlockHotel/BlockHotel';
import Paginator from '../Paginator/Paginator';
import Settings from '../Settings/Settings.';
import Loader from '../UI/Loader/Loader';
import './Main.module.css';
const  Main = ({settings, hotels, updateSettingApp, isHotelsLoading , totalHotelsPage,activeHotelsPage , changeHotelPage}) => {
  return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3   col-sm-12">
                  <div className="row">
                    {settings.map((s,item) =><Settings name={s.name} key={item} title={s.title} options={s.options} updateSettingApp={updateSettingApp} changeHotelPage={changeHotelPage}/> )}
                  </div>
                  
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    <div className="name-city">
                        <h2>Гостиничные комплексы</h2>
                    </div>
                    <div className="foundHotel">
                      { isHotelsLoading ? <div style={{display:"flex", marginTop : '100px'}}><Loader /></div> : 
                      hotels.map((h,item) =><BlockHotel key={item} hotel={h}/>)}

                    {!isHotelsLoading && !hotels.length ? <h5 style={{textAlign : 'center', marginTop : '100px'}}>Гостиниц  с такими параметрами нету</h5> : ""}
                    </div>
                    {!isHotelsLoading ? <Paginator count={totalHotelsPage} activeHotelsPage={activeHotelsPage} changeHotelPage={changeHotelPage}/> : ""}
                </div>
                
            </div>
        </div>
    </main>
  );
}

export default Main;
