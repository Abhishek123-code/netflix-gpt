import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  };

  const handleValidation = () => {
    const message = validate(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) return;

    //sign in sign up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="bachground"
          className="brightness-[.8]"
        />
      </div>
      <div className="">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" absolute flex flex-col top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black bg-opacity-80 text-white p-12 rounded-3xl"
        >
          <h1 className="font-bold text-3xl  my-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-800 rounded-xl bg-opacity-80"
              required
            ></input>
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            required
            className="p-4 my-4 w-full bg-gray-800 rounded-xl bg-opacity-80"
          ></input>

          <input
            ref={password}
            type="password"
            placeholder="password"
            required
            className="p-4 my-4 w-full bg-gray-800 rounded-xl bg-opacity-80"
          ></input>

          <p className="text-red-700 font-semibold text-lg py-2 ">
            {errorMessage}
          </p>

          <button
            onClick={handleValidation}
            className="p-3 my-6 text-lg font-bold bg-red-600 hover:bg-red-700 rounded-xl w-full"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4">
            {isSignIn ? "New to Netflix? " : "Already a user? "}
            <span
              onClick={toggleSignInForm}
              className="cursor-pointer underline"
            >
              <strong>{isSignIn ? "Sign Up Now" : "Sign In Now"}</strong>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
