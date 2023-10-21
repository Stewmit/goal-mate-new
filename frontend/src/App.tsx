import AppRouter from "@/components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { check } from "./services/api/userAPI";
import { useAppDispatch } from "./hooks/redux";
import { userSlice } from "./store/slices/userSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { setUser } = userSlice.actions;

  useEffect(() => {
    check()
      .then((data) => dispatch(setUser(data)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center mt-4">
        <div className="spinner-dot-circle spinner-secondary">
          <div className="spinner-dot" />
          <div className="spinner-dot" />
          <div className="spinner-dot" />
          <div className="spinner-dot" />
          <div className="spinner-dot" />
          <div className="spinner-dot" />
          <div className="spinner-dot" />
          <div className="spinner-dot" />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
