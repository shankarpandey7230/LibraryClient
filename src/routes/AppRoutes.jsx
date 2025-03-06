import React from "react";

import { Routes, Route } from "react-router-dom";
import {
  Home,
  DashBoard,
  SignIn,
  SignUp,
  ForgetPassword,
  Book,
  BookPage,
  NewBook,
  EditBook,
  ReviewPage,
  UserPage,
  Borrow,
  Profile,
} from "../pages";
import DefaultLayout from "@components/layout/DefaultLayout";
import UserLayout from "@components/layout/UserLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgetPassword />} />
      </Route>

      {/* private routes */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashBoard />} />
        <Route path="books" element={<Book />} />
        <Route path="book-page" element={<BookPage />} />
        <Route path="borrow" element={<Borrow />} />
        <Route path="new-book" element={<NewBook />} />
        <Route path="edit-book" element={<EditBook />} />
        <Route path="review-page" element={<ReviewPage />} />
        <Route path="user-page" element={<UserPage />} />
        <Route path="profile-page" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
