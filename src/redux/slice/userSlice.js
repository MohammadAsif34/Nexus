import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserAPI } from "../../api/APIs";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    setUser: (state, action) => {
      console.log("payload", action.payload);
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    clearUser: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.user = action.payload.data;
        state.state.loading = false;
      })
      .addCase(fetchUser.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export const fetchUser = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchUserAPI();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "something went wrong!");
    }
  },
);

export const { setAuthenticated, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
