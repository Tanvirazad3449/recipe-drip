"use client";

import React from "react";
import PropTypes from "prop-types";
import { RegularText } from "@/app/components/ui/Texts";

interface AuthToggleProps {
  isSignInMode: boolean;
  onToggle: () => void;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ isSignInMode, onToggle }) => {
  return (
    <RegularText className="mt-4">{isSignInMode ? "Don't" : "Already"} have an account?
          <span
            className="font-bold hover:text-brandColor cursor-pointer"
            onClick={onToggle}>{isSignInMode ? " Sign Up Now!" : " Sign In Now!"}
          </span>
        </RegularText>

  );
};

AuthToggle.propTypes = {
  isSignInMode: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default AuthToggle;
