import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwtToken');
      console.log(token)
      if (!token) {
        throw new Error('No token found in localStorage');
      }

     const response = await axios.post('http://localhost:3001/api/v1/user/profile', null, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {
      email: null,
      firstName: null,
      lastName: null,
      userName: null,
      createdAt: null,
      updatedAt: null,
      id: null
    },
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.body; 
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
