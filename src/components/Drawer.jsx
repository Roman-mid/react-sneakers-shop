
import React from 'react';
import AddedCard from './AddedCard';
import style from './Drawer.module.scss';
import InfoCart from './InfoCart';

import {AppContext, HeaderContext} from '../context';

function Drawer() {

  const {setSneakers, addedSneakers, orderPrice, deliveryPrice, totalPrice} = React.useContext(AppContext);


  const {
    onCloseCart,
    removeFromCart,
    setAddedSneakers,
    setYourOrder,
    openCart
  } = React.useContext(HeaderContext);

  const [isOrder, setIsOrder] = React.useState(false);
  

  const takeOrder = () => {
    setIsOrder(true);
    setYourOrder(prev => [...prev, {items:addedSneakers, price:totalPrice}])
    setAddedSneakers([]);
    setSneakers(prev => prev.map(obj => {
      obj.inCart = false;

      return obj;
    }));
  };

  const items = addedSneakers.map((obj, ind) => {
    return (
      <AddedCard 
        key={obj.id}
        id={obj.id}
        number={obj.number}
        ind={ind}
        name={obj.name}
        price={obj.price}
        url={obj.url}
        //removeFromCart={() => removeFromCart(obj.id, obj.number, ind)}
        removeFromCart={removeFromCart}
      />
    )
  })
  return (

    <div className={`${style.overlay} ${openCart && style.visabitily}` } onClick={e => onCloseCart(e, style.overlay)}>
      <div className={style.drawer}>
        <div className={style.cart}>
          <h2>Cart</h2>
          <button className={style.closeCart} onClick={e => onCloseCart(e, style.closeCart)}>x</button>
        </div>
  
          { addedSneakers.length > 0
          ? 
          <>
          <div className={style.addedItems}>
              {items}
            </div>
            <div className={style.total}>
            <div className={style.money}>
              <span>Price:</span>
              <div></div>
              <b>{orderPrice} £</b>
            </div>
            <div className={style.money}>
              <span>Delivery:</span>
              <div></div>
              <b>{deliveryPrice} £</b>
            </div>
            <div className={style.money}>
              <span>Total:</span>
              <div></div>
              <b>{totalPrice} £</b>
            </div>
            <button className={style.greenBtn} onClick={takeOrder}>
              Buy you order
              <img src="img/arrow.svg" alt="go next"/>
            </button>
          </div>
          </>
          : !isOrder 
            ? <InfoCart title={"Your cart is empty"} url="img/emptyCart.png"/>
            : <InfoCart title="Your order is ready" url="img/orderDone.png" height={170}/>
        }
      </div>
    </div>
  );
}

export default Drawer;




