import React from 'react';
import { useEffect } from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Category, CategoryMenuScroll, TextLabel } from '../../common/Stylesheet';
import { productActions } from '../../redux/products/action';
import { cFL } from '../common/functions'

const SelectCategory = () => {
    const categories = useSelector(state => state.products.categories)
    // fetch current category
    const activeCategory = useSelector(state => state.products.category)

    const {data, isLoading } = categories

    const dispatch = useDispatch()

    const getAllCategories = () => dispatch(productActions.product_category_fetch())

    const updateCategory = d => dispatch(productActions.product_update_category(d))

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <View>
            <CategoryMenuScroll
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 10,
                    paddingVertical: 10,
                }}
                style={{

                }}
            >
            {data.map((category, key) => <TouchableOpacity key={key} onPress={() => updateCategory(category)}>
                <Category selected={activeCategory === category}>
                    <TextLabel selected={activeCategory === category}>{cFL(category)}</TextLabel>
                </Category>
            </TouchableOpacity>)}
            </CategoryMenuScroll>
            {/* <Text>Select Category</Text> */}
        </View>
    );
}

export default SelectCategory;
