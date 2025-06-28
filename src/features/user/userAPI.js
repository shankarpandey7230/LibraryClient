import { apiProcess } from "@services/apiCall";

// const apiBaseUrl = "http://localhost:8000";
// console.log("Base URL:", import.meta.env.VITE_BASE_API_URL);

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
// console.log("VITE_BASE_API_URL", import.meta.env.VITE_BASE_API_URL);
// const userApiEP = `${apiBaseUrl}/api/v1/users`;
const userApiEP = apiBaseUrl + "/api/v1/users";

// call api process to fetch user

export const fetchUserAPI = async () => {
  const obj = {
    url: userApiEP + "/profile",
    method: "get",
    showToast: false,
    isPrivateCall: true,
  };
  // console.log("Calling:", userApiEP + "/profile");

  const result = await apiProcess(obj);

  return result;
};
