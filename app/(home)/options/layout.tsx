import NavBar from "@/components/bank/NavBar";
import ProgressNavBar from "@/components/bank/ProgressNavBar";

export default function OptionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="main-screen">
      <NavBar />
      <div className="flex h-screen w-full font-inter">
        <div className="flex size-full flex-col w-full">
          {children}
        </div>
      </div>
    </main>
  );
}
