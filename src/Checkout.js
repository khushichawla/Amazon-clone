import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className="checkout__ad" src="https://imgur.com/DyuH1O8.jpg"/>
        <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
        </div>
      </div>

      <div className='checkout__right'>
        {/* <Subtotal/> */}
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  )
}

export default Checkout
