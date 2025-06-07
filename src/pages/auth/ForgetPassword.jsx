import React, { useRef, useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import CustomInput from "@/components/customInput/CustomInput";
import Button from "react-bootstrap/Button";
import useForm from "../../hooks/useForm";

const initialState = {};

const ForgetPassword = () => {
  const emailRef = useRef("");
  const [showResetForm, setShowResetForm] = useState(false);
  const { form, passwordErrors, handleOnChange } = useForm(initialState);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    emailRef.current.value = "";
  };
  console.log(form);
  const handlePasswordResetSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
  };
  return (
    <div className="signin-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Forgot Password 🥹🥹🥹 ? </Card.Title>
          <p>Can reset it here....</p>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@email.com"
              passRef={emailRef}
            />

            <div className="d-grid">
              <Button type="submit">Request OTP</Button>
            </div>
          </Form>
          {showResetForm && (
            <>
              <hr />
              {/* form when OTP is requested */}
              <div>
                <Alert variant="success">message</Alert>
                <Form onSubmit={handlePasswordResetSubmit}>
                  <CustomInput
                    label="OTP"
                    name="otp"
                    type="number"
                    required
                    placeholder="1243141"
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    required
                    placeholder="***"
                    onChange={handleOnChange}
                  />

                  <CustomInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="***"
                    onChange={handleOnChange}
                  />
                  <div className="py-3">
                    <ul className="text-danger">
                      {passwordErrors.length > 0 &&
                        passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
                    </ul>
                  </div>
                  <div className="d-grid">
                    <Button type="submit" disabled={passwordErrors.length}>
                      Reset Password
                    </Button>
                  </div>
                </Form>
              </div>
            </>
          )}

          <div className="text-center my-3">
            Ready to Login <a href="/forget-password">Login Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgetPassword;
