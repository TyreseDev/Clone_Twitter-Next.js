"use client";
import { SessionProvider } from "next-auth/react";

export const Provider = ({ children, session }: any) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
