import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../api/APIs";

const useGoogleLogin = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const startGoogleLogin = async () => {
    await loginWithRedirect({
      authorizationParams: {
        prompt: "select_account",
      },
    });
  };

  const syncWithBackend = async () => {
    if (!isAuthenticated || !user) return;

    const res = await loginAPI({
      email: user.email,
      email_sub: user.sub,
    });

    if (res.success) {
      localStorage.setItem("token", res.token);
      navigate("/");
    }
  };

  return { startGoogleLogin, syncWithBackend };
};

export default useGoogleLogin;
