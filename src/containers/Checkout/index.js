import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Welcome } from '../common';
import Cartproducts from '../common/CartProducts';

import { BaseView } from '../../common/Stylesheet'

const Checkout = props => {

    const cart = useSelector(state => state.cart)

    const { data, count } = cart

    const newProps = {
        ...props,
        hideIcon: true
    }

    return (
        <BaseView barHeight={StatusBar.currentHeight}>
            <Welcome title="Cart" {...newProps} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {count === 0  && <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Products added to cart will show up here.</Text>
                </View>}
                {data.map((d, key) => <Cartproducts key={key} product={d} />)}
            </ScrollView>
        </BaseView>
    );
}

const styles = StyleSheet.create({
    baseView: {
        backgroundColor: '#efefef',
        flex: 1,
        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight,
    },
    emptyText: {
        textAlign: 'center'
    },
    emptyContainer: {
        flex: 1
    }
})

export default Checkout;

