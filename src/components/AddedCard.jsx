import React from 'react'

import style from './AddedCard.module.scss';

function AddedCard({id, ind, number, name, price, url, removeFromCart}) {

  return (
    <div className={style.itemInCart}>
      <div className={style.img}>
        <img src={url} />
      </div>
      <div className={style.itemInfo}>
        <p>Men sneakers</p>
        <p className={style.price}>{name}</p>
        <b>{price} £</b>
      </div>
      <button className={style.removeItem} onClick={() => removeFromCart(id, ind, number)}>x</button>
    </div>
  )
}

export default AddedCard;