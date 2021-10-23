import { AxiosResponse } from "axios";
import { customAxios } from "~/utils";

const API_ENDPOINT = "/api/reset-password";

interface CheckEmailResponse {
  issueToken: string;
  remainMillisecond: number;
}

interface CheckAuthCodeResponse {
  confirmToken: string;
}

const checkEmail = async function <T = CheckEmailResponse>(
  email: string,
): Promise<T> {
  const url = `${API_ENDPOINT}?email=${email}`;
  const response: AxiosResponse<T> = await customAxios.get(url);
  return response.data;
};

const checkAuthCode = async function <T = CheckAuthCodeResponse>(data: {
  email: string;
  authCode: string;
  issueToken: string;
}): Promise<T> {
  const response: AxiosResponse<T> = await customAxios.post(API_ENDPOINT, data);
  return response.data;
};

const resetPassword = async function (data: {
  email: string;
  confirmToken: string;
  newPassword: string;
  newPasswordConfirm: string;
}): Promise<AxiosResponse> {
  return await customAxios.patch(API_ENDPOINT, data);
};

export default {
  checkEmail,
  checkAuthCode,
  resetPassword,
};
