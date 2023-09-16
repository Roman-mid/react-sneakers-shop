import React from "react";

import style from './Drawer.module.scss';

function InfoCart({title, url,  width=120, height=120}) {
  return (
    <div className={style.emptyCart}>
      <h1>{title}</h1>
      <img src={url} width={width} height={height} />
    </div>
  );
}

export default InfoCart;
