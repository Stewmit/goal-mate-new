import { useAppSelector } from "@/hooks/redux";
import { privateRoutes, publicRoutes, RouteNames } from "@/router";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRouter = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <Routes>
      {user !== undefined &&
        privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      {publicRoutes.map((route) => (
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
