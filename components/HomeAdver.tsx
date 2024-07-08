const HomeAdver = () => {
  
    return (
      <section className="w-full nav-height bg-blue relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="HomeAdver" className="HomeAdver-title">iPhone 15 Pro</p>
          <div className="md:w-10/12 w-9/12">
          </div>
        </div>
  
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn">Buy</a>
          <p className="font-normal text-black-1 text-xl">From $199/month or $999</p>
        </div>
      </section>
    )
  }

export default HomeAdver