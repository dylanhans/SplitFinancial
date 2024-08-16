// layout.tsx
import AlternateNavBar from "@/components/bank/AlternateNavBar";
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

  if (!loggedIn) redirect('/sign-in')


    return (
      <main className="main-screen">
        <AlternateNavBar 
          user={loggedIn}
        />

        <div className="flex h-screen w-[1250px] ml-[250px] font-inter">
          {/* Main content */}
          <div className="flex size-full flex-col w-3/4">
            {children}
          </div>
          <div className="flex flex-col w-1/4">
            <SidebarCredit 
              type='homepage'
            />
          </div>
        </div>
        <Footer2/>
      </main>
    );
  }
