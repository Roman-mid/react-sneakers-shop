import React from "react";
import ContentLoader from "react-content-loader";

import style from './Card.module.scss';

function CardLoading() {

  return (
    <div className={style.card}>
      <ContentLoader
        speed={2}
        width={210}
        height={260}
        viewBox="0 0 210 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="11" ry="11" width="150" height="90" />
        <rect x="0" y="100" rx="5" ry="5" width="150" height="15" />
        <rect x="0" y="120" rx="5" ry="5" width="100" height="15" />
        <rect x="0" y="170" rx="5" ry="5" width="80" height="30" />
        <rect x="130" y="170" rx="5" ry="5" width="30" height="30" />
      </ContentLoader>
    </div>
  );
 
}

export default CardLoading;
