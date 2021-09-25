import React from 'react';
import { Home } from '../containers';


const HomeScreen = (props) => {
    return (
        <Home navigation={props.navigation} />
    );
}

export default HomeScreen;