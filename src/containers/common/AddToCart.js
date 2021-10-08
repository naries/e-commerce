import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AddButtonContainer, AddButtonLabel, DisabledButtonContainer, DisabledButtonLabel } from '../../common/Stylesheet';
import { cartActions } from '../../redux/cart/actions';

const Addtocart = props => {

    const { product } = props

    const cart = useSelector(state => state.cart)
    const {data, isLoading} = cart

    const dispatch = useDispatch()

    const addProductToCart = () => dispatch(cartActions.add_product_to_cart({...product}))

    return (
        <>
            {data.filter(p => p.product_id === product.id).length === 0 && <TouchableOpacity onPress={addProductToCart}>
                <AddButtonContainer>
                    <AddButtonLabel>Add to cart</AddButtonLabel>
                </AddButtonContainer>
            </TouchableOpacity>}
            {data.filter(p => p.product_id === product.id).length > 0 && <DisabledButtonContainer>
                <DisabledButtonLabel>Added to cart</DisabledButtonLabel>
            </DisabledButtonContainer>}
        </>
    );
}

export default Addtocart;
