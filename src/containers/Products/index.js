import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { AddedToCart, Body, Details, HangingCover, ProductBaseView, ProductImage, TitleText, PriceText, AddedToCartLabel } from '../../common/Stylesheet';

const {width, height} = Dimensions.get('window')


const widths = ["width1", 'width2', 'width3']
const pickRandom = () => Math.floor(Math.random() * 2)

const ProductListOne = ({ item, navigation }) => {


    const { title, price, category, image, id } = item
    let pick = pickRandom()
    pick = widths[pick]

    const cart = useSelector(state => state.cart)
    const { data } = cart

    const showDetails = () => navigation.push('Details', {id, title: title})
    
    return (
        <TouchableOpacity onPress={showDetails}>
            <Body>
                <ProductBaseView>
                    <ProductImage source={{uri: image}} {...{width, pick}}/>
                    <HangingCover>
                        {data.filter(p => p.product_id === id).length > 0 && <AddedToCart>
                            <AddedToCartLabel>+ Added to cart</AddedToCartLabel>
                        </AddedToCart>}
                    </HangingCover>
                </ProductBaseView>
                <Details {...{width}}>
                    <TitleText>{title}</TitleText>
                    <PriceText>${price}</PriceText>
                </Details>
            </Body>
        </TouchableOpacity>
    );
}

export default ProductListOne;
