const INITIAL_STATE = {
  nome: '',
  email: '',
  searchField: '',
  favorites: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case 'SET_LOGIN':
    return {
      ...state,
      ...payload,
    };
  case 'SEARCH_FIELD':
    return {
      ...state,
      searchField: payload,
    };
  case 'ADD_FAVORITE':
    return {
      ...state,
      favorites: [...state.favorites, payload],
    };
  case 'REMOVE_FAVORITE':
    return {
      ...state,
      favorites: state.favorites
        .filter((favorite) => favorite.trackId !== payload.trackId),
    };
  default:
    return state;
  }
}
