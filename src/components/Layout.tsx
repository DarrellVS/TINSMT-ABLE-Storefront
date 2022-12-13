import React from "react";
import Topnav from "./Topnav";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Topnav />
      {children}
    </>
  );
}
