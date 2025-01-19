import { ReactNode } from "react";

export interface TextProps{
    className?: string;
    children: ReactNode;
}

export interface TextHTMLProps{
    text: string;
    className?: string;
}