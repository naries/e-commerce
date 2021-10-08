
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { ReduxNetworkProvider } from 'react-native-offline'
import { PersistGate } from 'redux-persist/integration/react';
import store from './store/configureStore';
import { Router } from './Router';

const ReduxWrapper = () => {
    const per = persistStore(store);
    return (
        
        <Provider store = {store}>
            <PersistGate persistor={per}>
                <ReduxNetworkProvider>
                    <Router />
                </ReduxNetworkProvider>
            </PersistGate>
        </Provider>
    )
}

export default ReduxWrapper