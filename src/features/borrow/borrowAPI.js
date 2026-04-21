import { apiProcess } from "@services/apiCall";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;

const borrowApiEP = apiBaseUrl + "/api/v1/burrows";

// fetch borrowed Books for Admin

// for admin only
export const fetchAllBorrowsApi = async (isAdmin) => {
  const path = isAdmin ? "/admin" : "/user";
  const obj = {
    url: borrowApiEP + path,
    method: "get",
    isPrivateCall: true,
  };
  const result = await apiProcess(obj);

  return result;
};
