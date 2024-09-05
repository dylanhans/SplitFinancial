import NavBar from "@/components/bank/NavBar";
import ProgressNavBar from "@/components/bank/ProgressNavBar";
import Footer1 from "@/components/MainLayout/footer1";

const Layout = ({ children }: { children: React.ReactNode }) => {

  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar 
        
      />
      <main className="flex-1 flex flex-col w-full font-inter">
        <div className="flex-grow">
          {children}
        </div>
        <div className="chatbox__button fixed z-50 bottom-4 right-4">
          <button>
            <img 
              src="/icons/headerlogo.png" 
              height={50} 
              width={50} 
              alt="Split Assistant" 
              className='rounded-md bg-gradient-to-r from-[#14315B] to-[#2757A1]' 
            />
          </button>
        </div>
      </main>
      <Footer1 />
    </div>
  );
}

export default Layout;

