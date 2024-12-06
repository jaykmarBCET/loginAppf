import axiosInstance from './axiosInstance';
import axios, { Axios } from 'axios';

export const register = async (data) => {
  try {
    const response = await axiosInstance.post('/register', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const login =  async (data) => {
  
    try {
        const  response = await axios.post('/api/v1/users/login', data,{
          headers: {
            'Content-Type': 'application/json',
          }
        })
        return response.data;

    } catch (error) {
        throw  error.response?.data || error.message;

    }
}



export const isValidUserName = async(data) =>{
  try{
    const response = await axios.post('/api/v1/users/isvalid-username', data,{
      headers:{
        'Content-Type': 'application/json',
      }
    })
    return response.data;
  }catch(error){
    return  error.response?.data || error.message;

  }
}

export const currentUser = async()=>{
  try {
    const response = await axios.get('/api/v1/users/current-user', {
      withCredentials: true, // This is crucial for sending cookies with the request
    });
    return response?.data
  } catch (error) {
    return  error.response?.data || error.message;

  }
}

export const logout = async()=>{
  try {
    const response = await axios.post('/api/v1/users/logout',{
      withCredentials:true
    })
    return  response.data;

  } catch (error) {
    return   error.response?.data || error.message;

  }
}

export const refreshToken  = async()=>{
  try {
    const response = await axios.get('/api/v1/users/refresh-token',{
      withCredentials:true
    })
    return response.data;
    
  } catch (error) {
    return    error.response?.data || error.message;

  }
}

export const changeName = async(data)=>{
  const response = await axios.patch("/api/v1/users/change-name",data,{
    withCredentials:true
  })
  return response.data;
}

export const changeAvatar = async (data)=>{
  const response = await axiosInstance.patch('/change-avatar',data,{
    withCredentials:true
  })
  return response.data
}

export const changeCoverImage = async ( data)=>{
  const response = await axiosInstance.patch('/change-cover-image',data,{
    withCredentials:true
  })
  return response.data
}
// todo list api here

export const getTodoList = async ()=>{
  try {
    const response = await axios.get('/api/v1/users/dashboard/get-list',{
      withCredentials:true
    });
    return response.data;
    
  } catch (error) {
    return error.response?.data || error.message;
  }
}

export const updateTodo = async (data)=>{
  try {
    const response = await axios.patch('/api/v1/users/dashboard/update-list',data,{
      withCredentials:true
    });
    return response.data;
    
  } catch (error) {
    return error.response?.data || error.message;
  }
}

export const deleteTodo = async (data)=>{
  try {
    const response = await axios.delete('/api/v1/users/dashboard/delete-list',data,{
      withCredentials:true,
    })
    return response.data;
  } catch (error) {
    return error.response?.data || error.message;
  }
}

export const addTodo = async (data)=>{
  try {
    const response = await axios.post('/api/v1/users/dashboard/add-list',data,{
      withCredentials:true,
    })
    return response.data;
  } catch (error) {
    return error.response?.data || error.message;
  }
}