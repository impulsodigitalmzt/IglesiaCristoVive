"use client";

import * as React from "react";

type HomeVideoGateProps = {
  children: React.ReactNode;
};

function HomeVideoGate({ children }: HomeVideoGateProps) {
  return <>{children}</>;
}

export { HomeVideoGate, type HomeVideoGateProps };