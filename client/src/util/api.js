import axios from "axios";

const LoginUser = (userData) => {
  return axios.post('http://localhost:8080/api/users/login',userData)
}

const Register = (userData) => {
  return axios.post('http://localhost:8080/api/users/register', userData)
}

const helloworldtest = () => {
  return axios.get('http://localhost:8080/api/helloworld')
}

const searchByEmail = (email) => {
  return axios.get(`http://localhost:8080/api/users/findByEmail/${email}`)
}

const setPreferences = (userID, userData) => {
  return axios.put('http://localhost:8080/api/filter/update/' + userID, userData)
}

const getPreferences = (userID) => {
  return axios.get('http://localhost:8080/api/filter/get/' + userID);
}

const getName = (userID) => {
  return axios.get('http://localhost:8080/api/users/' + userID);
}
export {
    LoginUser,
    Register,
    searchByEmail,
    helloworldtest,
    setPreferences,
    getPreferences,
    getName
}

