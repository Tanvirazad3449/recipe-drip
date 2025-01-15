import React from "react";
import { RegularText } from "./Texts";
import withDelay from "@/app/utils/withDelay";

const DelayedRegularText = withDelay(RegularText, 1000);

interface NotificationBlockProps {
  message: string | null;
}

const ErrorNotificationBlock: React.FC<NotificationBlockProps> = ({ message }) => (
  <div className="flex pt-12 items-center justify-center h-screen text-lg font-semibold">
    <DelayedRegularText className="text-red-600">{message}</DelayedRegularText>
  </div>
);

const InfoNotificationBlock: React.FC<NotificationBlockProps> = ({ message }) => (
  <div className="flex pt-24 items-start justify-center h-screen text-lg font-semibold">
    <DelayedRegularText className="text-slate-400">{message}</DelayedRegularText>
  </div>
);

export { ErrorNotificationBlock, InfoNotificationBlock };
