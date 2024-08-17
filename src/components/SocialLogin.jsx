import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSocialLogin = (provider) => {
    provider()
    .then((result) => {
      if (result.user) {
        navigate(location?.state || "/");
      }
    });
  };
  const { googleLogIn } = useContext(AuthContext);
  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mb-3 divider font-serif">
        Login With
      </h1>
      <button onClick={()=>handleSocialLogin(googleLogIn)} className="btn font-serif btn-outline btn-sm btn-success w-1/3 mr-2">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;