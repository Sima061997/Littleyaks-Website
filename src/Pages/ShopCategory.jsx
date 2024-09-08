import React from 'react';

const products = {
  backpack: [
    { id:1, name: 'Mushrooma Backpack', price: '€40', imageUrl: 'backpack1.jpg'},
    { id:1, name: 'Mushrooma Backpack', price: '€40', imageUrl: 'backpack2.jpg'},
    { id:1, name: 'Mushrooma Backpack', price: '€40', imageUrl: 'backpack3.jpg'},
    { id:1, name: 'Mushrooma Backpack', price: '€40', imageUrl: 'backpack4.jpg'},
    { id:1, name: 'Mushrooma Backpack', price: '€40', imageUrl: 'backpack5.jpg'},
    { id:1, name: 'Mushrooma Backpack', price: '€40', imageUrl: 'backpack5.jpg'}
 
  ],
}

const ShopCategory = ({ category }) => {
  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Collection</h1>
      <p>Here are the best deals for {category}!</p>
      <div className='product-list'>
      {/* You can add logic here to dynamically display products for the specific category */
      
      }
      </div>
    </div>
  );
};

export default ShopCategory;
