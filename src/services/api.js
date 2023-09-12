import axios from 'axios';


const api = axios.create({
  // withCredentials: environment.environment !== 'local',
});


export default api;
