import React, { useState } from "react";
import { useEffect } from "react";
import { validator } from "../utils/validatePassword";

const handleOnChange = ({ e, form, setForm }) => {
  let { name, value, checked } = e.target;
  if (name === "status") {
    console.log(name, value, checked);
    value = checked ? "active" : "inactive";
  }
  setForm({
    ...form,
    [name]: value,
  });
};

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [passwordErrors, setPasswordErrors] = useState([]);

  // when password and confirmPassword changes

  useEffect(() => {
    const errorArg = validator(form.password, form.confirmPassword);
    setPasswordErrors(errorArg);
  }, [form.password, form.confirmPassword]);
  return {
    form,
    setForm,
    passwordErrors,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};

export default useForm;
