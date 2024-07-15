// layout.tsx
import AlternateNavBar from "@/components/bank/AlternateNavBar";
import CreditQuick from "@/components/bank/CreditQuick";
import MobileNav from "@/components/bank/MobileNav";
import NavBar from "@/components/bank/NavBar";
import Sidebar from "@/components/bank/Sidebar";
import SidebarCredit from "@/components/bank/SidebarCredit";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
  sidebarChildren,
}: Readonly<{
  children: React.ReactNode;
  sidebarChildren: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in')

  return (
    <main className="main-screen">
      <AlternateNavBar />
      <div className="flex h-screen w-[1250px] ml-[250px] font-inter">
        {/* Main content */}
        <div className="flex size-full flex-col w-3/4">
          <div className="root-layout">
            <Image src="/icons/logo.svg/" width={30} height={30} alt="logo" />
            <div>
              <MobileNav user={loggedIn} />
            </div>
          </div>
          {children}
        </div>

        {/* New column to the right */}
        <div className="flex flex-col w-1/4">
          <SidebarCredit />
          {sidebarChildren}
        </div>
      </div>
    </main>
  );
}
