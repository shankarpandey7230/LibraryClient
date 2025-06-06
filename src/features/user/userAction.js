import { fetchNewAccessJWTAPI } from "@services/authApi";
import { fetchUserAPI } from "./userAPI";
import { setUser } from "./userSlice";

export const fetchUserAction = () => async (dispatch) => {
  // call api
  const { status, payload } = await fetchUserAPI();

  // receive user
  //  dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
};

export const autoLoginUser = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    dispatch(fetchUserAction());
    return;
  }
  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    // fetch accessJWT
    const { payload } = await fetchNewAccessJWTAPI();
    if (payload) {
      sessionStorage.setItem("accessJWT", payload);
      // dispatch fetchUserAction
      dispatch(fetchUserAction());
    }
  }
};
