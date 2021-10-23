import { AxiosResponse } from "axios";
import { customAxios } from "~/utils";

interface LoginResponse {
  accessToken: string;
}

interface LogoutResponse {
  lastConnectedAt: Date;
}

const login = async function <T = LoginResponse>(data: {
  email: string;
  password: string;
}): Promise<T> {
  const response: AxiosResponse<T> = await customAxios.post("/api/login", data);
  return response.data;
};

const logout = async function <T = LogoutResponse>(token: string): Promise<T> {
  const response: AxiosResponse<T> = await customAxios.post(
    "/api/logout",
    null,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return response.data;
};

export default {
  login,
  logout,
};
