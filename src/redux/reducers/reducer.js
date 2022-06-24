const INITIAL_STATE = {
  nome: '',
  email: '',
  searchField: '',
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
  default:
    return state;
  }
}
