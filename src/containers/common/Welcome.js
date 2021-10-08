import React, { useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux/cart/actions';
import { GreetingsBox, Greetings, BadgeView, Badge, NumberView, Numbers, BadgeText, BadgeTextNumber } from '../../common/Stylesheet'

const Welcome = props => {
    const { title, navigation, hideIcon, home, settings} = props
    let hideCartIcon = hideIcon || true
    const cart = useSelector(state => state.cart)
    
    const {count, data} = cart
    console.log(count);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartActions.fetch_products_from_cart())
    }, [data])

    const goToCheckout = () => navigation.push('Checkout')
    const navigateToSettings = () => navigation.push('Settings')
    const goBack = () => navigation.goBack();


    return (
        <View>
            <GreetingsBox>
               {!home && <TouchableWithoutFeedback onPress={goBack}>
                    <BadgeView>
                        <BadgeText>
                            <AntDesign name="back" size={24} />
                        </BadgeText>
                    </BadgeView>
                </TouchableWithoutFeedback>}

                <View style={{width: '70%'}}>
                    <Greetings>{title || "Welcome,"}</Greetings>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {settings === undefined && <TouchableWithoutFeedback onPress={navigateToSettings}>
                        <BadgeView spaceright>
                            <BadgeText>
                                <Ionicons name="ios-settings-outline" size={24} />
                            </BadgeText>
                        </BadgeView>
                    </TouchableWithoutFeedback>}
                    {hideCartIcon && <TouchableWithoutFeedback onPress={goToCheckout}>
                        <BadgeView>
                            <BadgeText>
                                <AntDesign name="shoppingcart" size={24} />
                            </BadgeText>
                            {count > 0 && <Badge>
                                <BadgeTextNumber>{count}</BadgeTextNumber>
                            </Badge>}
                        </BadgeView>
                    </TouchableWithoutFeedback>}
                    {!hideCartIcon && count > 0 && <BadgeView>
                        <NumberView>
                            <Numbers>{count}</Numbers>
                        </NumberView>
                    </BadgeView>}
                </View>
            </GreetingsBox>
        </View>
    );
}

export default Welcome;
