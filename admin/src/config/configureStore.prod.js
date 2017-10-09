/*
 * @file: configureStore.dev.js
 * @description: Configure/creating redux store with devToolsEnhancer,thunk,reducer etc
 * @date: 09.10.2017
 * @author: Jasdeep Singh
 * */

import { compose, applyMiddleware, createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducer from '../redux';
import createEncryptor from 'redux-persist-transform-encrypt';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

const encryptor = createEncryptor({
    secretKey: 'my-super-secret-key-topper-q-web'
});

export const history = createHistory()

export default function configureStore() {
    /************* Create store ***********/ 
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk, routerMiddleware(history)),
            autoRehydrate()
        )
    );

    persistStore(store, { transforms: [encryptor] });

    store.history = history;

    return store;
}