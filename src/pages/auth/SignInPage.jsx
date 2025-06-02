import { Card, Form, Button } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { signInUserAPI } from "../../services/authApi";

import { fetchUserAction } from "../../features/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const initialState = {};

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, handleOnChange } = useForm(initialState);
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?._id && navigate("/user");
  }, [user?._id, navigate]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      const { payload } = await signInUserAPI(form);
      // console.log(form);
      if (payload?.accessJWT) {
        sessionStorage.setItem("accessJWT", payload.accessJWT);
        localStorage.setItem("refreshJWT", payload.refreshJWT);

        // call api to get the user
        dispatch(fetchUserAction());
      }

      //  to do next is get the user and redirect to dashboard
    } else {
      alert("Please fill all the inputs");
    }
  };
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
