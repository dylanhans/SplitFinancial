import ProgressLoad from "@/components/bank/ProgressLoad";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter relative">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full h-[60px] bg-white text-white shadow-md flex items-center px-6 z-10">
        <div className="flex-1 pl-[300px] inline-flex">
          <div className="left-header">
            <a
                className="absolute left-5 top-0.5 z-30 lg:relative lg:left-[unset] lg:top-[unset] lg:p-0"
                target="_self"
                aria-label="Split Financial"
                href="/home"
            >
                <img
                  src="/icons/logoimage.png"
                  alt="Logo Image"
                  height="20"
                  width="66"
                  data-testid="split-logo"
                />
            </a>
          </div>
          <div className="right-header pl-[900px]">
            <p className="text-black-1">Comm Here</p>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full h-[60px] bg-[#323232] text-white flex items-center px-6 z-10 flex-1 shadow-md">
        <div className="relative px-0 text-white lg:bg-[#323232] lg:px-6">
            <div className="account-functions ml-[260px] flex items-center w-full space-x-4">
                <p className="text-12 mt-1 font-normal text-white">
                    Split Financial Website, © 2023-2024
                </p>

                <div className="flex items-right space-x-4 mt-1 text-white pl-[500px]">
                    <p className="cursor-pointer hover-card-trigger flex underline items-center text-12 font-normal">
                        Legal
                        <span className="ml-2">|</span>
                    </p> 
                    <p className="cursor-pointer hover-card-trigger flex underline items-center text-12 font-normal">
                        Accessibility
                        <span className="ml-2">|</span>
                    </p> 
                    <p className="cursor-pointer hover-card-trigger flex underline items-center text-12 font-normal">
                        Privacy & Security
                        <span className="ml-2">|</span>
                    </p>
                    <p className="text-12 underline font-normal">
                        Advertising & Cookies
                    </p>
                </div>
            </div>
        </div>
      </footer>

      {/* First section taking up 2/5 */}
      <div className="w-2/5">
        <div className="text-wrapper2 flex bg-[#f3f4f5] flex-col w-full min-h-screen h-full relative pb-15">
          <a className="logoimage" href="/home">
            <Image
              src="/icons/test-card.png"
              alt="test card"
              width={320}
              height={320}
            />
          </a>
        </div>
      </div>

      {/* Children section taking up 3/5 */}
      <div className="w-3/5 relative">
        <div className="absolute top-[60px] left-0 w-full bg-gray-200">
          <ProgressLoad />
        </div>
        {children}
      </div>
    </main>
);
}