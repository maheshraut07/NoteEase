// Code to fetch token from local storage

// Function to get the token from localStorage
export const getTokenFromStorage = () => {
  const storedToken = localStorage.getItem("userInfo");
  // console.log("storedToken", storedToken);
  if (storedToken) {
    const parsedToken = JSON.parse(storedToken).token;
    // console.log("Parsed token: " + parsedToken);

    return parsedToken;
  }
};
// Code to fetch token from local storage
