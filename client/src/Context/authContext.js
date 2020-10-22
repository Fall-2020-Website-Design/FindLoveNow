import React, { Component , createContext, useContext } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

// export const AuthProvider = AuthContext.Provider
class AuthProvider extends Component {
    state = {
        userID: null,
        email: "",
        isAuthenicated: false, 
    }


    checkTokenExist = () => {
        const existingTokens = JSON.parse(localStorage.getItem("jwtToken"));
        if (existingTokens) {
            return true
        }
        else {
            return false 
        }
    }


    setTokens = (data) => {
      localStorage.setItem("jwtToken", JSON.stringify(data));
      if (localStorage.getItem("jwtToken")) {
          this.setState({
              isAuthenicated : true
          })
      }
    }

    setAuthToken = (token) => {
    if (token) {
      // Apply authorization token to every request if logged in
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };

    setUser = ( decoded) => {
        this.setState(prevState => { 
            return { userID: decoded.id, 
            email: decoded.email,
            isAuthenicated : true,
            }
         })
      }
    
      render() {
        const { children } = this.props
        const   { userID, email, isAuthenicated }   = this.state
        // do I need setUser ???? I have no idea yet but I have a feeling I do not.
        const { setUser , setTokens , checkTokenExist, setAuthToken } = this
    
        return (
          <AuthContext.Provider
            value={{
              userID, email, isAuthenicated,
              setUser,
              setTokens,
              checkTokenExist,
              setAuthToken
            }}
          >
            {children}
          </AuthContext.Provider>
        )
      }
}
export const AuthConsumer = AuthContext.Consumer

export default AuthContext;
export {AuthProvider}
// export function useAuth() {
//   return useContext(AuthContext);
// }

