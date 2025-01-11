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

const SignInPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      console.log("authUser: ", authUser)
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
    } catch (error: any) {
      console.error("Sign up error:", error); // Log the full error for debugging
      if (error.code === "auth/email-already-in-use") {
        alert("The email address is already in use by another account.");
      } else if (error.code === "auth/weak-password") {
        alert("The password is too weak. Please choose a stronger password.");
      } else {
        alert("Sign up failed: " + error.message);
      }
    }
  };
  const handleEmailSignIn = async () => {
    try {
      await signInWithEmail(email, password);
    } catch (error: any) {
      console.error("Sign in error:", error); // Log full error for debugging
      if (error.code === "auth/user-not-found") {
        alert("No user found with this email. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email address. Please check and try again.");
      } else if (error.code === "auth/invalid-credential") {
        alert("Invalid Credentials. Please check and try again.");
      } else {
        alert("Sign in failed: " + error.message);
      }
    }
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
  };

  return (
    <div className="mt-12 items-center align-middle flex flex-1 justify-center flex-col">
      <h1>Sign In</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName || user.email}!</p>
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="User Avatar"
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            />
          )}
          <br />
          <button
            onClick={handleSignOut}
            style={{
              padding: "10px 20px",
              marginTop: "10px",
              backgroundColor: "#d32f2f",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={handleGoogleSignIn}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4285F4",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Sign In with Google
          </button>
          <div style={{ marginTop: "20px" }}>
            <h2>Email Authentication</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px",
                margin: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px",
                margin: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <br />
            <button
              onClick={handleEmailSignUp}
              style={{
                padding: "10px 20px",
                margin: "10px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sign Up with Email
            </button>
            <button
              onClick={handleEmailSignIn}
              style={{
                padding: "10px 20px",
                margin: "10px",
                backgroundColor: "#008CBA",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sign In with Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
