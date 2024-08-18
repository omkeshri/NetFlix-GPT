import { useRef, useState } from "react";
import Header from "./Header";
import { checkSignInData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { AVATAR, BACKGROUND } from "../Utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // {
    //   !isSignInForm
    //     ? setErrorMessage(
    //         checkSignUpData(
    //           name.current.value,
    //           email.current.value,
    //           password.current.value
    //         )
    //       )
    //     : setErrorMessage(
    //         checkSignInData(email.current.value, password.current.value)
    //       );
    // }
    const message = checkSignInData(
      // name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute w-full">
        <img
          src={BACKGROUND}
          alt="Background"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36 w-3/12 right-0 left-0 mx-auto bg-[rgba(0,0,0,0.7)] p-14"
      >
        <h1 className="font-bold text-white text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Username"
            className="p-3 mb-4 w-full text-white bg-[#272728] border border-[rgb(255, 255, 255)] rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-3 mb-4 w-full text-white bg-[#272728] border border-[rgb(255, 255, 255)] rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mb-2 w-full text-white  bg-[#272728] border border-[rgb(255, 255, 255)] rounded-sm"
        />
        <p className=" text-[#E50914]">{errorMessage}</p>
        <button
          className="p-2 mt-2 text-white w-full bg-[#E50914] rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
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
