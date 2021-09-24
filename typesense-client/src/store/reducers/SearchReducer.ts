import {AnyAction} from "redux";
import {RootState} from "store/store";

const initialState = {
  search: 'tesla',
};

/**
 * @param {Object} state previous state
 * @param {string} action current action being process
 * @returns new state, never modifies the previous state.
 */
export function searchReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}

// selector, put logic to select in reducer instead of component
export const getSearchQuery = (state: RootState) => state.search;

// action
export const SET_SEARCH = 'search/SET_SEARCH';

// action creator, public api for modifying the store
export const setSearch = (search: string) => ({
  type: SET_SEARCH,
  payload: search,
});
