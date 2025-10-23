"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ 
  title, 
  subtitle = "Compassionate care and support for seniors and their families" 
}: { 
  title: string; 
  subtitle?: string; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center mx-auto max-w-4xl"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        Spirit Alliance Social
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}