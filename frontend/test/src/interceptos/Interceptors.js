// import axios from "axios"

// export const api = axios.create({
//     baseURL:'http://localhost:3000'
//   })
//   api.interceptors.request.use((config)=>{
//     const accessToken=localStorage.getItem('access')
//     if (accessToken){
//       config.headers.Authorization=`Bearer ${accessToken}`
//       return config
//     }}
//     ,(error) => {
//       console.error("Error in request interceptor:", error);
//       return Promise.reject(error);
//     }
//   )

//   api.interceptors.response.use((response)=>response,(error)=>{
//     console.log(error)
//     if(error.response||error.response.status===401){
//         try{
//             const refreshToken=localStorage.getItem('refresh')
//             const newAccessToken=api.post('http://localhost:3000/newAccessToken',{refresh_token:refreshToken}).then((res)=>res.data.access_token).catch((e)=>console.log(e))
//             localStorage.setItem('access',newAccessToken)
//             error.config.headers.Authorization=`Bearer ${newAccessToken.data.access_token}`;
//             return api(error.config)
//         }
//         catch(error){
//             localStorage.clear()
//             window.location='/'
//             return Promise.reject(error)
//         }
//     }
//     return Promise.reject(error)
//   })
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});


api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.error("Error in request interceptor:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    if (!error.response) {
      console.error("Network Error or Server Not Running");
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      try {
        const refreshToken = localStorage.getItem("refresh");
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        const newAccessTokenResponse = await api.post("/newToken", { refresh_token: refreshToken });
        const newAccessToken = newAccessTokenResponse.data.access_token;

    
        localStorage.setItem("access", newAccessToken);

        
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(error.config);
      } catch (refreshError) {
        console.error("Refresh Token Expired. Redirecting to Login.");
        localStorage.clear();
        window.location = "/"; 
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
