import { useUser, useToast } from "~/hooks/store";
import { useMutation } from "react-query";
import { authAPI } from "~/apis";
import { AxiosError } from "axios";
import store from "~/store";

const useLogout = () => {
  const { token } = useUser();
  const { openToast } = useToast();

  return useMutation(["logout"], () => authAPI.logout(token), {
    onSuccess: (data) => {
      const { lastConnectedAt } = data;
      localStorage.setItem("LAST_CONNECTED_AT", String(lastConnectedAt));
      localStorage.removeItem("ABLY_TOKEN");
      store.dispatch({ type: "RESET_STATE" });
    },
    onError: (error: AxiosError<any>) => {
      const { message } = error?.response?.data?.error;
      openToast({
        severity: "error",
        message: message,
      });
    },
  });
};

export default useLogout;
