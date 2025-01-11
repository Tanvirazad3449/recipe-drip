"use client";
import { useEffect, useState } from "react";
import {
  signInWithGoogle,
  signOutWithGoogle,
  onAuthStateChanged,
  signUpWithEmail,
  signInWithEmail,
} from "../../libs/firebase/auth";
import { User } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const SignInPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  const handleEmailSignUp = async () => {
    try {
      await signUpWithEmail(email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("The email address is already in use by another account.");
            break;
          case "auth/weak-password":
            alert("The password is too weak. Please choose a stronger password.");
            break;
          default:
            alert("Sign up failed: " + error.message);
        }
      }
    }
  };

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmail(email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("No user found with this email. Please sign up first.");
            break;
          case "auth/wrong-password":
            alert("Incorrect password. Please try again.");
            break;
          case "auth/invalid-email":
            alert("Invalid email address. Please check and try again.");
            break;
          default:
            alert("Sign in failed: " + error.message);
        }
      }
    }
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4 pt-12">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign In</h1>
        {user ? (
          <div className="text-center">
            <p className="text-lg">Welcome, {user.displayName || user.email}!</p>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mx-auto my-4"
              />
            )}
            <button
              onClick={handleSignOut}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-4"
            >
              Sign In with Google
            </button>
            <div className="mt-6">
              <h2 className="text-lg font-medium mb-4">Email Authentication</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                onClick={handleEmailSignUp}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition mb-3"
              >
                Sign Up with Email
              </button>
              <button
                onClick={handleEmailSignIn}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Sign In with Email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
