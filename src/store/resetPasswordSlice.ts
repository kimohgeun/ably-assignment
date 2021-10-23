import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ResetPasswordStep {
  checkEmail,
  checkAuthCode,
  resetPassword,
}

interface ResetPasswordState {
  activeStep: ResetPasswordStep;
  email: string;
  remainMillisecond: number;
  issueToken: string;
  confirmToken: string;
}

const initialState: ResetPasswordState = {
  activeStep: ResetPasswordStep.checkEmail,
  email: "",
  remainMillisecond: 0,
  issueToken: "",
  confirmToken: "",
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setActiveStep: (state, action: PayloadAction<ResetPasswordStep>) => {
      state.activeStep = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setRemainMillisecond: (state, action: PayloadAction<number>) => {
      state.remainMillisecond = action.payload;
    },
    setIssueToken: (state, action: PayloadAction<string>) => {
      state.issueToken = action.payload;
    },
    setConfirmToken: (state, action: PayloadAction<string>) => {
      state.confirmToken = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setActiveStep,
  setEmail,
  setRemainMillisecond,
  setIssueToken,
  setConfirmToken,
  resetState,
} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
