import { createSlice } from "@reduxjs/toolkit";

interface UserStateInterface {
  isAuth: boolean;
  user: any;
}

interface UserActionInterface {
  type: string;
  payload?: any;
}

const initialState: UserStateInterface = {
  isAuth: false,
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // authorize(state: UserStateInterface, action: UserActionInterface) {
    //   state.isAuth = action.payload;
    // },
    // setUser(state: UserStateInterface, action: UserActionInterface) {
    //   state.user = action.payload;
    // },
  },
});

// export const { authorize, setUser } = userSlice.actions;

export default userSlice.reducer;
