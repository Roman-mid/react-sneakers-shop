import React from 'react'
import { AppContext } from '../context';



function Search({title}) {

  const {serchItems, setSerchItems} = React.useContext(AppContext);

  return (
    <div className="title">
    <h1>{serchItems ? `Filter by "${serchItems}"` : title}</h1>
    <input
      type="search"
      placeholder="Поиск..."
      value={serchItems}
      onChange={(e) => setSerchItems(e.target.value)}
    />
  </div>
  )
}



export default Search