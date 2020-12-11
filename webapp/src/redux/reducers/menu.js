const initialState = {
  open: false,
  file: {},
};

const menuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_MENU':
      return { ...state, open: payload };

    default:
      return state;
  }
};

export default menuReducer;
