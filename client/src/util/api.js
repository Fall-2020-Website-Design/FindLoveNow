import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

// check if the user is loggedIn
const isLoggedIn = (user) => {
    if (localStorage.getItem("jwtToken"))  {
        const token = localStorage.getItem("jwtToken")
        setAuthToken(token)
        // Decode token and get user info and exp
        const decoded = jwt_decode(token);
        console.log(decoded)
        const currentTime = Date.now() / 1000; // to get in milliseconds
        if (decoded.exp < currentTime) {
          // Logout user
          user = {
            userID: null,
            name: "",
            email: "",
            isAuthenticated: false
          }
          return user 
           // window.location.href = "./login";
        }
      }
    }

const LogoutUser = (user) => {
  localStorage.removeItem("jwtToken")
  user = {
    userID: null,
    name: "",
    email: "",
    isAuthenticated: false
  }
  setAuthToken(false)
  window.location.href = "./login"
}

const LoginUser = (userData) => {
  return axios.post('/api/users/login',userData)
}

const Register = (userData) => {
  return axios.post('/api/users/register', userData)
}

export {
    setAuthToken,
    isLoggedIn,
    LogoutUser,
    LoginUser,
    Register
}

