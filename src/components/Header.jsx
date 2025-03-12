import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, supportedLanguages } from "../utils/constants";
import { toggleGpt } from "../utils/GptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const toggleGptLang = useSelector((store) => store.gpt.toggleGpt);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        //navigate("/error")
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when components unmounts
    return () => unsubscribe();
  }, []);
  const handleGptToggle = () => {
    dispatch(toggleGpt());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="absolute z-50 w-screen md:pl-32  from-black bg-gradient-to-b flex flex-col md:flex-row justify-between items-center">
      <img src={LOGO} alt="logo" className="w-44 md:w-56 mx-auto md:mx-0" />
      {user && (
        <div className="flex items-center justify-between ">
          {toggleGptLang && (
            <select
              className="p-2 bg-gray-700 text-white rounded-lg text-sm md:text-base "
              onChange={handleLanguageChange}
            >
              {supportedLanguages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-purple-700 p-3 rounded-lg font-medium md:font-bold mx-8 md:mx-10 text-sm md:text-base "
            onClick={handleGptToggle}
          >
            {toggleGptLang ? "Homepage" : "GPT Search"}
          </button>
          <img
            alt="user"
            src={user?.photoURL}
            className="hidden md:block w-10 md:w-14 h-10 md:h-14"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-medium md:font-bold bg-red-600 p-4 h-10 md:h-12 m-0 md:m-5 flex items-center rounded-xl cursor-pointer text-sm md:text-base"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
