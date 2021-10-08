import { CommonActions } from '@react-navigation/routers';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import { productActions } from '../../redux/products/action'

import ProductListOne from '../Products';
import { SelectCategory, Welcome } from '../common';
import { cartActions } from '../../redux/cart/actions';

import { openDatabase } from 'expo-sqlite'
import { BaseView, Left, Loading, ProductBaseContainer, Right } from '../../common/Stylesheet';

var db = openDatabase('CartDatabase.db')

const Home = props => {
    const { navigation } = props

    const products = useSelector(state => state.products.products);
    const category = useSelector(state => state.products.category)

    let { data, isLoading } = products

    const dispatch = useDispatch()

    const getAllProducts = () => dispatch(productActions.product_fetch_all())

    // const selectTheme = theme => dispatch(themeActions.change_theme(theme))

    const getProductsByCategory = () => dispatch(productActions.product_fetch_by_category(category))

    useEffect(() => {
        category === "All" ? getAllProducts() : getProductsByCategory(category)
    }, [category])

    const createCart = () => dispatch(cartActions.create_table())
 
    useEffect(() => {
        // create sqlite table - Cart Table if it doesn't exist.
        
        db.transaction(function (tx) {
            tx.executeSql(
                'SELECT * FROM table_cart',
                [],
                (tx, { rows }) => {
                    let temp = []
                    for (let i = 0; i < rows._array.length; ++i) {
                        temp.push(rows.item(i))
                    }
                    dispatch(cartActions.fetch_products_from_cart_success(temp))
                },
                (tx, error) => {
                    console.log(error, 'error')
                }
            )
        })
        createCart()
    }, [])

    const homeProps = {
        ...props,
        home: true
    }

    return (
        <BaseView barHeight={StatusBar.currentHeight}>
            <Welcome {...homeProps} />
            <SelectCategory />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{minHeight: '100%', paddingBottom: 200, paddingTop: 10}}
            >
            {isLoading && <Loading>
                <ActivityIndicator size="large" color="#0000ff" />
            </Loading>}
            {data.length > 0 && <>

                    <ProductBaseContainer>
                        <Left>
                            {data.map((product, key) => key % 2 == 1 && <ProductListOne item={product} key={key} navigation={navigation}/>)}
                        </Left>
                        <Right>
                            {data.length > 0 && data.map((product, key) => key % 2 == 0 && <ProductListOne item={product} key={key} navigation={navigation}/>)}
                        </Right>
                    </ProductBaseContainer>
            </>}
            </ScrollView>


        </BaseView>
    );
}

export default Home