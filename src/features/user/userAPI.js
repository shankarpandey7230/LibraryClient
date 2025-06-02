import { apiProcess } from "../../services/apiCall";

const apiBaseUrl = "http://localhost:8000";

const userApiEP = apiBaseUrl + "/api/v1/users";

// call api process to fetch user

export const fetchUserAPI = async () => {
  const obj = {
    url: userApiEP + "/profile",
    method: "get",
    showToast: false,
    isPrivateCall: true,
  };
  const result = await apiProcess(obj);

  return result;
};
