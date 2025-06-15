import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export const GoogleLoginButton = () => {
  const handleSuccess = () => {

  }

  return (
    <GoogleOAuthProvider clientId="">
      <div className="my-4 text-center text-sm text-gray-500">Hoặc</div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log("Google login thất bại")}
      ></GoogleLogin>
    </GoogleOAuthProvider>
  );
};
