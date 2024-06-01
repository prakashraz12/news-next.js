import { Mukta } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import React from "react";
import { ReduxStoreProviderLayout } from "@/layout/redux-provider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/layout/theme-provider";

const mukta = Mukta({ subsets: ["devanagari"], weight: "400" });

export const metadata: Metadata = {
  title: "नेपाल खबर",
  description: "This is site for accessing news content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="manifeast" href="/manifest.json" />
          <meta name="theme-color" content="#ffff" />
        </head>
        <body className={mukta.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReduxStoreProviderLayout>
              <Toaster position="top-center" reverseOrder={false} />
              {children}
            </ReduxStoreProviderLayout>
          </ThemeProvider>
        </body>
      </html>
    </React.Fragment>
  );
}
