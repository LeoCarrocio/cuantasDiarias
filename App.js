import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebaseApp from './app/configuracion/firebase';
//redux
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './app/redux/reducer' 
import thunkMiddleware from 'redux-thunk'

import Navigation from './app/navegacion/Navigation';

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )

}

