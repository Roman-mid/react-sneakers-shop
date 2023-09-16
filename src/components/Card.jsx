
import React from 'react';

import style from './Card.module.scss';

function Card({id, name, price, url, inCart, favorite, addToCart, addToFavorit}) {

  return (
    <>
      {
        <div className={style.card}>
          <button
            className={style.likeEmpty}
            style={favorite ? { opacity: "1" } : {}}
            onClick={() => addToFavorit(id)}
          >
            <img
              src={!favorite ? "img/like-empty.png" : "img/like-fill.svg"}
              alt="favorites"
              width={30}
              height={30}
            />
          </button>
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
            <button
              className={style.btn}
              style={inCart ? { opacity: "1" } : {}}
              onClick={() => addToCart(id)}
            >
              <img src={!inCart ? "img/add.svg" : "img/added.svg"} alt="incart" />
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default Card;
