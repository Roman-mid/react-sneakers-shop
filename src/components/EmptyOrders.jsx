import React from 'react'


import style from './EmptyOrders.module.scss';
import { Link } from 'react-router-dom';


function EmptyOrders({ title, onClick}) {

  return (
    <div className={style.wrap}>
        <h1>{title}</h1>
        <img src="img/sad.png" alt="" />
        <Link to="/">
            <button className={style.backBtn} onClick={onClick}>
                Go to shopping
                <img src="img/arrow.svg" alt="" />
            </button>
        </Link>
    </div>
  )
};

export default EmptyOrders;