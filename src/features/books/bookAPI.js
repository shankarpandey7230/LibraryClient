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

export const updateBookAPI = async (payload) => {
  const obj = {
    url: bookApiEP,
    method: "put",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcess(obj);
  return result;
};

export const deleteBookAPI = async (_id) => {
  const obj = {
    url: bookApiEP + "/" + _id,
    method: "delete",
    showToast: true,
    isPrivateCall: true,
  };
  const result = await apiProcess(obj);
  return result;
};

// fetch all publicBook API
export const fetchAllPublicBookAPI = async () => {
  const obj = {
    url: bookApiEP,
    method: "get",
  };

  const result = await apiProcess(obj);

  return result;
};
export const fetchSinglePublicBookAPI = async (slug) => {
  const obj = {
    url: bookApiEP + "/public/" + slug,
    method: "get",
  };

  const result = await apiProcess(obj);

  return result;
};
