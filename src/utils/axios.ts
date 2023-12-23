import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
const axiosInstance = axios.create({
  baseURL,
  params: {
    apikey: process.env.REACT_APP_API_KEY,
    hash: process.env.REACT_APP_HASH,
    ts: process.env.REACT_APP_TS,
    limit: 30,
  },
})

export default axiosInstance
