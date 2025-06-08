import { Card, Form, Button, Spinner } from "react-bootstrap";
import CustomInput from "@components/customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { signInUserAPI } from "@services/authApi";

import { autoLoginUser, fetchUserAction } from "../../features/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const initialState = {
  email: "ba1a23@gmail.com",
  password: "Asdf!23456",
};

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, handleOnChange } = useForm(initialState);
  const { user } = useSelector((state) => state.userInfo);
  console.log(user);
  const loaderRef = useRef(true);

  useEffect(() => {
    user?._id ? navigate("/user") : dispatch(autoLoginUser());
    if (
      sessionStorage.getItem("accessJWT") ||
      localStorage.getItem("refreshJWT")
    ) {
      setTimeout(() => {
        loaderRef.current = false;
      }, 2000);
    } else {
      loaderRef.current = false;
    }
  }, [user?._id, navigate, dispatch]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (form.email && form.password) {
      const { payload } = await signInUserAPI(form);
      console.log(payload, "login API response");
      // console.log(form);
      if (payload?.accessJWT) {
        sessionStorage.setItem("accessJWT", payload.accessJWT);
        localStorage.setItem("refreshJWT", payload.refreshJWT);
        console.log("accessJWT:", sessionStorage.getItem("accessJWT"));
        console.log("refreshJWT:", localStorage.getItem("refreshJWT"));

        // call api to get the user
        dispatch(fetchUserAction());
      }

      //  to do next is get the user and redirect to dashboard
    } else {
      alert("Please fill all the inputs");
    }
  };
  if (loaderRef.current) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="signin-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Welcome Back To Library</Card.Title>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@email.com"
              value={form.email || ""}
              onChange={handleOnChange}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              required
              value={form.password || ""}
              placeholder="****"
              onChange={handleOnChange}
            />
            <div className="d-grid">
              <Button type="submit">Sign In</Button>
            </div>
          </Form>
          <div className="text-end my-3">
            Forgot Password <a href="/forget-password">Reset Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
