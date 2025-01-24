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
    <div className="absolute z-50 w-full pl-32 from-black bg-gradient-to-b flex justify-between items-center">
      <img src={LOGO} alt="logo" className="w-56" />
      {user && (
        <div className="flex items-center">
          {toggleGptLang && (
            <select
              className="p-2 bg-gray-700 text-white rounded-lg"
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
            className="text-white bg-purple-700 p-3 rounded-lg font-bold mx-10"
            onClick={handleGptToggle}
          >
            {toggleGptLang ? "Homepage" : "GPT Search"}
          </button>
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
