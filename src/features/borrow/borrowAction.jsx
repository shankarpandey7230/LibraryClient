import { toast } from "react-toastify";
import { fetchAllBorrowsApi, patchReturnBookApi } from "./borrowAPI";
import { setAllBorrows, setMyBorrows } from "./borrowSlice";

export const getAllBorrowsAction = (isAdmin) => async (dispatch) => {
  // const AllBurrows = await fetchAllBorrowsApi();
  const pending = fetchAllBorrowsApi(isAdmin);
  toast.promise(pending, { pending: "Please wait" });
  const { payload } = await pending;
  // console.log(status, payload, message);
  isAdmin ? dispatch(setAllBorrows(payload)) : dispatch(setMyBorrows(payload));
};

export const returnBorrowsAction =
  ({ _id, isAdmin }) =>
  async (dispatch) => {
    const pending = patchReturnBookApi({ _id });
    toast.promise(pending, { pending: "Please wait" });
    const { status, message } = await pending;
    toast[status]?.(message);
    if (status === "success") {
      dispatch(getAllBorrowsAction(isAdmin));
    }
  };
