"use client"
import { useAuth } from "@/app/contexts/UserContext";
import { useAuthForm } from "./hooks/useAuthForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EmailForm from "./components/EmailForm";
import { Button } from "@/app/components/ui/Button";
import GoogleIcon from '@mui/icons-material/Google';
import AuthToggle from "./components/AuthToggle";
import { HeadingText } from "@/app/components/ui/Texts";

// features/auth/components/auth-page.tsx
const Auth: React.FC = () => {
    const {
      formState,
      setFormState,
      handleGoogleSignIn,
      handleEmailAuth
    } = useAuthForm();
  
    const { user } = useAuth();
    const [isMounted, setIsMounted] = useState(false);
  const router = useRouter()
    useEffect(() => {
      setIsMounted(true);
      if (user) {
        router.push("/profile");
      }
    }, [user]);
  
    if (!isMounted) return null;
  
    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 pt-8">
        <div className="bg-white shadow-md max-w-sm w-full p-8">
          <HeadingText className="mb-4">{formState.isSignInMode ? "Sign in" : "Sign up"}</HeadingText>
  
          <EmailForm
            email={formState.email}
            password={formState.password}
            isSignInMode={formState.isSignInMode}
            onEmailChange={(email) => setFormState(prev => ({ ...prev, email }))}
            onPasswordChange={(password) => setFormState(prev => ({ ...prev, password }))}
            onSubmit={handleEmailAuth}
            errorMessage={formState.errorMessage}
          />
  
          <Button
            onClick={handleGoogleSignIn}
            className="w-full font-bold"
            icon={<GoogleIcon sx={{color: "white", fontSize: 18}} />}
          >
            Sign In with Google
          </Button>

          <AuthToggle
            isSignInMode={formState.isSignInMode}
            onToggle={() => setFormState(prev => ({ ...prev, isSignInMode: !prev.isSignInMode }))}
          />
        </div>
      </div>
    );
  };

  export default Auth