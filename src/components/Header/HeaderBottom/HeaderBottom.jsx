import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import cl from './HeaderBottom.module.css'
const HeaderBottom = ({searchHotels,changeHotelPage}) => {
    const [redirect, setRedirect] = useState(false)
    const {
        register,
        formState:{
            errors,
        },
        handleSubmit,
        } = useForm()

    const onSubmit = async (data) => {
        setRedirect(true);
        changeHotelPage(1);
        searchHotels(data);     
    }
    useEffect(() => {
        setRedirect(false);  
    },[redirect])
  return (
    <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className={cl.headerInput}>
                    <label >
                    <p>Куда отправляетесь?</p>
                    <input {...register("where",{
                        
                        required:"Заполните поле",  
                    })} placeholder="Казань" />
                    <div className={cl.inputError}>
                    {errors?.where && <p>{errors?.where?.message || "Ошибка"} </p>}
                    </div>  
                    </label>
                </div>
                       
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6">
                <div className={cl.headerInput}>
                    <label >
                    <p>День прибытия</p>
                    <input type="date"  {...register("entry",{
                        
                        required:"Заполните время заезда",
                    })} onChange={(event) => {
                        const {value} = event.target
                    }}/>
                    <div className={cl.inputError}>
                    {errors?.entry && <p>{errors?.entry?.message || "Ошибка"} </p>}
                    </div>
                    </label>
                </div>
                
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6">
                <div className={cl.headerInput}>
                    <label >
                    <p>День отбытия</p>
                    <input type="date" {...register("leave",{
                        required:"Заполните время отъезда",
                    })}/>
                    <div className={cl.inputError}>
                    {errors?.leave && <p>{errors?.leave?.message || "Ошибка"} </p>}
                    </div>
                    </label>
                </div>
                
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className={cl.headerInput}>
                    <label >
                    <p>Количество человек</p>
                    <input type="number" {...register("numPersons",{
                        required:"Заполните количество человек",
                    })} placeholder="5" />
                    <div className={cl.inputError}>
                    {errors?.numPersons && <p>{errors?.numPersons?.message || "Ошибка"} </p>}
                    </div>
                    </label>
                </div>
                
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className={cl.headerInput +' '+ cl.headerSearch}>
                    <input type="submit" value="Найти"  />
                    {redirect ? <Navigate to="/"  /> : ""}
                </div>
                
            </div>
            
        </div>
        </form>
    </div>
  );
}

export default HeaderBottom;
