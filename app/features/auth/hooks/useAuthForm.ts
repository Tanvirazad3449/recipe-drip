import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithGoogle,
  signUpWithEmail,
  signInWithEmail,
} from "@libs/firebase/auth";
import { FirebaseError } from "firebase/app";
import { getErrorMessage } from "@/app/utils/getErrorMessage";

interface AuthFormState {
    email: string;
    password: string;
    errorMessage: string | null;
    isSignInMode: boolean;
  }
  
  export const useAuthForm = () => {
    const [formState, setFormState] = useState<AuthFormState>({
      email: "",
      password: "",
      errorMessage: null,
      isSignInMode: true
    });
    const router = useRouter();
  
    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle();
        router.push("/profile");
      } catch (error) {
        if (error instanceof FirebaseError) {
          setFormState(prev => ({
            ...prev,
            errorMessage: "Google sign-in failed: " + error.message
          }));
        }
      }
    };
  
    const handleEmailAuth = async () => {
      try {
        const authFunction = formState.isSignInMode ? signInWithEmail : signUpWithEmail;
        await authFunction(formState.email, formState.password);
        router.push("/profile");
      } catch (error) {
        if (error instanceof FirebaseError) {
          setFormState(prev => ({
            ...prev,
            errorMessage: getErrorMessage(error.code)
          }));
        }
      }
    };
  
    return {
      formState,
      setFormState,
      handleGoogleSignIn,
      handleEmailAuth
    };
  };