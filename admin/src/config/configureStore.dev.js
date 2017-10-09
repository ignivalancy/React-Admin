/*
 * @file: configureStore.prod.js
 * @description: Configure/creating redux store with thunk,reducer etc
 * @date: 18.07.2017
 * @author: Jasdeep Singh
 * 
 */

import { compose, applyMiddleware, createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducer from '../redux';
import createEncryptor from 'redux-persist-transform-encrypt';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';


const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key-topper-q-web'
});

const logger = store => next => action => {
    return next(action);
};

export const history = createHistory()

export default function configureStore() {
     /************* Create store ***********/ 
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk, routerMiddleware(history)),
            autoRehydrate(),
            devToolsEnhancer({
                hostname: "localhost",
                port: 3000
            })
        ),

    );

    persistStore(store, { transforms: [encryptor] });

    store.history = history;

    return store;
}