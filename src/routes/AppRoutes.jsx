import React from "react";
import { Route, Routes } from "react-router";
import {
  Dashboard,
  HomePage,
  SignInPage,
  SignUpPage,
  ForgetPassword,
  BookLandingPage,
  ActivateUser,
  EditBookPage,
  NewBookPage,
  UserPage,
  ReviewPage,
  Books,
  Profile,
  BorrowPage,
} from "../pages";
import DefaultLayout from "@components/layouts/DefaultLayout";
import UserLayout from "@components/layouts/UserLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="activate-user" element={<ActivateUser />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forget-password" element={<ForgetPassword />} />
      </Route>
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book/:_id" element={<EditBookPage />} />
        <Route path="reviews" element={<ReviewPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="borrow-history" element={<BorrowPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
