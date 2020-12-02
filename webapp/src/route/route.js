const getRoute = () => {
  const appRoute = '/app';
  const path = window.location.pathname;

  const folderRoute = path.replace(appRoute, '');
  const finalRoute = folderRoute || '/';

  return finalRoute;
};

export default getRoute;
