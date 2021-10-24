import { useUser, useToast } from "~/hooks/store";
import { useQuery } from "react-query";
import { userAPI } from "~/apis";
import { AxiosError } from "axios";
import store from "~/store";

const useGetUser = () => {
  const { token } = useUser();
  const { openToast } = useToast();

  return useQuery(["userGet"], () => userAPI.getUser(token), {
    retry: 0,
    onError: (error: AxiosError<any>) => {
      const { message } = error?.response?.data?.error;
      localStorage.removeItem("ABLY_TOKEN");
      store.dispatch({ type: "RESET_STATE" });
      openToast({
        severity: "error",
        message: message,
      });
    },
  });
};

export default useGetUser;
