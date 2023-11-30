const getTokenAuth = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  return token;
};

const tokenLoader = () => {
  return getTokenAuth();
};

export { getTokenAuth, tokenLoader };
