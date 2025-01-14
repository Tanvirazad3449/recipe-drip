"use client";
import { useState, useEffect } from "react";
import {
  signInWithGoogle,
  signUpWithEmail,
  signInWithEmail,
} from "../../libs/firebase/auth";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/UserContext";
import { MediumButton, MediumButtonWithIcon } from "@/app/components/atoms/Buttons";
import { Input, InputWithIconButton } from "@/app/components/atoms/Inputs";
import { RegularText, SmallText } from "@/app/components/atoms/Texts";
import GoogleLogo from "@/app/svg/GoogleLogo";
import TogglePasswordVisibiltyIconButton from "@/app/components/atoms/TogglePasswordVisibiltyIconButton";

const SignInPage: React.FC = () => {
  const [isSignInMode, setIsSignInMode] = useState(true);
  const [passwordHidden, setPasswordHidden] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    setIsMounted(true);
    if(user){
      router.push("/profile")
    }
  }, [user]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push("/profile");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setErrorMessage("Google sign-in failed: " + error.message);
      }
    }
  };

  const handleEmailSignUp = async () => {
    try {
      await signUpWithEmail(email, password);
      router.push("/profile");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorMessage("The email address is already in use by another account.");
            break;
          case "auth/weak-password":
            setErrorMessage("The password is too weak. Please choose a stronger password.");
            break;
          default:
            setErrorMessage("Sign up failed: " + error.message);
        }
      }
    }
  };

  const togglePasswordVisibility = () =>{
    setPasswordHidden(!passwordHidden)
  }

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmail(email, password);
      router.push("/profile");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            setErrorMessage("Invalid Credential. Please try again.");
            break;
          case "auth/user-not-found":
            setErrorMessage("No user found with this email. Please sign up first.");
            break;
          case "auth/wrong-password":
            setErrorMessage("Incorrect password. Please try again.");
            break;
          case "auth/invalid-email":
            setErrorMessage("Invalid email address. Please check and try again.");
            break;
          default:
            setErrorMessage("Sign in failed: " + error.message);
        }
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 pt-8">
      <div className="bg-white shadow-md max-w-sm w-full p-8">
        <RegularText>{isSignInMode ? "Don't" : "Already"} have an account?
          <span
            className="font-bold hover:text-brandColor cursor-pointer"
            onClick={() => setIsSignInMode((prev) => !prev)}>{isSignInMode ? " Sign Up Now!" : " Sign In Now!"}
          </span>
        </RegularText>

        <div>
          <div className="mt-6">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputWithIconButton

              type={passwordHidden ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<TogglePasswordVisibiltyIconButton passwordHidden={passwordHidden} onClick={togglePasswordVisibility}/>}
            />
            {errorMessage && (
              <SmallText className="text-red-700 text-center bg-red-50 py-2">
                {errorMessage}
              </SmallText>
            )}
            <MediumButton
              onClick={isSignInMode ? handleEmailSignIn : handleEmailSignUp}
              className="w-full mb-4 mt-2 font-bold"
            >
              {isSignInMode ? "Sign In" : "Sign Up"}
            </MediumButton>
            {/* <RegularText className="mt-8 mb-4">You can also use your Google account to sign in</RegularText> */}
            <MediumButtonWithIcon
              onClick={handleGoogleSignIn}
              className="w-full font-bold"
              icon={<GoogleLogo />}
            >
              Sign In with Google
            </MediumButtonWithIcon>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignInPage;
