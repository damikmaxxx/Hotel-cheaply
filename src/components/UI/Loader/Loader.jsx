import React from 'react';
import cl from './Loader.module.css';
import {useParams } from 'react-router-dom';

function Loader() {
  return (
    <div className={cl.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
}

export default Loader;
