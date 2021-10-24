import { AxiosResponse } from "axios";
import { customAxios } from "~/utils";

interface UserResponse {
  name: string;
  email: string;
  profileImage: string;
  lastConnectedAt: Date;
}

const getUser = async function <T = UserResponse>(token: string): Promise<T> {
  const response: AxiosResponse<T> = await customAxios.get("/api/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default {
  getUser,
};
