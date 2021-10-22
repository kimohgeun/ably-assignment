import {
  combineReducers,
  configureStore,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const combinedReducer = combineReducers({});

const reducer: Reducer = (state: RootState, action: AnyAction) => {
  action.type === "RESET" && (state = undefined);
  return combinedReducer(state, action);
};

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
