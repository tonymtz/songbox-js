let isInitialized;

export const initErrorLogger = () => {
  if (process.env.NODE_ENV === 'development') {
    console.info('Development mode');
  } else {
    console.info('Logger loaded');
    isInitialized = true;
  }
};

export const logError = (error) => {
  if (isInitialized) {
    // replace this with an actual logger
    console.error(error);
  } else {
    console.error(error);
  }
};
