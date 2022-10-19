import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Product({item}) {

  const findMore = () => {
    localStorage.setItem("id", item.id);
    localStorage.setItem("img", JSON.stringify(item.img));
   
  };


  return (
    <div className='item-container'>
  
    <div key={item.id} className="img-container">
      <img
        src={item.img}
        alt="category"
        border="0"
      />
    </div>
    <div className="info-container">
        <div className='icon'><ShoppingCartOutlinedIcon/> </div>
        <NavLink to="/productlist/product">
           <div className='icon'> <SearchIcon onClick={findMore}/></div>
           </NavLink>
        
        <div className='icon'><FavoriteBorderIcon /></div>
        
          
            </div>
  </div>
  )
}

export default Product
