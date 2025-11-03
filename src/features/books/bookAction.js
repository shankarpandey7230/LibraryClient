import {
  adminFetchAllBookAPI,
  fetchAllPublicBookAPI,
  postNewBookAPI,
} from "./bookAPI";
import { setBook, setPublicBooks } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookAPI(payload);
  console.log(book);
};

export const adminFetchBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBookAPI();
  status === "success" && dispatch(setBook(payload));
};

export const fetchAllPublicBookAction = () => async (dispatch) => {
  const { status, payload } = await fetchAllPublicBookAPI();
  // console.log(status, payload);
  // console.log("📦 API result:", { status, payload });
  status === "success" && dispatch(setPublicBooks(payload));
};
