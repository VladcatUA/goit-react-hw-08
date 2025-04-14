import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://connections-api.goit.global/";
//отправлять токен для всех авторизаций
const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

//чистка токена
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

//reg

export const register = createAsyncThunk(
  "auth/register",
  async (valueForm, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", valueForm);
      // clearAuthHeader();
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// email: "romany0507306677@gmail.com";
// name: "yuliia";
// password: "7654321a";

//name: "Yuliia Romanenko", email: "rom77@gmail.com", password: "777777777"}

//"gggggggg", email: "gffgfhf@gmail.com", password: "888888888

//name: "111111ss", email: "111ss@gmail.com", password: "44444444"

//post
export const logIn = createAsyncThunk(
  "auth/login",
  async (valueFormLogIn, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", valueFormLogIn);
      // clearAuthHeader();
      // //отправлять токен для всех авторизаций
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//logOut
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
//refreshUser
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.auth.token}`);

      const response = await axios.get("/users/current");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      if (reduxState.auth.token === null) {
        return false;
      }
      return reduxState.auth.token !== null;

      // return !!reduxState.auth.token;
    },
  }
);
