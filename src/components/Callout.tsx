"use client";
import React from "react";
import { Icon } from "./icons";
import { motion } from "framer-motion";

export default function Callout() {
  return (
    <div className="relative -mt-16 z-10">
      <div className="mx-auto max-w-6xl container-padding">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.6 }}
                 transition={{ duration: 0.6 }}
                 className="card-elevated p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
               >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Need Immediate Support or Emergency Care?
              </h3>
              <p className="text-slate-600 mb-3">
                Our compassionate team is available 24/7 to provide immediate assistance, 
                emergency support, and clinical guidance when you need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+15551234567" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (555) 123-4567
                </a>
                <a href="mailto:emergency@spiritalliancesocial.com" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-700 font-semibold transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  emergency@spiritalliancesocial.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <a href="#contact" className="btn btn-brand">
              Get Support Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}