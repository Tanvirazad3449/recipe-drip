// pages/protected.js
"use client"
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/libs/firebase/config";

export default function ProtectedPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>You must be signed in to view this page.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.displayName}!</h1>
      <p>This is a protected page.</p>
    </div>
  );
}
