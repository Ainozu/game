import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './components/redux/store'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './style.css';
import Approute from './components/routes/Approute'

let persistor = persistStore(store);

function App() {

    return (
        <Approute/>
    )
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    ,document.getElementById('root'));
}

