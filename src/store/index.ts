import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  combineReducers,
  configureStore,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";
import resetPasswordSlice from "~/store/resetPasswordSlice";
import toastSlice from "~/store/toastSlice";
import userSlice from "~/store/userSlice";

const combinedReducer = combineReducers({
  resetPassword: resetPasswordSlice,
  toast: toastSlice,
  user: userSlice,
});

const reducer: Reducer = (state: RootState, action: AnyAction) => {
  action.type === "RESET_STATE" && (state = {} as RootState);
  return combinedReducer(state, action);
};

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
