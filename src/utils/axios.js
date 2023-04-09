import axios from 'axios';

 const axiosInstance =  axios.create({
    baseURL: 'https://video-player-server.onrender.com',
  });
  
  export default axiosInstance;