export const header = () => {
  return (
    localStorage.accessToken && {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    }
  );
};

export const refreshTokenHeader = () => {
  return (
    localStorage.refreshToken && {
      headers: {
        Authorization: `Bearer ${localStorage.refreshToken}`,
      },
    }
  );
};
