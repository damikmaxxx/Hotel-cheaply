import { Button } from 'bootstrap';
import React, { useState , useEffect, useMemo } from 'react';
import cl from './Paginator.module.css'

const  Paginator = ({count,activeHotelsPage , changeHotelPage}) => {
    const [pagesArray, setPagesArray] = useState([])

    useEffect(() => {
        let array = [];
        for(let i = 1; i <= count; i++){
            array.push(i)
        }
        setPagesArray(array)
    },[count])  
  return (
    <div className={cl.pagination}>
        {pagesArray==1 ? "" : pagesArray.map(p => <button onClick={() => {changeHotelPage(p)}} className={activeHotelsPage === p ? cl.activeButton : " "} key={p}> {p} </button> )}
    </div> 
  );
}

export default Paginator;
