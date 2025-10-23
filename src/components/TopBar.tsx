import React from "react";
import { Icon } from "./icons";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white/90 text-sm border-b border-slate-700/50">
             <div className="mx-auto max-w-7xl flex items-center justify-between container-padding py-3">
               <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                   <span className="text-orange-400 font-medium">Compassionate Care Since 2014</span>
                 </div>
               </div>
               <div className="flex items-center gap-6">
                 <a className="hover:text-orange-400 transition-colors duration-200 font-medium" href="tel:+14169924915">
                   📞 Emergency: (416) 992-4915
                 </a>
                 <a className="hover:text-orange-400 transition-colors duration-200 font-medium" href="mailto:inna@spiritalliancesocial.com">
                   📧 Contact Us
                 </a>
               </div>
             </div>
    </div>
  );
}