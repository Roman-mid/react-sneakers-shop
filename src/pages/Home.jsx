import React from "react";
import { AppContext } from '../context';

import Card from "../components/Card";
import CardLoading from "../components/CardLoading";
import Search from "../components/Search";


function Home({loading}) {

  const {sneakers, serchItems, addToCart, removeFromCart, addToFavorit} = React.useContext(AppContext);

  const carts = sneakers.filter(item => item.name.toLowerCase().includes(serchItems.toLowerCase()))
    .map((obj, ind) => (
      <Card 
        key={obj.id}
        ind={ind}
        {...obj}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        addToFavorit={addToFavorit}
      />
    )
  );

  const loadingItems = Array(8).fill(0).map((_, ind) => {
    return <CardLoading key={ind}/>
  });
  
  return (
      <div className="content">

        <Search title="All sneakers"/>

        <div className="wrap-cards">
            {!loading ? carts : loadingItems}
        </div>
      </div>
  );
};

export default Home;
