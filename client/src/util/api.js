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

const Preferences = (userData) => {
  return axios.put('http://localhost:8080/api/filter/preferences', userData)
}

export {
    LoginUser,
    Register,
    searchByEmail,
    helloworldtest,
    Preferences
}

