import { CommonActions } from '@react-navigation/routers';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import { productActions } from '../../redux/products/action'
import { Welcome } from '../common';
import { cFL } from '../common/functions'
import Addtocart from '../common/AddToCart';
import { BaseView, Casing, DetailsCategoryLabel, DetailsDescription, DetailsDescriptionText, DetailsCategoryText, DetailsImage, DetailsPrice, DetailsTopicText, DetailsTopicView, Loading } from '../../common/Stylesheet';

const Details = props => {
    const { route, navigation } = props

    const { id, title } = route.params

    const thisProduct = useSelector(state => state.products.one_product)

    let { data, isLoading, loaded} = thisProduct

    const dispatch = useDispatch()

    const getProductById = () => dispatch(productActions.product_fetch_one(id))
    
    useEffect(() => {
        getProductById();
    }, [id])

    return (
        <BaseView barHeight={StatusBar.currentHeight}>
            <Welcome title=" " {...props}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{minHeight: '100%', paddingBottom: 200}}
            >

                {isLoading && <Loading>
                    <ActivityIndicator size="large" color="#0000ff" />
                </Loading>}

                <DetailsImage>
                    <Image source={{uri: data.image}} style={{height: 300, width: '100%', resizeMode: 'contain'}}/>
                </DetailsImage>

                <Casing>
                    <DetailsTopicView>
                        <DetailsTopicText>{title}</DetailsTopicText>
                        <DetailsPrice>${data.price}</DetailsPrice>
                        {data.category && <DetailsCategoryLabel>
                            <Text>
                                <DetailsCategoryText>{cFL(data.category)}</DetailsCategoryText> 
                            </Text>
                        </DetailsCategoryLabel>}
                    </DetailsTopicView>
                    <DetailsDescription>
                        <DetailsDescriptionText>{data.description}</DetailsDescriptionText>
                    </DetailsDescription>
                    {loaded && <Addtocart product={{
                        name: data.title,
                        id: data.id,
                        price: data.price,
                        image: data.image
                    }}/>}
                </Casing>
            </ScrollView>
        </BaseView>
    );
}


export default Details