import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
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
        <form className=" absolute flex flex-col top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black bg-opacity-80 text-white p-12 rounded-3xl">
          <h1 className="font-bold text-3xl  my-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-800 rounded-xl bg-opacity-80"
            ></input>
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-800 rounded-xl bg-opacity-80"
          ></input>
          <input
            type="text"
            placeholder="password"
            className="p-4 my-4 w-full bg-gray-800 rounded-xl bg-opacity-80"
          ></input>
          <button className="p-3 my-6 text-lg font-bold bg-red-600 hover:bg-red-700 rounded-xl w-full">
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
      Login
    </div>
  );
};

export default Login;
