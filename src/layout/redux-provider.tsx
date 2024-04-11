"use client";
import { ReactNode } from "react";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

interface ReduxStoreProviderLayoutProps {
  children: ReactNode;
}

export const ReduxStoreProviderLayout = ({
  children
}: ReduxStoreProviderLayoutProps) => {
  return <Provider store={store}>{children}</Provider>;
};
