import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl container-padding py-4 flex items-center justify-between">
        <a className="flex items-center gap-4 group" href="#">
                 <div className="relative">
                   <div className="size-12 grid place-content-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                     SC
                   </div>
                   <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                 </div>
                 <div>
                   <p className="font-bold text-xl leading-none text-slate-900 group-hover:text-orange-600 transition-colors">
                     Senior Care
                   </p>
                   <p className="text-sm text-slate-600 -mt-1 font-medium">
                     Compassionate Support
                   </p>
                 </div>
        </a>
        
               <nav className="hidden lg:flex items-center gap-8">
                 {[
                   { name: "Home", href: "#" },
                   { name: "About", href: "#about" },
                   { name: "Services", href: "#services" },
                   { name: "Contact", href: "#contact" }
                 ].map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="relative text-slate-700 hover:text-orange-600 font-medium transition-all duration-200 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            aria-label="Search" 
            className="p-2 rounded-xl text-slate-500 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="btn btn-brand hidden sm:inline-flex">
            Get Started
          </button>
          <button className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}