
import React from 'react'

import style from './Card.module.scss';

function CardOrdered({id, name, price, url, }) {

  return (

    <div className={style.card}>
      <img
        alt={name}
        src={url}
        width={133}
        height={112}
      />
      <span className={style.menSneakers}>Men sneakers</span>
      <p>{name}</p>
      <div className={style.info}>
        <div className={style.priceBlock}>
          <span>price:</span>
          <b>{price} £</b>
        </div>
      </div>
    </div>

  );
}

export default CardOrdered;
