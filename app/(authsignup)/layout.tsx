// layout.tsx
import AlternateNavBar from "@/components/bank/AlternateNavBar";
import type { Metadata } from "next";
import SidebarCredit from "@/components/bank/SidebarCredit";
import Footer2 from "@/components/MainLayout/footer2";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-up')

return (
    <main className="main-screen">
      <AlternateNavBar 
          user={loggedIn}
        />
      <div className="flex h-screen w-[1250px] ml-[250px] font-inter">
        {/* Main content */}
        <div className="flex size-full flex-col w-full">
          {children}
        </div>
      </div>
      <Footer2/>
    </main>
  );
}
