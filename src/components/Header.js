import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        //navigate("/error")
      });
  };

  return (
    <div className="absolute z-50 w-full pl-32 from-black bg-gradient-to-b flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-56"
      />
      {user && (
        <div className="flex items-center">
          <img alt="user" src={user?.photoURL} className="w-14 h-14" />
          <button
            onClick={handleSignOut}
            className="text-white font-bold bg-red-600 p-4 h-12 m-5 flex items-center rounded-xl cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
