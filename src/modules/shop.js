
export const SEARCHWITHQUERY = 'shop/SEARCH_WITH_QUERY';

const initialState = {
  SearchQuery: ''
}

const shopReducer = (state = initialState, action) => {

  const handleSearch = (state, query) => {

    return Object.assign({}, state, {
      SearchQuery: query
    })
  }

  switch (action.type) {

    case SEARCHWITHQUERY:
      return handleSearch(state, action.payload);

    default:
      return state;
  }
};

export default shopReducer;
