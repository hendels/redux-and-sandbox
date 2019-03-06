import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';

// app 
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
})

const allStoreEnhancers = compose(
    window.devToolsExtension && window.devToolsExtension()
);
const store = createStore(
    allReducers, 
    {
        products: [{name: 'Elektron'}],
        user: 'Przemy',
    },
    allStoreEnhancers
);
//
// console.log(store.getState());

// const updateUserAction = {
//     type: 'updateUser',
//     payload: {
//         user: 'Demy'
//     }
// };

// store.dispatch(updateUserAction);

ReactDOM.render(<Provider store={store}><Layout randomProps="whatever"/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
