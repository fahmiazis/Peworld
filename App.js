import React from 'react';
import {Provider} from 'react-redux';

import store from './src/redux/store';

import Main from './src/screens/ConfirmPassword';
// import Main from './src/screens/PencarianScreen';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistore}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
