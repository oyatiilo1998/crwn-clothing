import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  singInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const redirectFunction = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    };
    redirectFunction();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={singInWithGoogleRedirect}>Sign in with Redirect</button>
    </div>
  );
};

export default SignIn;
