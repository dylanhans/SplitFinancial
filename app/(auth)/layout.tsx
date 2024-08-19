import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="relative flex min-h-screen w-full font-inter overflow-hidden">
        <div className="auth-asset w-full full-screen-animation">
          <div className="text-wrapper flex flex-col w-full min-h-screen h-full relative pb-15">
            <a className="logoimage" href="/home">
              <Image 
                src="/icons/headerlogo.png"
                alt="split logo"
                width={60}
                height={60}
              />
              
            </a>
                <p className="font-signin2 text-white mt-2">
                    Secure Sign-In
                </p>
                <p className="font-smallbolder balance-text-small mt-1  text-white">
                    SFS Online Banking
                </p>
                <>
                        <Loader2 size={20} 
                        className="animate-spin2 mt-10 text-[#006ac3]" /> &nbsp;
                </>
              <div className="supported-by">
                <Image 
                  src="/icons/sentry2.png"
                  alt="supported by sentry"
                  width={150}
                  height={150}
                  className="sentry"
                />
              </div>
          </div>
       </div>
        <div className="children-wrapper sliding-section">
          {children}
        </div>
    </main>
    );
  }