import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { fetchArticles } from './store/reducers/ArticlesReducer';
import App from 'components/app/App';

import 'styles/tailwind.css';

// kick start the app with default state
store.dispatch(fetchArticles('tesla'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
