import React from 'react'
import './CheckoutPage.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotals } from '../redux/cart/cart-selector'
import CheckoutItem from '../components/CheckoutItem'


const CheckoutPage =({cartItems,total}) =>{
    return(
        <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
            <span>Product</span>
            </div>

            <div className="header-block">
            <span>Description</span>
            </div>

            <div className="header-block">
            <span>Quantity</span>
            </div>

            <div className="header-block">
            <span>Price</span>
            </div>

            <div className="header-block">
            <span>Remove</span>
            </div>
             </div>

             {
                 cartItems.map(cartitem=>
                    <CheckoutItem key={cartitem.id}
                    cartItem={cartitem}/>)
             }    
             <div className="total">
                 <span>Total amount is : ${total}</span>
                 </div> 
             </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotals
})

export default connect(mapStateToProps,null)(CheckoutPage)