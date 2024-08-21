// layout.tsx
import AlternateNavBar from "@/components/bank/AlternateNavBar";
import type { Metadata } from "next";
import SidebarCredit from "@/components/bank/SidebarCredit";
import Footer2 from "@/components/MainLayout/footer2";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import NavBar from "@/components/bank/NavBar";
import Footer1 from "@/components/MainLayout/footer1";
import ProgressNavBar from "@/components/bank/ProgressNavBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


return (
    <main className="main-screen">
      <ProgressNavBar />
      <div className="flex h-screen w-[1250px] ml-[250px] font-inter">
        {/* Main content */}
        <div className="flex size-full flex-col w-full">
          {children}
        </div>
      </div>
      
    </main>
    
  );
}
