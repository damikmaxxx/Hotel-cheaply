import React, { useState, useEffect } from 'react';
import cl from './Settings.module.css';

const Settings = ({title, options,name, updateSettingApp, changeHotelPage}) => {

  const [activeSettings, setАctiveSettings] = useState([]);
  const updateSettings = (newNum) => {
    if(newNum.target.checked){
      setАctiveSettings([...activeSettings,newNum.target.id])
    }
    else{
      setАctiveSettings(activeSettings.filter(p => p !== newNum.target.id));
    }
    changeHotelPage(1)
  }

  useEffect(() => {
    updateSettingApp(activeSettings,name);
  },[activeSettings]);

  return (
    <div className={cl.settings}>
        <div className={cl.settingsName}>{title}</div>
        <ul className={cl.settingsChoice}>
          {Object.keys(options).map(o => {
            const act = activeSettings.some((num) => {
              return num == options[o];    
            })
            return <li key={options[o]} ><label><input  checked={act} id={options[o]}  onChange={e => updateSettings(e)} type="checkbox"/><span>{o}</span></label> </li>
          }
            )}
          
        </ul>
    </div>
  );
}

export default Settings;
