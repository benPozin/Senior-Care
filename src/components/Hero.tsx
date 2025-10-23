"use client";
import { Icon } from "./icons";
import { motion } from "framer-motion";

export default function Hero() {
return (
           <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-orange-50 overflow-hidden">
             {/* Background Elements */}
             <div className="absolute inset-0">
               <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
               <div className="absolute top-40 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
             </div>

      <div className="relative mx-auto max-w-7xl container-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
                     <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6, delay: 0.2 }}
                       className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium"
                     >
                       <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                       Compassionate Senior Care Since 2014
                     </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-hero text-slate-900 leading-tight"
              >
                Empowering Seniors Through
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  {" "}Compassionate Support
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-subtitle text-slate-600 max-w-lg"
              >
                At Spirit Alliance Social, we believe every senior deserves dignity, respect, and meaningful connections. 
                Our comprehensive care services help older adults live independently while staying connected to their community.
              </motion.p>
</div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#article" className="btn btn-brand">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-outline">
                Get Started Today
              </a>
            </motion.div>

                   {/* Stats */}
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.6 }}
                     className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200"
                   >
                     <div className="text-center">
                       <div className="text-2xl font-bold text-slate-900">150+</div>
                       <div className="text-sm text-slate-600">Seniors Supported</div>
                     </div>
                     <div className="text-center">
                       <div className="text-2xl font-bold text-slate-900">7 Days</div>
                       <div className="text-sm text-slate-600">A Week Support</div>
                     </div>
                   </motion.div>
          </motion.div>

                 {/* Image/Visual */}
                 <motion.div
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="relative"
                 >
                   <div className="relative">
                     <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                       <img 
                         src="https://media.istockphoto.com/id/499062115/photo/helping-the-needy.jpg?s=612x612&w=0&k=20&c=fUCVTaIfqL5J8HbyMM8DKQpdjJlR1pJqdtonbdQThJs="
                         alt="Elderly person receiving compassionate care and support"
                         className="w-full h-full object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                       <div className="absolute bottom-6 left-6 right-6 text-white">
                         <h3 className="text-xl font-bold mb-2">Compassionate Care</h3>
                         <p className="text-sm opacity-90">Professional support with a personal touch</p>
                       </div>
                     </div>
              
</div>
</motion.div>
</div>
</div>
</section>
);
}