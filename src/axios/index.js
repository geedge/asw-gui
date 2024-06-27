import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '',
  timeout: undefined,
}) 

export default axiosInstance
