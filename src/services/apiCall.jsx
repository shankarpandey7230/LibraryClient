import axios from "axios";
import { toast } from "react-toastify";
import { fetchNewAccessJWTAPI } from "./authApi";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
export const apiProcess = async ({
  url,
  method,
  payload,
  showToast,
  isPrivateCall,
  isRefreshJWT,
}) => {
  try {
    const headers = {};
    if (isPrivateCall) {
      const token = isRefreshJWT ? getRefreshJWT() : getAccessJWT();
      headers.authorization = "bearer " + token;
    }
    const responsePending = axios({
      url,
      method,
      data: payload,
      headers,
    });
    // show toast message
    if (showToast) {
      toast.promise(responsePending, {
        pending: "Please wait ...",
      });
    }
    const { data } = await responsePending;
    showToast && toast[data.status](data.message);
    return data;
  } catch (error) {
    const msg = error?.response?.data?.message || error.message;
    showToast && toast.error(msg);
    // console.log(msg);
    if (error.status === 401 && msg === "jwt expired") {
      // call api to get new accessJWT
      const { payload } = await fetchNewAccessJWTAPI();
      if (payload) {
        sessionStorage.setItem("accessJWT", payload);
        return apiProcess({
          url,
          method,
          payload,
          showToast,
          isPrivateCall,
          isRefreshJWT,
        });
      }
    } else {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
    }

    return {
      status: "error",
      message: msg,
    };
  }
};
