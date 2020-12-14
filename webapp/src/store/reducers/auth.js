const authReducer = (state = false, { type, payload = false }) => {
  switch (type) {
    case 'CHANGED_AUTH':
      return payload;

    default:
      return state;
  }
};

export default authReducer;
