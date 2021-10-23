import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "~/store";
import { setToken } from "~/store/userSlice";

const useUser = () => {
  const { token } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  return {
    token,
    setToken: useCallback(
      (payload: string) => {
        localStorage.setItem("ABLY_TOKEN", payload);
        dispatch(setToken(payload));
      },
      [dispatch],
    ),
  };
};

export default useUser;
