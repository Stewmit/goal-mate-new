import { IUserData } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  user: IUserData | undefined;
}

const initialState: IUserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserData | undefined>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
