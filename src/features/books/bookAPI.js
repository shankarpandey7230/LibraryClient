import { apiProcess } from "@services/apiCall";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;

const bookApiEP = apiBaseUrl + "/api/v1/books";

// call api process to fetch user

export const postNewBookAPI = async (payload) => {
  const obj = {
    url: bookApiEP,
    method: "post",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcess(obj);

  return result;
};

// for admin
export const adminFetchAllBookAPI = async () => {
  const obj = {
    url: bookApiEP + "/admin",
    method: "get",
    isPrivateCall: true,
  };

  const result = await apiProcess(obj);

  return result;
};
