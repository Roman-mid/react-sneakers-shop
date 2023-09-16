import React from 'react'
import { AppContext } from '../context';
import Card from '../components/Card';
import Search from '../components/Search';
import EmptyOrders from '../components/EmptyOrders';


function Favorites() {

  const {favorite, serchItems, addToCart, removeFromCart, addToFavorit, goToShop} = React.useContext(AppContext);

  const favoriteItems = favorite.filter(item => item.name.toLowerCase().includes(serchItems.toLowerCase()))
  .map(obj => {
    return  <Card 
    key={obj.id}
    {...obj}
    addToCart={addToCart}
    removeFromCart={removeFromCart}
    addToFavorit={addToFavorit}
  />
  })

  return (
    <>
      {!!favorite.length ? (
        <div className="content">
          <Search title="Favorites" />

          <div className="wrap-cards">{favoriteItems}</div>
        </div>
      ) : (
        <EmptyOrders
          title="You don't have favorites items"
          onClick={goToShop}
        />
      )}
    </>
  );
};

export default Favorites;