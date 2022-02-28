import { createSlice } from "@reduxjs/toolkit";

// when app starts keep everything empty
const initialState = {
  name: "",
  photo: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // when user logs in remember all user details
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    //when users signs out delete all memory stored of user
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;

export const selectUserEmail = (state) => state.user.email;

export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
