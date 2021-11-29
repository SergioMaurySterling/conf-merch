import React from 'react';

const Checkout = () => {
  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        <h3>lista de pedidos:</h3>
        <div className='Checkout-element'>
          <h4>ITEM name</h4>
          <span>$10</span>
        </div>
        <button type='button'>Eliminar</button>
      </div>
    </div>
  );
}

export default Checkout;


