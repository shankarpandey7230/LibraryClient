import { adminFetchAllBookAPI, postNewBookAPI } from "./bookAPI";
import { setBook } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookAPI(payload);
  console.log(book);
};

export const adminFetchBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBookAPI();
  status === "success" && dispatch(setBook(payload));
};
