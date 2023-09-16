import React from 'react'
import { AppContext } from '../context';
import CardOrdered from '../components/CardOrdered';
import Search from '../components/Search';
import EmptyOrders from '../components/EmptyOrders';

import style from '../components/CardOrdered.module.scss'

function Order() {

  const { yourOrder, serchItems, goToShop } = React.useContext(AppContext);

  const myOrder = yourOrder.map((obj, ind) => {
    return (
      <div className={style.orderWrap} key={ind + '_' + toString(ind)} >
      <h2>Order №{ind + 1}</h2>
      <div className="wrap-cards" style={{"marginTop": "10px"}}>
      {obj.items.filter(item => item.name.toLowerCase().includes(serchItems.toLowerCase())).map(item => {
       return  <CardOrdered
       key={item.id}
       name={item.name}
       price={item.price}
       url={item.url}
      />
      })}
      </div>
      <h2>Total price: {obj.price} £</h2>
      </div>
    )
  });


  return (
    <>
      {!!yourOrder.length ? (
        <div className="content">
          <Search title="Your orders" />
          {myOrder}
        </div>
      ) : (
        <EmptyOrders title="You don't have any orders" onClick={goToShop} />
      )}
    </>
  );
};

export default Order;