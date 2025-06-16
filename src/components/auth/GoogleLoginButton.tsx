import {
  GoogleLogin,
  GoogleOAuthProvider,
  type CredentialResponse,
} from "@react-oauth/google";
import { useAuth } from "../../contexts/AuthContext";
import axiosInstance from "../../apis/AxiosInstance";
import Swal from "sweetalert2";
import { GOOGLE_CLIENT_ID } from "../../constants/SecretConstant";

export const GoogleLoginButton = () => {
  const { login } = useAuth();

  const handleSuccess = async (credentialResposne: CredentialResponse) => {
    try {
      const res = await axiosInstance.post("/auth/google-login", {
        idToken: credentialResposne.credential,
      });

      const { accessToken } = res.data;
      login(accessToken);
      Swal.fire({
        title: "Đăng nhập thành công",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="my-4 text-center text-sm text-gray-500">Hoặc</div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log("Google login thất bại")}
      ></GoogleLogin>
    </GoogleOAuthProvider>
  );
};
