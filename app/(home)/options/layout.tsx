import ProgressNavBar from "@/components/bank/ProgressNavBar";

export default function OptionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="main-screen">
      <ProgressNavBar />
      <div className="flex h-screen w-[1250px] ml-[250px] font-inter">
        <div className="flex size-full flex-col w-full">
          {children}
        </div>
      </div>
    </main>
  );
}
