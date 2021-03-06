import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  ) 
}

export default MyApp
