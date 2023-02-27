import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://novatualizapp.herokuapp.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "'https://painel-blush.vercel.app",
  }, 
  timeout: 3000,
})

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('Auth');
    config.headers.Authorization = token;

    return config;
});

// export const loadToken = (token) => {
//   try{
//     instance.defaults.headers.common['Authorization'] = token ? 'Bearer ' + token : null
//   }catch(err){
//     console.log('Erro token', err)
//   }
// }

export default instance
