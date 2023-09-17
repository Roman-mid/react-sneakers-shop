
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// context
import {AppContext, HeaderContext} from './context';
// import data from './data';

//pages
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Order from './pages/Order';
import NotFound from './pages/NotFound';

import './App.scss';


function App() {

  const [sneakers, setSneakers] = React.useState([]);
  const [addedSneakers, setAddedSneakers] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [openCart, setOpenCart] = React.useState(false);
  const [serchItems, setSerchItems] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [yourOrder, setYourOrder] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [favoriteAcrive, setFavoriteActive] = React.useState(false);
  const [order, setOrder] = React.useState(false);



  React.useEffect(() => {
    //get sneakers
    async function getData() {
      setLoading(true)
      try {
        const resp = await axios.get('https://64f21e6d0e1e60602d24c3bb.mockapi.io/items'); 
        setSneakers(resp.data);
      } catch (err) {
        setError(err.message)
      } 
      setLoading(false)
    };

    getData();
  }, []); 

  const addToCart = (id) => {
    setSneakers(sneakers.map((obj) => {
      
      if(obj.id === id) obj.inCart = !obj.inCart;

      return obj;
    }));

    setAddedSneakers(sneakers.filter(obj => obj.inCart === true));
  };


  const removeFromCart = (id, ind) => {
    setSneakers(prev => prev.map(obj => {
      if(obj.id === id) {
        obj.inCart = false;
      };
      return obj;
    }));
    setAddedSneakers(prev => prev.filter(obj => obj.id !== id))
    //setAddedSneakers(prev => [...prev.slice(0, ind), ...prev.slice(ind + 1)]);
  };


  const addToFavorit = (id) => {
    setSneakers(sneakers.map(obj => {
      if(obj.id === id) obj.favorite = !obj.favorite;

      return obj;
    }));
    setFavorite(sneakers.filter(obj => obj.favorite === true));
  };

  const onOpenCart = () => {
    setOpenCart(true);
    document.body.style.overflow = 'hidden';

  };

  const onCloseCart = (e, class1) => {
    if(e.target.classList.contains(class1)) setOpenCart(false);
    document.body.style.overflow = 'auto';
  };
  

  const onFavoriteActive = () => {
    setFavoriteActive(true);
    setOrder(false)
  };

  const onOrder = () => {
    setOrder(true)
    setFavoriteActive(false);
  };

  const goToShop = () => {
    setOrder(false)
    setFavoriteActive(false);
  };

  const orderPrice = addedSneakers.reduce((sum, obj) => sum += obj.price, 0);
  const deliveryPrice = addedSneakers.length > 5 || addedSneakers.length === 0 ? 0 : addedSneakers.length <= 3 ? 20 : 30;
  const totalPrice = orderPrice + deliveryPrice;


  if(error) {
    return <h1 className="error">{error}</h1> ;
  };


  return (
    <AppContext.Provider
      value={{
        sneakers,
        favorite,
        addedSneakers,
        setSneakers,
        serchItems,
        setSerchItems,
        addToCart,
        removeFromCart,
        addToFavorit,
        yourOrder,
        orderPrice,
        deliveryPrice,
        totalPrice,
        price,
        setPrice,
        goToShop
      }}
    >
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route path="/" element={
              <HeaderContext.Provider
                value={{
                  openCart,
                  onOpenCart,
                  removeFromCart,
                  onCloseCart,
                  setAddedSneakers,
                  setYourOrder,
                  onOrder,
                  onFavoriteActive,
                  order, 
                  favoriteAcrive
                }}
              >
                <MainLayout />
              </HeaderContext.Provider>
            }>
              <Route index element={<Home loading={loading} />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="orders" element={<Order />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;