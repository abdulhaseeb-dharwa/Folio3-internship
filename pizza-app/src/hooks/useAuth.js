import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/Auth-slice";

const useAuth = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    try {
      const result = await dispatch(login({ email, password })).unwrap();
      if (result.role === "admin") {
        navigate("/add");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return {
    handleLogin,
    error,
  };
};

export default useAuth;
