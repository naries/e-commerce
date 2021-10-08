import React , { useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cart/actions';
import { CartProduct, CartProductImage, CartButtonText, CartButton, CartImage, CartPriceText, CartTitleText, CartTitleView } from '../../common/Stylesheet'

const {width} = Dimensions.get('window')

const Cartproducts = props => {
    const { product } = props

    const dispatch = useDispatch()

    // remove product from cart
    const removeProduct = () => dispatch(cartActions.remove_product_from_cart(product.product_id))

    return (
        <CartProduct>
            <CartTitleView width={width}>
                <CartTitleText>{product.product_name}</CartTitleText>
                <CartPriceText>${product.price}</CartPriceText>
                <TouchableWithoutFeedback onPress={removeProduct}>
                    <CartButton>
                        <CartButtonText>Remove from cart</CartButtonText>
                    </CartButton>
                </TouchableWithoutFeedback>
            </CartTitleView>
            {product.image && <CartProductImage>
                <CartImage source={{uri: product.image || ""}} />
            </CartProductImage>}
        </CartProduct>
    );
}

export default Cartproducts;
