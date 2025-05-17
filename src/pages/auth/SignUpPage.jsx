import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/customInput/CustomInput";
import { signUpInput } from "../../assets/customInput/userSignupInput";
import useForm from "../../hooks/useForm";
import { signUpNewUserApi } from "../../services/authApi";

const initialState = {};
const SignUpPage = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password)
      return alert("Password do not match");

    const result = await signUpNewUserApi(rest);
    console.log(result);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        style={{ width: "450px" }}
        className="card p-5 mt-5 shadow-lg"
        onSubmit={handleOnSubmit}
      >
        <h1>Let Get into Library</h1>
        {signUpInput.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
