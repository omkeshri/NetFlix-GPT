import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg" alt="Background"></img>
      </div>

      <form className="absolute my-36 w-3/12 right-0 left-0 mx-auto bg-[rgba(0,0,0,0.7)] p-14">
        <h1 className="font-bold text-white text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="UserName"
            className="p-3 mb-4 w-full bg-[#272728] border border-[rgb(255, 255, 255)] rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-3 mb-4 w-full bg-[#272728] border border-[rgb(255, 255, 255)] rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-4 w-full bg-[#272728] border border-[rgb(255, 255, 255)] rounded-sm"
        />
        <button className="p-2 text-white w-full bg-[#E50914] rounded-sm">
          {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className="p-2 text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Neflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
