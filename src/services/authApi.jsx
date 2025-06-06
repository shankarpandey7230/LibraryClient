// all api call related to signup, login, token

import { apiProcess } from "./apiCall";

const apiBaseUrl = "http://localhost:8000";

const authApiEP = apiBaseUrl + "/api/v1/auth";

export const signUpNewUserApi = async (payload) => {
  const obj = {
    url: authApiEP + "/register",
    method: "post",
    payload,
    showToast: true,
  };
  const result = await apiProcess(obj);
  console.log(result);
};

export const activateNewUserApi = async (payload) => {
  const obj = {
    url: authApiEP + "/activate-user",
    method: "post",
    payload,
  };

  return apiProcess(obj);
};

export const signInUserAPI = async (payload) => {
  const obj = {
    url: authApiEP + "/login",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcess(obj);
};

// request to fetch new accessJWT api
export const fetchNewAccessJWTAPI = async () => {
  const obj = {
    url: authApiEP + "/renew-jwt",
    method: "get",
    isPrivateCall: true,
    isRefreshJWT: true,
  };
  return apiProcess(obj);
};

// logOutUser

export const logOutAPI = async () => {
  const obj = {
    url: authApiEP + "/logout",
    method: "get",
    isPrivateCall: true,
  };
  return apiProcess(obj);
};
