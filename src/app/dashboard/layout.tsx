"use client";
import { NavDashboard } from "@/components/dashboard/navbar.compoent";
import { DashbordSidebar } from "@/components/dashboard/sidebar.component";
import React, { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <html lang="en" className="h-full">
      <body className="w-full h-full flex flex-col">
        <NavDashboard isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="flex h-full fixed w-full">
          <DashbordSidebar isMenuOpen={isMenuOpen} />
          <main className="p-2 overflow-auto flex-1 w-full h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
