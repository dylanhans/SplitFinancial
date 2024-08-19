import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="relative flex min-h-screen w-full font-inter overflow-hidden">
        <div className="auth-asset w-full full-screen-animation">
          {/*<div>
              <Image 
                src="/icons/15.webp"
                alt="auth image"
                width={1000}
                height={1000}
              />
          </div>*/}
        </div>
        <div className="children-wrapper sliding-section w-3/4">
          {children}
        </div>
      </main>
    );
  }
  