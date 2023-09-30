import { privateRoutes, publicRoutes, RouteNames } from "@/router";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRouter = () => {
  const isAuth = false;

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            ></Route>
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
      <Route path="*" element={<Navigate to={RouteNames.DEFAULT} />} />
    </Routes>
  );
};

export default AppRouter;
