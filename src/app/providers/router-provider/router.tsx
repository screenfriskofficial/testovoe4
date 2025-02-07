import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../layouts/main-layout";
import { SuspenseLoading, Routes } from "../../../shared";
import React from "react";

const HomePage = SuspenseLoading(
  React.lazy(() => import("../../../pages/home")),
);

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <MainLayout />,
    children: [{ path: Routes.HOME, element: <HomePage /> }],
  },
]);
