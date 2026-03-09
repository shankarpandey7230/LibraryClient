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
import AllBooks from "@pages/books/AllBooks";
import Search from "@pages/books/Search";
import CartPage from "@pages/cart/CartPage";
import ThankyouCartPage from "@pages/cart/ThankyouCartPage";
import BurrowTable from "@components/tables/BurrowTable";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="all-books" element={<AllBooks />} />
        <Route path="search" element={<Search />} />
        <Route path="books/:slug" element={<BookLandingPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="activate-user" element={<ActivateUser />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Route>

      {/* private Pages */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book/:_id" element={<EditBookPage />} />
        <Route path="reviews" element={<ReviewPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="borrow-history" element={<BorrowPage />} />
        <Route path="my-borrow-history" element={<BorrowPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="thank-you" element={<ThankyouCartPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
