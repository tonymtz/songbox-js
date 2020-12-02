const slideBarReducer = (state = 0, { type, payload = 0 }) => {
  switch (type) {
    case 'CHANGE_SLIDEBAR_INDEX':
      return payload;

    default:
      return state;
  }
};

export default slideBarReducer;
