import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
<<<<<<< HEAD
import { store } from './store'
=======
>>>>>>> daeb4118ae46f307b2b4749a125b9a94093cc3ff
import Router from '@/router'
import { store } from '@/store'
import '@/utils/reset.css'
import '@/utils/rem'
import './index.less'

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
  <PersistGate loading={null} persistor={persistStore(store)}>
    <Router />
=======
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Router />
>>>>>>> daeb4118ae46f307b2b4749a125b9a94093cc3ff
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
