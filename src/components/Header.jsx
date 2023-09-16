
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

import { AppContext,  HeaderContext } from '../context';

import Drawer from './Drawer';


function Header() {

  const { onOpenCart, onFavoriteActive, onOrder , favoriteAcrive, order} = React.useContext(HeaderContext);
  const {totalPrice, goToShop } = React.useContext(AppContext);
 

  return (
    <>
    <Drawer />

    <header className={style.header}>
      <Link to="/" onClick={goToShop}>
        <div className={style.logo}>
          <img src="img/logo.png" alt="BEST SNEAKERS" width={40} height={40} />
          <div className="logo-content">
            <h5>BEST SNEAKERS</h5>
            <span>The best sneakers are here</span>
          </div>
        </div>
      </Link>

      <div className={style.headerRight}>
        <div className={style.cart} onClick={onOpenCart}>
          <img src="img/cart.png" alt="cart" width={18} height={18} />
          <span>{totalPrice} £</span>
        </div>

        <Link to="favorites" className={style.like}>
          <img  
            src={favoriteAcrive ? "img/favoriteActive.svg" : "img/favorite.png" } 
            alt="favorite"
            width={18} height={17}
            onClick={onFavoriteActive}
          />
        </Link>

        <Link to="orders" className={style.user} >
          <img 
            src={order ? "img/orderActive.svg" : "img/order.png" } 
            alt="orders"
            width={20} height={20} 
            onClick={onOrder}
          />
        </Link>

      </div>
    </header>
    </>
  );
}

export default Header;

