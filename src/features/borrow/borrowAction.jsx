import { toast } from "react-toastify";
import { fetchAllBorrowsApi } from "./borrowAPI";
import { setAllBorrows } from "./borrowSlice";

export const getAllBorrowsAction = () => async (dispatch) => {
  // const AllBurrows = await fetchAllBorrowsApi();
  const pending = fetchAllBorrowsApi();
  // toast.promise({ pending: "Please wait" });
  const { status, payload, message } = await pending;
  console.log(status, payload, message);
  dispatch(setAllBorrows(payload));
};
