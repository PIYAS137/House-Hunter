import axios from 'axios';

const publicAxios = axios.create({
    baseURL : 'https://house-hunter-backend-eight.vercel.app'
})

const usePublicAxios = () => {
  return publicAxios;
}

export default usePublicAxios