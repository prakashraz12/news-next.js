'use client';
import { NavDashboard } from "@/components/dashboard/navbar.compoent";
import { DashbordSidebar } from "@/components/dashboard/sidebar.component";
import { useState } from "react";


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
        <div className="flex flex-1 h-full">
          <DashbordSidebar isMenuOpen={isMenuOpen}  />
          <main className="flex-1 p-2">{children}</main>
        </div>
      </body>
    </html>
  );
}
