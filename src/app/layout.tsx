import { Mukta } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import React from "react";
import { ReduxStoreProviderLayout } from "@/layout/redux-provider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/layout/theme-provider";
import Head from "next/head";

const mukta = Mukta({ subsets: ["devanagari"], weight: "400" });

export const metadata: Metadata = {
  title: {
    template: "%s | नेपाल खबर",
    default: "नेपाल खबर",
  },
  description: "This is site for accessing news content",
  other:{"google-site-verification":"GOyb2NPFc9DelE8EB0JX-koPq8cp6QZnkLlnKuO0Q4Y"}
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
    
      <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Google console</title>
        <meta
          name="google-site-verification"
          content="GOyb2NPFc9DelE8EB0JX-koPq8cp6QZnkLlnKuO0Q4Y"
        />
      </Head>
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
