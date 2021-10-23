import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Severity = "error" | "warning" | "info" | "success";

export interface ToastPayload {
  severity: Severity;
  message: string;
  autoHideDuration?: number;
}

interface ToastState {
  open: boolean;
  severity: Severity;
  message: string;
  autoHideDuration: number;
}

const initialState: ToastState = {
  open: false,
  severity: "error",
  message: "",
  autoHideDuration: 3000,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast: (state, action: PayloadAction<ToastPayload>) => {
      state.open = true;
      state.severity = action.payload.severity;
      state.message = action.payload.message;
      action.payload.autoHideDuration &&
        (state.autoHideDuration = action.payload.autoHideDuration);
    },
    closeToast: (state) => {
      state.open = false;
      state.autoHideDuration = 3000;
    },
  },
});

export const { openToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer;
