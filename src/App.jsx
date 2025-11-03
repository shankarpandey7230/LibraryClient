import "./App.css";

import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPublicBookAction } from "@features/books/bookAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch all the book data and mount it in the redux
    console.log("fetching public books");
    dispatch(fetchAllPublicBookAction());
  }, [dispatch]);
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
