// features/auth/utils/error-messages.ts
export const getErrorMessage = (errorCode: string): string => {
    const errorMessages: Record<string, string> = {
      'auth/email-already-in-use': 'The email is already in use',
      'auth/weak-password': 'The password is too weak',
      'auth/invalid-email': 'The email is invalid',
      'auth/invalid-credential': 'Invalid Credential',
      'auth/user-not-found': 'No user found with this email',
      'auth/wrong-password': 'Incorrect password'
    };
  
    return errorMessages[errorCode] || `Authentication failed: ${errorCode}`;
  };