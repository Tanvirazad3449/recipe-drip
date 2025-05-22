import React from "react";
import withDelay from "@/app/hocs/withDelay";
import { RegularText } from "./Texts";

interface NotificationBlockProps {
  message: string | null;
  type: "error" | "info"; // Determines the type of notification
}

const Notification: React.FC<NotificationBlockProps> = ({ message, type }) => {
  // Set styles based on notification type
  const styles = {
    error: "bg-red-100 text-center",
    info: "bg-blue-100 text-center",
  };

  const textStyles = {
    error: "text-red-500 text-center",
    info: "text-blue-500 text-center",
  };

  return (
    <div
      className={`flex justify-center items-start flex-1 text-lg font-semibold ${styles[type]} p-4`}
    >
      <RegularText className={textStyles[type]}>{message}</RegularText>
    </div>
  );
};

const NotificationBlock = withDelay(Notification, 200)

export  {
  NotificationBlock
};
