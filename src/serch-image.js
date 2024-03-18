import axios from 'axios';

const Authorization = `F_HtHg4nYIpsjhCrcv_tKDYlijFfGHg4TIW2DaNuSOM`;

export const searchImage = async (query) => {
const response = await axios.get(
  `https://api.unsplash.com/photos/?client_id=${Authorization}`,{
   params: {query: query  },
  },);
  return response.data.hits
}
