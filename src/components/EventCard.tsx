"use client";
import React from "react";
import { motion } from "framer-motion";

export default function EventCard({
  date = "Dec 15 2024",
  title = "Senior Wellness Workshop",
  description = "Join us for a comprehensive wellness workshop covering physical health, mental wellness, and social connection strategies.",
  img = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
}: { 
  date?: string; 
  title?: string; 
  description?: string;
  img?: string; 
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="card group overflow-hidden hover:scale-105 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-block rounded-full bg-orange-500 text-white text-xs px-3 py-1.5 font-semibold shadow-lg">
            {date}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-title text-slate-900 group-hover:text-orange-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors group/link"
          >
            Learn More
            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Community Center
          </div>
        </div>
      </div>
    </motion.article>
  );
}