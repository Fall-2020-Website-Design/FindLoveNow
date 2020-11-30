import axios from "axios";

const LoginUser = (userData) => {
  return axios.post('/api/users/login',userData)
}

const Register = (userData) => {
  return axios.post('/api/users/register', userData)
}

const helloworldtest = () => {
  return axios.get('/api/helloworld')
}

const searchByEmail = (email) => {
  return axios.get(`/api/users/findByEmail/${email}`)
}

const setPreferences = (userID, userData) => {
  return axios.put('/api/filter/update/' + userID, userData)
}

const getPreferences = (userID) => {
  return axios.get('/api/filter/get/' + userID);
}

const getName = (userID) => {
  return axios.get('/api/users/' + userID);
}

const uploadImage = (userID, file) => {
  return axios.post(`/api/image/upload/${userID}`, file)
}

const response = (matchData) => {
  return axios.post('/api/match/response', matchData);
}

const findMatch = (userID) => {
  return axios.get(`/api/match/find/${userID}`);
}

const previousMatch = (userID, previousID) => {
  return axios.get(`/api/match/previous?userID=${userID}&previousID=${previousID}`);
}

const getallMatches = (userID) => {
  return axios.get(`/api/match/allmatches/${userID}`)
}

const setProfile = (userData) => {
  return axios.put('/api/profile/update/', userData );
}

const getProfile = (userID) => {
  return axios.get(`/api/profile/${userID}`);
}

const getUserImages = (userID) => {
  return axios.get(`/api/image/get/${userID}`);
}

const formPreference = (userData) => {
  return axios.put('/api/filter/form', userData);
}

const getLastLogin = (userID) => {
  return axios.get(`/api/users/lastLogin/${userID}`)
} 

const updateLastLogin = (userID) => {
  return axios.put(`/api/users/updateLoginTime/${userID}`)
}

const deleteImage = (userID) => {
  return axios.delete(`/api/image/delete/${userID}`);
}


export {
    LoginUser,
    Register,
    searchByEmail,
    helloworldtest,
    setPreferences,
    getPreferences,
    getName,
    uploadImage,
    response,
    findMatch,
    previousMatch,
    getallMatches,
    setProfile,
    getProfile,
    getUserImages,
    formPreference,
    getLastLogin,
    updateLastLogin,
    deleteImage
}

