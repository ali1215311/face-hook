import { actions } from "../actions";
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state, action) => {
  switch (action.type) {
    case actions.posts.DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actions.posts.DATA_FETCHED:
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    case actions.posts.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export { initialState, postReducer };
