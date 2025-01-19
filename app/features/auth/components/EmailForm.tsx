import { Button } from "@/app/components/ui/Button";
import { NotificationBlock } from "@/app/components/ui/NotificationBlock";
import TextInput from "@/app/components/ui/TextInput";
import { useState } from "react";

import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface EmailFormProps {
    email: string;
    password: string;
    isSignInMode: boolean;
    onEmailChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onSubmit: () => Promise<void>;
    errorMessage: string | null;
}

const EmailForm = ({
    email,
    password,
    isSignInMode,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    errorMessage
}: EmailFormProps) => {
    const [passwordHidden, setPasswordHidden] = useState(true);

    return (
        <div>
            <TextInput
                type="email"
                placeholder="Enter your Email"
                label="Email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                startIcon={<EmailIcon sx={{ color: "gray" }} />}
            />
            <div className="mt-4">

                <TextInput
                    label="Password"
                    type={passwordHidden ? "password" : "text"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => onPasswordChange(e.target.value)}
                    startIcon={<PasswordIcon sx={{ color: "gray" }} />}
                    endIcon={passwordHidden ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    onClickEndIcon={() => setPasswordHidden(!passwordHidden)}
                />
            </div>

            {errorMessage && (
                <div className="mt-4">
                    <NotificationBlock type="error" message={errorMessage} />
                </div>
            )}

            <Button onClick={onSubmit} className="w-full mb-4 font-bold mt-4">
                {isSignInMode ? "Sign In" : "Sign Up"}
            </Button>
        </div>
    );
};

export default EmailForm