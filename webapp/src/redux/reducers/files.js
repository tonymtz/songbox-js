const filesRoutesReducer = (state = [], { type, payload = { route: '', files: [] } }) => {
  switch (type) {
    case 'ADD_FILE_ROUTE': {
      const files = {
        ...payload,
      };
      return [...state, files];
    }

    case 'UPDATE_FILE_ROUTE': {
      const index = state.findIndex((files) => files.route === payload.route);
      state.splice(index, 1);

      const updatedRoute = {
        ...payload,
      };

      return [...state, updatedRoute];
    }
    default:
      return state;
  }
};

export default filesRoutesReducer;
