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
import { useSelector } from "react-redux";

const noAccess = <h1>No permission granted for this user</h1>;
const AppRoutes = () => {
  const { user } = useSelector((state) => state.userInfo);
  const isAdmin = user.role === "admin";
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
        <Route
          path="my-borrow-history"
          element={<BorrowPage isAdmin={false} />}
        />
        <Route path="books" element={isAdmin ? <Books /> : noAccess} />
        <Route path="new-book" element={isAdmin ? <NewBookPage /> : noAccess} />
        <Route
          path="edit-book/:_id"
          element={isAdmin ? <EditBookPage /> : noAccess}
        />
        <Route path="reviews" element={isAdmin ? <ReviewPage /> : noAccess} />
        <Route path="all" element={isAdmin ? <UserPage /> : noAccess} />
        <Route
          path="borrow-history"
          element={isAdmin ? <BorrowPage isAdmin={true} /> : noAccess}
        />

        <Route path="profile" element={<Profile />} />
        <Route path="thank-you" element={<ThankyouCartPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
