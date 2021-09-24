import { AnyAction } from 'redux';
import { NEWS_API } from 'services/newsapi';
import { RootState } from 'store/store';

const initialState = {
  all: [],
};

export function articlesReducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case ARTICLES_RECEIVED:
      return { ...state, all: payload };
    default:
      return state;
  }
}

// selectors, public interface to select data from the state
export const getArticles = (state: RootState) => state.articles.all;

// actions
export const ARTICLES_RECEIVED = 'articles/ARTICLES_RECEIVED';

// thunks
export function fetchArticles(query = 'tesla') {
  return async (dispatch: any, getState: any): Promise<void> => {
    const state = getState();
    query = state.search.search;
    console.log(`fetchArticlesState ${query}`);
    let count = 0;
    const response = await fetch(
      `${NEWS_API.BASE_URL}/${NEWS_API.VERSION}/${NEWS_API.END_POINT.everything}?q=${query}&apiKey=${NEWS_API.API_KEY}`
    )
      .then((response) => {
        count++;
        console.log('fired: ', count);

        return response.json();
      })
      .catch((res) => {
        console.error(`Server Error ${res.error.info}`);
        return [];
      })
      .finally(() => console.log('finished'));

    dispatch({ type: ARTICLES_RECEIVED, payload: response });
  };
}
