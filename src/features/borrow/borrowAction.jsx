import { toast } from "react-toastify";
import { fetchAllBorrowsApi } from "./borrowAPI";
import { setAllBorrows, setMyBorrows } from "./borrowSlice";

export const getAllBorrowsAction = (isAdmin) => async (dispatch) => {
  // const AllBurrows = await fetchAllBorrowsApi();
  const pending = fetchAllBorrowsApi(isAdmin);
  // toast.promise({ pending: "Please wait" });
  const { status, payload, message } = await pending;
  console.log(status, payload, message);
  isAdmin ? dispatch(setAllBorrows(payload)) : dispatch(setMyBorrows(payload));
};
