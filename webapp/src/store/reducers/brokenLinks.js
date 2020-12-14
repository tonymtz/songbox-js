const brokenLinksReducer = (state = [], { type, payload }) => {
  switch (type) {
  case 'ADD_BROKEN_LINK':
    return [...state, payload];

  default:
    return state;
  }
};

export default brokenLinksReducer;
