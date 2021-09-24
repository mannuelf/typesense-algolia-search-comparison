import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { articlesReducer } from './reducers/ArticlesReducer';
import { searchReducer } from './reducers/SearchReducer';

export const store = createStore(
  combineReducers({
    search: searchReducer,
    articles: articlesReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
