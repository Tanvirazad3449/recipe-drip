import React from "react";
import withDelay from "@/app/hocs/withDelay";
import { RegularText } from "./Texts";

const DelayedRegularText = withDelay(RegularText, 1000);

interface NotificationBlockProps {
  message: string | null;
  type: "error" | "info"; // Determines the type of notification
}

const NotificationBlock: React.FC<NotificationBlockProps> = ({ message, type }) => {
  // Set styles based on notification type
  const styles = {
    error: "text-red-500 bg-red-100 text-center",
    info: "text-blue-500 bg-blue-100 text-center",
  };

  return (
    <div
      className={`flex justify-center items-start flex-1 text-lg font-semibold ${styles[type]} p-4`}
    >
      <DelayedRegularText className={styles[type]}>{message}</DelayedRegularText>
    </div>
  );
};

export { NotificationBlock };
