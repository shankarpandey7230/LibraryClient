import { apiProcess } from "@services/apiCall";

// const apiBaseUrl = "http://localhost:8000";
// console.log("Base URL:", import.meta.env.VITE_BASE_API_URL);

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
// console.log("VITE_BASE_API_URL", import.meta.env.VITE_BASE_API_URL);
// const burrowApiEP = `${apiBaseUrl}/api/v1/users`;
const burrowApiEP = apiBaseUrl + "/api/v1/burrows";

// call api process to fetch user

export const postBurrowApi = async (payload) => {
  const obj = {
    url: burrowApiEP,
    method: "post",
    showToast: false,
    isPrivateCall: true,
    payload,
  };
  // console.log("Calling:", burrowApiEP + "/profile");

  const result = await apiProcess(obj);

  return result;
};
